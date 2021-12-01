export const formatDate = (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
}

export const formatDateFunc = date => {
    if (date) {
        return ("0" + (date.getDate())).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
    }
    return ""
}

export const createPasteDate = (day) => {
    const todaysDay = new Date()
    const getDate = new Date(todaysDay.setDate(todaysDay.getDate() - day));
    return getDate;
}