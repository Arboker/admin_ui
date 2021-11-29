import DashboardView from '../view/Dashboard'
import React from 'react';
import { createElement } from 'react';

class Dashboard extends React.Component {
    render() {
        return createElement(DashboardView, {
            ...this
        })
    }
}

export default Dashboard;