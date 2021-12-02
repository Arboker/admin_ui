import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import DashboardController from '../app/controller/Dashboard'
import SupportController from '../app/controller/Support'
import NotFound from './NotFound'

class RouterComponent extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='*' element={<NotFound />} />

                <Route path="/" element={<DashboardController />} />
                <Route path="/support" element={<SupportController />} />
            </Routes>
        )
    }
}

export default RouterComponent;