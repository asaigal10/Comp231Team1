import { useEffect, useState } from 'react'
import { getSemesterString } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"
import MutableListWithTabs from './mutable-list-with-tabs/MutableListWithTabs'
import { ENROLLED, DROPPED } from '../commonJs/states'
/*  */
import { generateUniqueId } from '../commonJs/UniqueId'
/* mutable list items */
import ShowListedCourse from './mutable-list-with-tabs/listed-course/ShowListedCourse'
import AddListedCourse from './mutable-list-with-tabs/listed-course/AddListedCourse'
import ShowListedTime from './mutable-list-with-tabs/listed-time/ShowListedTime'
import AddListedTime from './mutable-list-with-tabs/listed-time/AddListedTime'
import DaySchedule from "./day-schedule/Day-Schedule"; // Import DaySchedule component
/* TO DO: code comments */
export default function Home({ sharedHooks }) {
    const [courseTimeList, setCourseTimeList] = useState(undefined)
    function getCourseSchedule(course) { 
        let value = []
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
    useEffect(() => {
        // when a course is selected
        if (sharedHooks.selectedCourse && sharedHooks.selectedCourse != 'all') {
            let course = sharedHooks.coursesList.filter(x => x.id == sharedHooks.selectedCourse)[0]
            setCourseTimeList(getCourseSchedule(course))
        }
        else if (sharedHooks.selectedCourse == 'all') {
            setCourseTimeList(undefined)
        }
    }, [sharedHooks.selectedCourse])
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>{getSemesterString()}</p>
        <div className="schedules-container">
            <WeekSchedule sharedHooks={sharedHooks} />
            <Schedule sharedHooks={sharedHooks} />
            {/* <DaySchedule sharedHooks={sharedHooks} /> */}
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
            {/* TO DO: MutableListWithTabs for course.[assignments,quizzes,customized-links,notes]; tabs may vary */}
            {/* TO DO: MutableListWithTabs for course-default links e.g. home,zoom,..etc */}
        </div>
    </div>

}