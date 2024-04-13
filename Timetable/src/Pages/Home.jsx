import { useEffect, useState } from 'react'
import { getSemesterString } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"
import MutableListWithTabs from './mutable-list-with-tabs/MutableListWithTabs'
import { ENROLLED, DROPPED, DUE, DONE } from '../commonJs/states'
/*  */
import { generateUniqueId } from '../commonJs/UniqueId'
/* mutable list items */
import ShowListedCourse from './mutable-list-with-tabs/listed-course/ShowListedCourse'
import AddListedCourse from './mutable-list-with-tabs/listed-course/AddListedCourse'
import ShowListedTime from './mutable-list-with-tabs/listed-time/ShowListedTime'
import AddListedTime from './mutable-list-with-tabs/listed-time/AddListedTime'
import ShowListedAssignment from './mutable-list-with-tabs/listed-assignment/ShowListedAssignment'
import AddListedAssignment from './mutable-list-with-tabs/listed-assignment/AddListedAssignment'
import ShowListedLink from './mutable-list-with-tabs/listed-link/ShowListedLink'
import AddListedLink from './mutable-list-with-tabs/listed-link/AddListedLink'
import DaySchedule from "./day-schedule/Day-Schedule"; // Import DaySchedule component
/* TO DO: code comments */
export default function Home({ sharedHooks }) {
    /* -selected-course- all days to weeks hourly time windows */
    const [courseTimeList, setCourseTimeList] = useState(undefined)
    /* -selected-course- all days to weeks assignments */
    const [courseAssignmentsList, setCourseAssignmentsList] = useState(undefined)
    const [selectedAssignment, setSelectedAssignment] = useState(undefined)
    /* -selected-course- all days to weeks quizzes */
    const [courseQuizzesList, setCourseQuizzesList] = useState(undefined)
    const [selectedQuiz, setSelectedQuiz] = useState(undefined)
    /* -selected-course- all days to weeks links */
    const [courseLinksList, setCourseLinksList] = useState(undefined)
    const [selectedLink, setSelectedLink] = useState(undefined)
    /** build mutable-list & listed-time consumable courseTimeList from the table(weeks>days>hour_windows) of a given course 
     * f(course) -> [{...},{...},...] 
    */
    function getCourseSchedule(course) {
        // v -> [{id,week,day,startTime,endTime},...]
        let value = []
        // course.table -> [weekIndex:[dayIndex:[startTime,endTime]]] 
        // Note: the structure is hierarchical arrays not objects
        // where `:` used for clarification
        course.table.forEach((week, week_number) => {
            week.forEach((day, day_number) => {
                day.forEach(timeSet => {
                    let t = {}
                    t.id = generateUniqueId()
                    t.day = day_number
                    t.week = week_number
                    t.startTime = timeSet[0]
                    t.endTime = timeSet[1]
                    value.push(t)
                })
            })
        })
        return value
    }
    /* whenever selected course changed */
    useEffect(() => {
        // when a course is selected
        if (sharedHooks.selectedCourse && sharedHooks.selectedCourse != 'all') {
            let course = sharedHooks.coursesList.filter(x => x.id == sharedHooks.selectedCourse)[0]
            setCourseTimeList(getCourseSchedule(course))
            setCourseAssignmentsList(course.assignments)
            setCourseQuizzesList(course.quizzes)
            setCourseLinksList(course.links)
        }
        /* when no course selected */
        else if (sharedHooks.selectedCourse == 'all') {
            setCourseTimeList(undefined)
            setCourseAssignmentsList(undefined)
            setCourseQuizzesList(undefined)
            setCourseLinksList(undefined)
        }
    }, [sharedHooks.selectedCourse])
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>{getSemesterString()}</p>
        <div className="schedules-container">
            {/* week & day selector block */}
            <WeekSchedule sharedHooks={sharedHooks} />
            {/* day of week time-table block */}
            <Schedule sharedHooks={sharedHooks} />
            {/* full-day window as an hourly time strips */}
            {/* <DaySchedule sharedHooks={sharedHooks} /> */}
            {/* user enrolled courses block */}
            <MutableListWithTabs
                title={"courses list"}
                elementsHook={sharedHooks.coursesList}
                elementsHookSetter={sharedHooks.setCoursesList}
                tabs={[{ key: 'enrolled', value: ENROLLED }, { key: 'dropped', value: DROPPED }]}
                elementComponent={ShowListedCourse}
                sharedHooks={sharedHooks}
                selectedItemHook={sharedHooks.selectedCourse}
                selectedItemHookSetter={sharedHooks.setSelectedCourse}
                newElementComponent={AddListedCourse}
            />
            {/* -course- daily time window block */}
            <MutableListWithTabs
                title={"courses schedule"}
                elementsHook={courseTimeList}
                elementsHookSetter={setCourseTimeList}
                tabs={[{ key: 'course daily time schedule', value: undefined }]}
                selectedItemHook={undefined}
                selectedItemHookSetter={undefined}
                elementComponent={ShowListedTime}
                newElementComponent={AddListedTime}
                sharedHooks={sharedHooks}
            />
            {/* -course- assignments block */}
            <MutableListWithTabs
                title={"courses assignments"}
                tabs={[{ key: 'due', value: DUE }, { key: 'done', value: DONE }]}
                elementsHook={courseAssignmentsList}
                elementsHookSetter={setCourseAssignmentsList}
                elementComponent={ShowListedAssignment}
                newElementComponent={AddListedAssignment}
                selectedItemHook={selectedAssignment}
                selectedItemHookSetter={setSelectedAssignment}
                sharedHooks={sharedHooks}
            />
            {/* -course- quizzes block */}
            <MutableListWithTabs
                title={"courses quizzes"}
                tabs={[{ key: 'due', value: DUE }, { key: 'done', value: DONE }]}
                elementsHook={courseQuizzesList}
                elementsHookSetter={setCourseQuizzesList}
                elementComponent={ShowListedAssignment}
                newElementComponent={AddListedAssignment}
                selectedItemHook={selectedQuiz}
                selectedItemHookSetter={setSelectedQuiz}
                sharedHooks={sharedHooks}
            />
            {/* -course- links block */}
            <MutableListWithTabs
                title={"courses links"}
                elementsHook={courseLinksList}
                elementsHookSetter={setCourseLinksList}
                tabs={[{ key: 'course links book', value: undefined }]}
                elementComponent={ShowListedLink}
                newElementComponent={AddListedLink}
                selectedItemHook={selectedLink}
                selectedItemHookSetter={setSelectedLink}
                sharedHooks={sharedHooks}
            />
            {/* TO DO: MutableListWithTabs for course.[customized-links,notes] */}
            {/* TO DO: MutableListWithTabs for course-default links e.g. home,zoom,..etc */}
        </div>
    </div>

}