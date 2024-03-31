/* author: Mohammad Aljelmawi */

import ListedCourse from './ListedCourse'
import './schedule.css'
import {generateUniqueId} from '../../commonJs/UniqueId'

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
    function getSelectedSchedule(){
        if (sharedHooks.daySchedule[sharedHooks.selectedWeek]){
            if (sharedHooks.daySchedule[sharedHooks.selectedWeek][sharedHooks.selectedDay]){
                return sharedHooks.daySchedule[sharedHooks.selectedWeek][sharedHooks.selectedDay]
            }
        }
        if (sharedHooks.daySchedule[0]){
            if (sharedHooks.daySchedule[0][sharedHooks.selectedDay]){
                return sharedHooks.daySchedule[0][sharedHooks.selectedDay]
            }
        }
        return [];
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
                            getSelectedSchedule().map((courseInfo)=>(
                                <div key={generateUniqueId()}>
                                    <ListedCourse courseInfo = {courseInfo} sharedHooks={sharedHooks} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )

}