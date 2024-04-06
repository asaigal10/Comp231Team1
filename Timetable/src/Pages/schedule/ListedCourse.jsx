/* author: Mohammad Aljelmawi */
import './listedCourse.css'
import { linkBuilder } from '../../commonJs/linksBuilder'
import {convertTime24to12} from '../../commonJs/dateTime'
/** schedule day courses widget
 * @param {Object} courseInfo course-object1 -> 
 * {
 *      title:String,
 *      startTime:String,
 *      endTime:String,
 *      webAccessId:Sting,
 *      type:String,
 *      code:String,
 *      section:String
 * }
 * @returns {HTMLElement} 
 */
export default function ListedCourse({ courseInfo, sharedHooks }) {
    function applyTimeFormat(time){
        if (sharedHooks.settings['time-format'] == '12h'){
            return convertTime24to12(time);
        }
        return time;
    }
    return (
        <>
            <div id="1134519" className='listed-course'>
                <div className="flex-row  flex-space-between">
                    <div className="flex-row a-label padding-left">{applyTimeFormat(courseInfo.startTime) + " - " + applyTimeFormat(courseInfo.endTime)}</div>
                    <div className="a-label padding-right">{courseInfo.code + " • " + courseInfo.section}</div>
                </div>
                <div className="flex-row flex-items-horizontally-centered a-link">
                    <a href={linkBuilder.home(courseInfo.webAccessId)} target="_blank" className="">
                        {courseInfo.title}
                    </a>
                </div>
                <div className="flex-row flex-space-between">
                    <div className='flex-row'>
                        <a href={linkBuilder.zoom(courseInfo.webAccessId)} className="a-link" target="_blank">Zoom</a>
                        <a href={linkBuilder.assignment(courseInfo.webAccessId)} className="a-link" target="_blank">Assignment</a>
                        <a href={linkBuilder.quizzes(courseInfo.webAccessId)} className="a-link" target="_blank">Quizzes</a>
                        <a href={linkBuilder.tableOfContent(courseInfo.webAccessId)} className="a-link" target="_blank">Content</a>
                    </div>
                    <div className="padding-right">
                        <div className="a-label">{courseInfo.type}</div>
                    </div>
                </div>
            </div>
        </>
    )
}