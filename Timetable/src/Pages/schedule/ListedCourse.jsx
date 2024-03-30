/* author: Mohammad Aljelmawi */
import './listedCourse.css'
import {linkBuilder} from '../../commonJs/linksBuilder'

/** schedule day courses widget
 * @param {Object} courseInfo course-object1 -> 
 * {
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
export default function ListedCourse({ courseInfo }) {
    return (
        <>
            <div id="1134519" className='listed-course'>
                <div class="flex-row  flex-space-between">
                    <div class="flex-row a-label padding-left">02:30 PM - 06:20 PM</div>
                    <div class="a-label padding-right">COMP303 • 402</div>
                </div>
                <div class="flex-row flex-items-horizontally-centered a-link">
                    <a href={linkBuilder.home(courseInfo.webAccessId)} target="_blank" class="">
                        Enterprise Application Development
                    </a>
                </div>
                <div class="flex-row flex-space-between">
                    <div className='flex-row'>
                        <a href={linkBuilder.zoom(courseInfo.webAccessId)} class="a-link" target="_blank">Zoom</a>
                        <a href={linkBuilder.assignment(courseInfo.webAccessId)} class="a-link" target="_blank">Assignment</a>
                        <a href={linkBuilder.quizzes(courseInfo.webAccessId)} class="a-link" target="_blank">Quizzes</a>
                        <a href={linkBuilder.tableOfContent(courseInfo.webAccessId)} class="a-link" target="_blank">Content</a>
                    </div>
                    <div class="padding-right">
                        <div class="a-label">REG</div>
                    </div>
                </div>
            </div>
        </>
    )
}