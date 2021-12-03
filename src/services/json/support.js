const result = [
    {
        name: "John Doe",
        idnp: "200542345876452",
        phone: "+373 794 456969",
        pan: "2019 3820 2323 4477",
        transaction: new Date("12/02/2021")
    },
    {
        name: "Max Star",
        idnp: "200542345871452",
        phone: "+373 794 239543",
        pan: "2019 3820 2323 4477",
        transaction: new Date("12/01/2021")
    },
    {
        name: "Denis Dev",
        idnp: "200442345876452",
        phone: "+373 794 395235",
        pan: "2019 3820 2323 4477",
        transaction: new Date("11/30/2021")
    }
]

export const returnJSON = () => {
    return result;
}

export const returnJSONSearch = (idnp, phone, date) => {
    let res = result
    if (idnp && idnp.trim() !== "") {
        res = res.filter(item => item.idnp.includes(idnp))
    }
    if (phone && phone.trim() !== "") {
        res = res.filter(item => item.phone.includes(phone))
    }
    if (date) {
        res = res.filter(item => {
            return (item.transaction.getFullYear() === date.getFullYear()) &&
            (item.transaction.getMonth() === date.getMonth()) &&
            (item.transaction.getDate() === date.getDate())
        })
    }
    return res;
}