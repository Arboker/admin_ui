import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import DashboardController from '../app/controller/Dashboard'
import NotFound from './NotFound'

class RouterComponent extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<DashboardController />} />

                <Route element={<NotFound />} />
            </Routes>
        )
    }
}

export default RouterComponent;