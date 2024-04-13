import { calcWeekOfYear } from './dateTime'
import { course } from '../entities/course'
import { assignment } from '../entities/assignment'
import { note } from '../entities/note'
import { link } from '../entities/link'
import { courseLink } from '../entities/courseLink'
import { generateUniqueId } from '../commonJs/UniqueId'
import { DUE, ENROLLED, ACTIVE,ONLINE } from '../commonJs/states'

const getCoursesList = () => {
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
    let a = { ...assignment }
    a.id = generateUniqueId()
    a.title = 'Iteration 2 Planning'
    a.start = '2024-01-08'
    a.end = '2024-04-10'
    a.weight = '7.5'
    a.state = DUE
    a.isGroupProject = 1
    a.link = 'https://google.com'
    a.note = 'require a meeting'
    // create a quiz
    let q = { ...assignment }
    q.id = generateUniqueId()
    q.title = 'TAC Technical Report'
    q.start = '2024-04-08'
    q.end = '2024-04-10'
    q.weight = '18'
    q.state = DUE
    q.isGroupProject = undefined
    // create a note
    let n = { ...note }
    n.id = generateUniqueId()
    n.title = 'in class meeting next week'
    n.state = ACTIVE
    // create a link(URL)
    let u = {...link}
    u.title = 'discord'
    u.description = 'home page - for testing'
    u.link = 'https://discord.com/'
    u.state = ACTIVE
    // create a deep-copy of a course
    let c = JSON.parse(JSON.stringify(course))
    c.id = generateUniqueId()
    c.webAccessId = '1079746'
    c.title = 'software development project 1'
    c.code = 'comp231'
    c.section = '401'
    c.type = ONLINE
    c.state = ENROLLED

    c.assignments.push(a)
    c.quizzes.push(q)
    c.links.push(u)
    c.notes.push(n)

    // add course day schedule
    // week: 0-n:week-1 to week-n, week-0 is default week(all not undefined weeks)
    //  day: 0-6:sun-sat
    // startTime & endTime : 24h-time e.g. 13:30
    // .table            = []
    // .table[keek]      = []
    // .table[week][day] = []
    // .table[week][day] = [[startTime,endTime],...]
    c.table = []
    c.table[0] = []
    c.table[0][6] = []
    c.table[0][6].push(['13:30', '14:20'])

    temp_courses_list.push(c)
    return temp_courses_list;
}
const getStudyWeekNumber = () => {
    return calcWeekOfYear()
}

const getTodayNumberInStudyDayList = () => {
    return new Date().getDay();
}

const getStudyDaysList = () => {
    /* days starts sunday */
    return [0, 1, 2, 3, 4, 5, 6];
}

const getStudyWeeksCount = () => {
    return 14;
}

const getSettings = () => {
    let settings = {}
    settings['time-format'] = '12h';
    return settings
}
const getCourseLinks = () => {
    // courseLink.link = prefix + webAccessId + suffix
    let links = []
    let u;

    // Home link
    u = { ...courseLink }
    u.index = 3
    u.id = generateUniqueId()
    u.title = 'home'
    u.prefix = 'https://e.centennialcollege.ca/d2l/home'
    u.suffix = ''
    links.push(u)

    // Zoom link
    u = { ...courseLink }
    u.index = 2
    u.id = generateUniqueId()
    u.title = 'zoom'
    u.prefix = 'https://e.centennialcollege.ca/d2l/common/dialogs/quickLink/quickLink.d2l?ou='
    u.suffix = '&type=lti&rcode=CENCOL-4893909&srcou=6606&launchFramed=1&framedName=Zoom'
    links.push(u)

    // Assignments link
    u = { ...courseLink }
    u.id = generateUniqueId()
    u.title = 'assignments'
    u.prefix = 'https://e.centennialcollege.ca/d2l/lms/dropbox/user/folders_list.d2l?ou='
    u.suffix = '&isprv=0'
    links.push(u)

    // Quizzes link
    u = { ...courseLink }
    u.id = generateUniqueId()
    u.title = 'quizzes'
    u.prefix = 'https://e.centennialcollege.ca/d2l/lms/quizzing/user/quizzes_list.d2l?ou='
    links.push(u)

    // Content link
    u = { ...courseLink }
    u.id = generateUniqueId()
    u.title = 'content'
    u.prefix = 'https://e.centennialcollege.ca/d2l/le/content/'
    u.suffix = '/Home'
    links.push(u)

    // reorder links
    links.sort((a, b) => a.index - b.index);

    return links
}
const getSelectedCourse = ()=>{
    return undefined
}
export {
    getCoursesList,
    getStudyWeekNumber,
    getStudyDaysList,
    getStudyWeeksCount,
    getTodayNumberInStudyDayList,
    getSettings,
    getCourseLinks,
    getSelectedCourse
}