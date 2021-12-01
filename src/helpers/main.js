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

export const randomNumSum = (top, n) => {
    const getDiffs = (sum, n, acc = []) => {
        let x;
        if (n === 1) {
            x = sum;
        } else {
            const headroom = Math.ceil(Math.random() * 10);
            let cap = Math.floor((sum - headroom) / n);
            if (cap > 0) {
                x = 1 + Math.floor(Math.random() * cap);
            }
            else {
                x = 0
            }
        }

        acc.push(x);

        if (n <= 1) {
            return acc;
        } else {
            return getDiffs(sum - x * n, n - 1, acc);
        }
    }

    return getDiffs(top, n).map((_, i, a) => a.reduce((acc, c, j) => j <= i ? acc + c : acc)).reverse();
}

export const toDate = (str) => {
    if (str) {
        const date = new Date();
        let dateData = str.split(".")
        date.setDate(dateData[0])
        date.setMonth(dateData[1] - 1)
        date.setYear(dateData[2])
        return date;
    }
    return ""
}

export const getDateArray = (start, end) => {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}