import moment from 'moment'

export const formatDate = (date) => {
    return moment(date).format("D MMM YYYY");
}

export const formatDateFunc = date => {
    return moment(date).format("DD.MM.YYYY")
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

    return getDiffs(top, n).map((_, i, a) => a.reduce((acc, c, j) => j <= i ? acc + c : acc));
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

export const getDateArray = (start, end, format) => {
    const arr = [];
    const dt = new Date(start);
    while (dt <= end) {
        let res = new Date(dt)
        if (format && format === "string") {
            res = formatDateFunc(res)
        }
        arr.push(res);
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

export const formatFullDate = date => {
    return moment(date).format("h:mm DD.MM.YYYY")
}