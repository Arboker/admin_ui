import { returnJSON } from './json/dashboard'

class DashboardService {
    getDashboard = () => {
        return new Promise((resolve, reject) => {
            if (!returnJSON()) {
                return setTimeout(
                    () => reject(new Error('Dashboard was not found')),
                    250
                );
            }

            setTimeout(() => resolve(returnJSON()), 250);
        });
    }
}

export default new DashboardService();