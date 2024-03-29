function calcDayOfYear() {
    var date = new Date()
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
}

function calcWeekOfYear() {
    return Math.floor(calcDayOfYear() / 7)
}

export { calcDayOfYear, calcWeekOfYear }