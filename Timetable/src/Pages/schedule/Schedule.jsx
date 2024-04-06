/* author: Mohammad Aljelmawi */

import ListedCourse from './ListedCourse'
import './schedule.css'
import { generateUniqueId } from '../../commonJs/UniqueId'
import { course } from '../../entities/course'

/** schedule block for one day courses
 * @param {Array} dayCourses [course-object1,course-object1,...] -> 
 *  course-object: {
 *      title:String,
 *      startTime:String,
 *      endTime:String,
 *      webAccessId:Sting,
 *      courseType:String,
 *      courseCode:String,
 *      courseSection:String
 * }
 * @returns {HTMLElement} 
 */
export default function WeekSchedule({ sharedHooks }) {
    // heeds to be converted to a hook for updates
    function buildDaySchedule() {
        let daySchedule = []
        let day = sharedHooks.selectedDay
        let week = sharedHooks.selectedWeek
        let coursesList = sharedHooks.coursesList
        coursesList.forEach(course => {
            if  (course['table'][week] != undefined && course['table'][week][day] != undefined) {
                course['table'][week][day].forEach(([startTime, endTime]) => {
                    let listedCourse = {...course}
                    listedCourse.startTime = startTime
                    listedCourse.endTime = endTime
                    daySchedule.push(listedCourse)
                });
            } else if  (course['table'][0] != undefined && course['table'][0][day] != undefined) {
                course['table'][0][day].forEach(([startTime, endTime]) => {
                    let listedCourse = {...course}
                    listedCourse.startTime = startTime
                    listedCourse.endTime = endTime
                    daySchedule.push(listedCourse)
                });
            }
        });
        return daySchedule
    }
    return (
        <>
            <div className='schedule'>
                <div className='display-table schedule-table'>
                    <div className='table-head border-bottom-dashed'>
                        <div>
                            <div className='a-header'>Day Schedule</div>
                        </div>
                    </div>
                    <div>
                        {
                            buildDaySchedule().map((listedCourse) => (
                                <div key={generateUniqueId()}>
                                    <ListedCourse courseInfo={listedCourse} sharedHooks={sharedHooks} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )

}