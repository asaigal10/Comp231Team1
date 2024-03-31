import {calcWeekOfYear, calcDayOfYear} from './dateTime'
const getDaySchedule = () =>{
    /* data[weekNumber][dayNumber] = [courseObject1,courseObject2,...]*/
    /* data[weekNumber][dayNumber] = [{title,...},{...},...]*/
    /* week days sun:0,...,sat:6 */
    /* use 24h time format */
    let data = []
    /* default week schedule */
    /**
     * data[0] -> default week-day schedule
     * data[0][0] -> default courses for all sundays
     * note: 
     *  -if week-day have a value default will be overridden
     *  */
    let temp_courses_set = [
        {
            title:'C1',
            startTime:'12:00',
            endTime:'12:01',
            webAccessId:'0000000',
            courseType:'Unknown',
            courseCode:'AAAA000',
            courseSection:'400'
        },
    ];
    data[0] = []
    for (let index = 0; index <= 6; index+=2) {
        data[0][index] = [{...temp_courses_set[0]},]
    }
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
    return [0,1,2,3,4,5,6];
}

const getStudyWeeksCount = () =>{
    return 14;
}

export {getDaySchedule, getStudyWeekNumber,getStudyDaysList, getStudyWeeksCount, getTodayNumberInStudyDayList}