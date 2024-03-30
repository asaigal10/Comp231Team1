/* author: Mohammad Aljelmawi */

import ListedCourse from './ListedCourse'
import './schedule.css'

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
export default function WeekSchedule({ daySchedule }) {
    console.log(daySchedule);
    return (
        <>
            <div className='schedule'>
                <table>
                    <thead>
                        <tr>
                            <th className='a-header'>Day Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            daySchedule.map((courseInfo, index)=>(
                                <tr>
                                    <ListedCourse courseInfo = {courseInfo} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}