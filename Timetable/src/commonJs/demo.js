import {calcWeekOfYear} from './dateTime'
import {course} from '../entities/course'
import {assignment} from '../entities/assignment'
import {note} from '../entities/note'
import {link} from '../entities/link'
import {generateUniqueId} from '../commonJs/UniqueId'
import {DUE, ENROLLED, ACTIVE} from '../commonJs/states'

const getDaySchedule = () =>{
    /* data[weekNumber][dayNumber] = [courseObject1,courseObject2,...]*/
    /* data[weekNumber][dayNumber] = [{title,...},{...},...]*/
    /* week days sun:0,...,sat:6 */
    /* use 24h time format */
    /* default week schedule */
    /**
     * data[0] -> default week-day schedule
     * data[0][0] -> default courses for all sundays
     * note: 
     *  -if week-day have a value default will be overridden
     *  */
    // user courses
    let temp_courses_list = []
    // create an assignment
    let a = {...assignment}
    a.id = generateUniqueId()
    a.title = 'Iteration 2 Planning'
    a.start = '2024-01-08'
    a.end = '2024-04-10'
    a.weight = '7.5'
    a.state = DUE
    a.isGroupProject = 1
    a.note = 'require a meeting'
    // create a quiz
    q.id = generateUniqueId()
    q.title = 'TAC Technical Report'
    q.start = '2024-04-08'
    q.end = '2024-04-10'
    q.weight = '18'
    q.state = DUE
    q.isGroupProject = undefined
    // create a note
    let n = {...note}
    n.id = generateUniqueId()
    n.title = 'in class meeting next week'
    n.state = ACTIVE
    // create a link(URL)
    let u = link
    u.title = 'discord'
    u.description = 'home page - for testing'
    u.link = 'https://discord.com/'
    u.state = ACTIVE
    // create a course
    let c = {...course}
    c.id = generateUniqueId()
    c.webAccessId = '1079746'
    c.title = 'Software Development Project 1'
    c.code = 'comp231'
    c.section = '401'
    c.type = 'online'
    c.state = ENROLLED

    c.assignments.push(a)
    c.quizzes.push(q)
    c.links.push(u)
    c.notes.push(n)

    temp_courses_list.push(c)
    return temp_courses_list;
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