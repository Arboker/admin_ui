import { createPasteDate, formatDateFunc, randomNumSum } from '../../helpers/main'

const result = {
    data: []
}

const pageNames = ["A", "B", "C", "D", "E", "C", "D", "E", "F", "G"];

for (let i = 0; i <= 90; i++) {
    const users = Math.ceil(Math.random() * 101)
    const unicUsers = Math.floor(Math.random() * users);
    const obj = {
        date: formatDateFunc(createPasteDate(i)),
        users: users,
        unic_users: unicUsers,
        pages: []
    }

    const usersPage = randomNumSum(users, pageNames.length).reverse();
    for (let j = 0; j < pageNames.length; j++) {
        obj.pages.push({
            name: "Page " + pageNames[j],
            users: usersPage[j]
        })
    }
    result.data.push(obj)
}

export const returnJSON = () => {
    return result;
}

export const returnSmallestDate = () => {
    return result.data[result.data.length - 1].date;
}