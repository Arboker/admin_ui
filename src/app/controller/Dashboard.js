import DashboardView from '../view/Dashboard'
import React from 'react';
import { createElement } from 'react';
import DashboardService from '../../services/Dashboard'
import { formatDateFunc, toDate, getDateArray } from '../../helpers/main'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
            dateRange: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
            open: false,
            options: {
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    },
                    type: "area"
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,
                },
                xaxis: {}
            },
            series: [],
            loading: false,
            tableData: [],
            smallestDate: null
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = (ranges) => {
        this.setState({
            loading: true
        })
        DashboardService.getSmallestDate().then(res => {
            this.setState({
                smallestDate: toDate(res)
            })
        })
        DashboardService.getDashboard().then(res => {
            let range = this.state.dateRange
            if (ranges) {
                range = ranges;
            }
            const startDay = range.startDate;
            const endDay = range.endDate;
            let results = res.data;
            const findStartDate = results.findIndex(item => {
                return item.date === formatDateFunc(startDay)
            })
            const findEndDate = results.findIndex(item => {
                return item.date === formatDateFunc(endDay)
            })

            if (findStartDate === findEndDate) {
                results = [res.data[findStartDate]]
            }
            else {
                results = res.data.filter(item => {
                    const currDate = new Date(toDate(item.date).setHours(0, 0, 0, 0));
                    const getDateDist = getDateArray(startDay, endDay)
                    return getDateDist.find(date => {
                        return (date.getFullYear() == currDate.getFullYear()) &&
                            (date.getMonth() == currDate.getMonth()) &&
                            (date.getDate() == currDate.getDate())
                    })
                })
            }

            if (results && results[0] && results.length !== 0) {
                const pageNames = results[0]?.pages.map(item => {
                    return item.name
                })
                const options = {
                    ...this.state.options,
                    xaxis: {
                        categories: pageNames
                    }
                }

                const sumOfPages = []

                for (let i = 0; i < pageNames.length; i++) {
                    const pageArr = []
                    results.map(item => {
                        const currLength = sumOfPages.length
                        const currPage = item.pages[currLength]
                        pageArr.push(currPage.users)
                    })
                    sumOfPages.push(pageArr.reduce((a, b) => a + b, 0))
                }

                const series = [
                    {
                        name: "value",
                        data: sumOfPages
                    }
                ]

                this.setState({
                    options: options,
                    series: series,
                    loading: false,
                    tableData: results
                })
            }
            else {
                this.setState({
                    loading: false
                })
                alert("Error was occurred!")
            }
        })
    }

    handleChangeTab = (event, newValue, key) => {
        this.handleChangeValue(event, newValue, "tabValue")
    };

    handleChangeValue = (event, newValue, key) => {
        this.setState({
            [key]: newValue
        })
    };

    toggleDD = (bool) => {
        this.setState({
            open: !this.state.open
        })

        if (bool) {
            document.addEventListener('click', this.handleClickDD, false);
        }
        else {
            document.removeEventListener('click', this.handleClickDD, false);
        }
    }

    handleClickDD = (e) => {
        if (!e.target.closest(".range_picker_container")) {
            this.toggleDD(false)
        }
    }

    handleSelect = (ranges) => {
        this.setState({
            dateRange: ranges.selection
        })
        this.getData(ranges.selection);
    }

    render() {
        return createElement(DashboardView, {
            ...this
        })
    }
}

export default Dashboard;