import DashboardView from '../view/Dashboard'
import React from 'react';
import { createElement } from 'react';

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
                xaxis: {
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
            },
            series: [
                {
                    name: "value",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        }
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
    }

    render() {
        return createElement(DashboardView, {
            ...this
        })
    }
}

export default Dashboard;