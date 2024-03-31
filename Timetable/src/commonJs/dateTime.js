function calcDayOfYear() {
    var date = new Date()
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
}

function calcWeekOfYear() {
    return Math.floor(calcDayOfYear() / 7)
}

function convertTime24to12(time24h) {
    let time = time24h.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];

    if (time.length > 1) {
        time = time.slice(1, -1);
        time[5] = +time[0] < 12 ? ' AM' : ' PM';
        time[0] = +time[0] % 12 || 12;
    }

    return time.join('');
}

export { calcDayOfYear, calcWeekOfYear, convertTime24to12 }