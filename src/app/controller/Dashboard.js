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

    toggleDD = () => {
        this.setState({
            open: !this.state.open
        })

        if (!this.state.open) {
            document.addEventListener('click', this.handleClickDD, false);
        }
        else {
            document.removeEventListener('click', this.handleClickDD, false);
        }
    }

    handleClickDD = (e) => {
        if (!e.target.closest(".range_picker_container")) {
            this.toggleDD()
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