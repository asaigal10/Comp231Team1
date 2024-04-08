import { ENROLLED, DROPPED,ONLINE, IN_PERSON, OTHER } from '../../../commonJs/states'

import './listed-course.css'

export default function ShowListedCourse({ element, elementsHook , elementsHookSetter, selectedItemHook, selectedItemHookSetter, sharedHooks }) {
    function buildLink(courseLink) {
        return `${courseLink.prefix}${element.webAccessId}${courseLink.suffix}`
    }
    function asTitle(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1)
    }
    function setState(state) {
        element.state = state;
        if (selectedItemHook != 0){
            selectedItemHookSetter(0)
        } else {
            selectedItemHookSetter(-1)
        }
    }
    function deleteElement(){
        const updatedList = elementsHook.filter(x => x.id !== element.id);
        elementsHookSetter(updatedList)
    }
    function setAsSelected(){
        selectedItemHookSetter(element.id)
    }
    function getPrintableCourseType(type){
        let course_type = ""
        switch (type) {
            case ONLINE:
                course_type = "online"
                break
            case IN_PERSON:
                course_type = "in-person"
                break
            case OTHER:
                course_type = "other"
                break;
            default:
                break;
        }
        return course_type
    }
    return (
        <div className={'show-listed-course' + (selectedItemHook == element.id? " selected-show-listed-course":"")} key={element.id}>
            {/* top frame */}
            <div className="header flex-row flex-space-between">
                {/* course state change button */}
                <div className="flex-row a-label padding-left right-element">
                    {element.state == ENROLLED ?
                        <div className='a-link change-state-button' onClick={() => setState(DROPPED)}>Drop</div>
                        :
                        <div className='a-link change-state-button' onClick={() => setState(ENROLLED)}>Re-enroll</div>
                    }
                    {
                        element.state == DROPPED ?
                        <div className='a-link change-state-button a-delete-btn' onClick={deleteElement}>Delete</div>
                            : <></>
                    }
                </div>
                {/* course code and section */}
                <div className="a-label padding-right">{element.code + " • " + element.section}</div>
            </div>
            {/* middle frame */}
            <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title" onClick={setAsSelected}>
                {element.title}
            </div>
            {/* bottom frame */}
            <div className="flex-row flex-space-between">
                {/* course links */}
                <div className='flex-row'>
                    {
                        sharedHooks.courseLinks.map(courseLink =>
                            <a href={buildLink(courseLink)} className="a-link" target="_blank" key={courseLink.id}>
                                {asTitle(courseLink.title)}
                            </a>
                        )
                    }
                </div>
                {/* course type */}
                <div className="padding-right">
                    <div className="a-label">{getPrintableCourseType(element.type)}</div>
                </div>
            </div>
        </div>
    )
}