import { generateUniqueId } from '../../../commonJs/UniqueId'
export default function AddListedTime({ setAddNewElement, elementsHook, elementsHookSetter, sharedHooks }) {
    // form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('add-listed-time-form')
        /* get elements of form */
        let t = {}
        t.id = generateUniqueId()
        t.week = form.elements.week.value
        t.day = form.elements.day.value
        t.startTime = form.elements.start_time.value
        t.endTime = form.elements.end_time.value
        // add time to course
        let course = sharedHooks.coursesList.filter(x => x.id == sharedHooks.selectedCourse)[0]
        if (course != undefined) {
            if (course.table[Number(t.week)] == undefined) {
                course.table[Number(t.week)] = []
            }
            if (course.table[Number(t.week)][Number(t.day)] == undefined) {
                course.table[Number(t.week)][Number(t.day)] = []
            }
            course.table[Number(t.week)][Number(t.day)].push([t.startTime, t.endTime])
            // show added time
            elementsHook.push(t)
            elementsHookSetter(elementsHook)
        }
        /* let block close/hide this component */
        setAddNewElement(0)
    };
    function submitFrom() {
        let submitButton = document.getElementById('add-listed-time-form-submit-button')
        submitButton.click()
    }
    function getWeekName(weekIndex) {
        let value;
        if (weekIndex == 0) {
            value = 'Default'
        } else {
            value = `Week ${weekIndex}`
        }
        return value
    }
    return (
        sharedHooks.selectedCourse == undefined || sharedHooks.selectedCourse == 'all' ?
            <div>Please Select a Course form Courses List</div>
            :
            <div className="add-listed-course-root">
                <div className='add-listed-course'>
                    <form onSubmit={handleSubmit} id='add-listed-time-form'>
                        {/* top frame */}
                        <div className="header flex-row flex-space-between">
                            {/* state */}
                            <div className="padding-left">
                            </div>
                            {/* course code and section */}
                            <div className="a-label padding-right">
                                <input type="time" name="start_time" title='course start-time' required /><span>•</span><input type="time" name="end_time" title='course end-time' required />
                            </div>
                        </div>
                        {/* bottom frame */}
                        <div className="flex-row flex-space-between">
                            {/* course links */}
                            <div className="padding-left">
                                <select name="week">
                                    {
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(weekIndex =>
                                            <option value={weekIndex} key={weekIndex}>{getWeekName(weekIndex)}</option>
                                        )
                                    }
                                </select>
                            </div>
                            {/* course type */}
                            <div className="padding-right">
                                <select name="day">
                                    <option value="0">Sun</option>
                                    <option value="1">Mon</option>
                                    <option value="2">Wed</option>
                                    <option value="3">Tue</option>
                                    <option value="4">Thu</option>
                                    <option value="5">Fri</option>
                                    <option value="6">Sat</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" id="add-listed-time-form-submit-button">submit</button>
                    </form>
                </div>
                <button className="a-link save-button" onClick={submitFrom}>Save</button>
                <button className="a-link cancel-button" onClick={() => setAddNewElement(0)}>Cancel</button>
            </div>
    )
}