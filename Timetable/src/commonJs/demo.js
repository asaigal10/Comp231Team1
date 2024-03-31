import {calcWeekOfYear, calcDayOfYear} from './dateTime'
const getDaySchedule = () =>{
    /* data[weekNumber][dayIndexInDaysList] */
    let data = []
    /* default week */
    data[0]=[
        {
            title:'Default Courses List Course',
            startTime:'13:00',
            endTime:'14:20',
            webAccessId:'0000000',
            courseType:'Unknown',
            courseCode:'COMP000',
            courseSection:'000'
        },
    ]
    /* weeks starts here */
    data[calcWeekOfYear()]=[]
    data[calcWeekOfYear()][new Date().getDay()]= [
        {
            title:'Enterprise Application Development',
            startTime:'13:00',
            endTime:'14:20',
            webAccessId:'1134519',
            courseType:'Online',
            courseCode:'COMP303',
            courseSection:'402'
        },
        {
            title:'Course 2',
            startTime:'16:00',
            endTime:'19:20',
            webAccessId:'1120202',
            courseType:'In-Person',
            courseCode:'COMP302',
            courseSection:'401'
        },
    ];
    return data;
}
const getStudyWeekNumber = () =>{
    return calcWeekOfYear()
}

const getTodayNumberInStudyDayList = () => {
    return new Date().getDay();
}

const getStudyDaysList = () => {
    /* days starts sunday */
    return [1,2,3,4,5,6];
}

const getStudyWeeksCount = () =>{
    return 14;
}

export {getDaySchedule, getStudyWeekNumber,getStudyDaysList, getStudyWeeksCount, getTodayNumberInStudyDayList}