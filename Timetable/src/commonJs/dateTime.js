function calcDayOfYear(date) {
    if (typeof (date) == "undefined") {
        date = new Date()
    }
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
}


function calcWeekOfYear(date) {
    return Math.floor(calcDayOfYear(date) / 7)
}

function getSemesterWeek(date) {
    if (typeof (date) == "undefined") {
        date = new Date()
    }
    var curMonth = date.getMonth()
    var curYear = date.getFullYear()
    var calendarWeek = calcWeekOfYear(date)
    var dateString = ""
    if (curMonth >= 0 && curMonth <= 3) {
        dateString = "January 8, " + curYear
        calendarWeek -= calcWeekOfYear(new Date(dateString))
        return calendarWeek
    } else if (curMonth >= 4 && curMonth <= 7) {
        dateString = "May 6, " + curYear
        calendarWeek -= calcWeekOfYear(new Date(dateString))
        return calendarWeek
    } else {
        dateString = "September 3, " + curYear
        calendarWeek -= calcWeekOfYear(new Date(dateString))
        return calendarWeek
    }
}

function getSemesterString(date) {
    if (typeof (date) == "undefined") {
        date = new Date()
    }
    var curMonth = date.getMonth()
    var curYear = date.getFullYear()
    var calendarWeek = getSemesterWeek(date)
    if (curMonth >= 0 && curMonth <= 3) {
        return "Winter " + curYear + " - Week " + calendarWeek + " / 14"
    } else if (curMonth >= 4 && curMonth <= 7) {
        return "Summer " + curYear + " - Week " + calendarWeek + " / 14"
    } else {
        return "Fall " + curYear + " - Week " + calendarWeek + " / 14"
    }
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

export { calcDayOfYear, calcWeekOfYear, getSemesterWeek, getSemesterString, convertTime24to12 }