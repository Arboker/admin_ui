import DashboardView from '../view/Dashboard'
import React from 'react';
import { createElement } from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0
        }
    }

    handleChangeTab = (event, newValue) => {
        this.setState({
            tabValue: newValue
        })
    };

    render() {
        return createElement(DashboardView, {
            ...this
        })
    }
}

export default Dashboard;