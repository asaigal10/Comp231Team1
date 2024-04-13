import { calcDayOfYear, calcWeekOfYear, getSemesterWeek, getSemesterString, convertTime24to12 } from '../commonJs/dateTime.js'

function test_calcDayOfYear() {

    console.log("Testing calcDayOfYear:")
    console.log("January 1, 2024 == 1: " + (calcDayOfYear(new Date("January 1, 2024")) == 1))
    console.log("February 1, 2024 == 32: " + (calcDayOfYear(new Date("February 1, 2024")) == 32))
    console.log("December 31, 2024 == 366: " + (calcDayOfYear(new Date("December 31, 2024")) == 366))
    console.log("December 31, 2023 == 365: " + (calcDayOfYear(new Date("December 31, 2023")) == 365))
}

function test_calcWeekOfYear() {
    console.log("Testing calcWeekOfYear:")
    console.log("January 1, 2024 == 0: " + (calcWeekOfYear(new Date("January 1, 2024")) == 0))
    console.log("December 31, 2024 == 52: " + (calcWeekOfYear(new Date("December 31, 2024")) == 52))
}

function test_getSemesterWeek() {
    console.log("Testing getSemesterWeek:")
    console.log("January 9, 2024 == 1: " + (getSemesterWeek(new Date("January 9, 2024")) == 0))
    console.log("April 13, 2024 == 13: " + (getSemesterWeek(new Date("April 13, 2024")) == 13))
    console.log("April 16, 2024 == 14: " + (getSemesterWeek(new Date("April 16, 2024")) == 14))
}

function test_getSemesterString() {
    console.log("Testing getSemesterString:")
    console.log("January 16, 2024 == Winter 2024 - Week 1 / 14: " + (getSemesterString(new Date("January 16, 2024")) == "Winter 2024 - Week 1 / 14"))
    console.log("April 13, 2024 == Winter 2024 - Week 13 / 14: " + (getSemesterString(new Date("April 13, 2024")) == "Winter 2024 - Week 13 / 14"))
    console.log("April 16, 2024 == Winter 2024 - Week 14 / 14: " + (getSemesterString(new Date("April 16, 2024")) == "Winter 2024 - Week 14 / 14"))
}

function test_convertTime24to12() {
    console.log("Testing convertTime24to12:")
    console.log("19:34 == 7:34 PM: " + (convertTime24to12("19:34") == "7:34 PM"))
    console.log("09:34 == 9:34 AM: " + (convertTime24to12("09:34") == "9:34 AM"))
}

test_calcDayOfYear()
test_calcWeekOfYear()
test_getSemesterWeek()
test_getSemesterString()
test_convertTime24to12()
