import {convertTime24to12} from '../../../commonJs/dateTime'
import './listed-time.css'

export default function ShowListedTime({ element, elementsHook, elementsHookSetter, selectedItemHook, selectedItemHookSetter, sharedHooks }) {
    function asTitle(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1)
    }
    function applyTimeFormat(strTime){
        let value = strTime
        if (sharedHooks.settings['time-format'] == '12h'){
            value = convertTime24to12(strTime)
        }
        return value
    }
    function deleteElement() {
        // delete from course
        let course = sharedHooks.coursesList.filter(x => x.id == sharedHooks.selectedCourse)[0]
        if (course != undefined) {
            course.table[element.week][element.day] = course.table[element.week][element.day].filter(([startTime,endTime]) => startTime != element.startTime && endTime != element.endTime)
        }
        // delete from display
        const updatedList = elementsHook.filter(x => x.id !== element.id);
        elementsHookSetter(updatedList)
    }
    function getDayName(dayIndex) {
        return ['sun','mon','tue','wed','thu','fri','sat'][dayIndex]
    }
    function getWeekName(weekIndex) {
        let value;
        if (weekIndex == 0){
            value = 'default'
        } else {
            value = `week ${weekIndex}`
        }
        return value
    }
    return (
        <div className={'show-listed-course' + (selectedItemHook == element.id ? " selected-show-listed-course" : "")} key={element.id}>
            {/* top frame */}
            <div className="header flex-row flex-space-between">
                {/* course state change button */}
                <div className="flex-row a-label padding-left right-element">
                    {/* <button className='a-link change-state-button' onClick={()=>selectedItemHookSetter(element.id)}>Select</button> */}
                    <button className='a-link change-state-button a-delete-btn' onClick={deleteElement}>Delete</button>
                </div>
                {/* course code and section */}
                <div className="a-label padding-right">{applyTimeFormat(element.startTime) + " • " + applyTimeFormat(element.endTime)}</div>
            </div>
            
            {/* bottom frame */}
            <div className="flex-row flex-space-between">
                {/* time-window week */}
                <div className='flex-row'>
                <div className="a-label">{asTitle(getWeekName(element.week))}</div>
                </div>
                {/* time-window day */}
                <div className="padding-right">
                    <div className="a-label">{asTitle(getDayName(element.day))}</div>
                </div>
            </div>
        </div>
    )
}