/* author: Mohammad Aljelmawi */
import './listedCourse.css'
import { convertTime24to12 } from '../../commonJs/dateTime'
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
    function applyTimeFormat(time) {
        if (sharedHooks.settings['time-format'] == '12h') {
            return convertTime24to12(time);
        }
        return time;
    }
    function buildLink(courseLink) {
        return `${courseLink.prefix}${courseInfo.webAccessId}${courseLink.suffix}`
    }
    function asTitle(str){
        return str.slice(0,1).toUpperCase() + str.slice(1)
    }
    return (
        <>
            <div id="1134519" className='listed-course'>
                <div className="flex-row  flex-space-between">
                    <div className="flex-row a-label padding-left">{applyTimeFormat(courseInfo.startTime) + " - " + applyTimeFormat(courseInfo.endTime)}</div>
                    <div className="a-label padding-right">{courseInfo.code + " • " + courseInfo.section}</div>
                </div>
                <div className="flex-row flex-items-horizontally-centered a-label a-title">
                        {courseInfo.title}
                </div>
                <div className="flex-row flex-space-between">
                    <div className='flex-row'>
                        {
                            sharedHooks.courseLinks.map( courseLink => 
                                <a href={buildLink(courseLink)} className="a-link" target="_blank" key={courseLink.id}>
                                    {asTitle(courseLink.title)}
                                </a>
                            )
                        }
                    </div>
                    <div className="padding-right">
                        <div className="a-label">{courseInfo.type}</div>
                    </div>
                </div>
            </div>
        </>
    )
}