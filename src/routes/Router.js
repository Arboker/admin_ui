import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import DashboardController from '../app/controller/Dashboard'
import DashboardApi from './api/Dashboard'
import NotFound from './NotFound'

class RouterComponent extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='*' element={<NotFound />} />

                <Route path="/" element={<DashboardController />} />
            </Routes>
        )
    }
}

export default RouterComponent;