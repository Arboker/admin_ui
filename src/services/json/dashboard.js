import { createPasteDate, formatDateFunc } from '../../helpers/main'


console.log(formatDateFunc(createPasteDate(1)))

const result = {
    data: []
}

for (let i = 1; i <= 90; i++) {
    const obj = {
        "date": formatDateFunc(createPasteDate(i)),
        "users": Math.ceil(Math.random() * 101),
        "unic_users": Math.ceil(Math.random() * 100)
    }
    result.data.push(obj)
}

export const returnJSON = () => {
    return result;
}