import { returnJSON, returnJSONSearch } from './json/support'

class SupportService {
    getSupportData = () => {
        return new Promise((resolve, reject) => {
            if (!returnJSON()) {
                return setTimeout(
                    () => reject(new Error('Support data was not found')),
                    250
                );
            }

            setTimeout(() => resolve(returnJSON()), 250);
        });
    }

    searchByParams = (idnp, phone, date) => {
        return new Promise((resolve, reject) => {
            if (!returnJSONSearch()) {
                return setTimeout(
                    () => reject(new Error('Support data was not found')),
                    250
                );
            }

            setTimeout(() => resolve(returnJSONSearch(idnp, phone, date)), 250);
        });
    }
}

export default new SupportService();