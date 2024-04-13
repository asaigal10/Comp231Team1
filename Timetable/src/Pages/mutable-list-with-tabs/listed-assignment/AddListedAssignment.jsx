import { assignment as Assignment } from '../../../entities/assignment'
import { DUE } from '../../../commonJs/states'
import { generateUniqueId } from '../../../commonJs/UniqueId';
export default function AddListedAssignment({ setAddNewElement, elementsHook, elementsHookSetter, sharedHooks }) {
    // form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('add-listed-assignment-form')
        /* get elements of form */
        let c = JSON.parse(JSON.stringify(Assignment))
        c.id = generateUniqueId()
        c.title = form.elements.title.value
        c.start = form.elements.start.value
        c.end = form.elements.end.value
        c.weight = form.elements.weight.value
        c.state = DUE
        c.note = form.elements.note.value
        c.link = form.elements.link.value
        c.isGroupProject = form.elements.is_group_project.checked ? 1 : 0
        elementsHook.push(c)
        elementsHookSetter(elementsHook)
        setAddNewElement(0)
    };
    function submitFrom() {
        let submitButton = document.getElementById('add-listed-assignment-form-submit-button')
        submitButton.click()
    }
    return (
        sharedHooks.selectedCourse == undefined || sharedHooks.selectedCourse == 'all' ?
            <div>Please Select a Course form Courses List</div>
            :
            <div className="add-listed-assignment-root">
                <div className='add-listed-assignment'>
                    <form onSubmit={handleSubmit} id='add-listed-assignment-form'>
                        {/* top frame */}
                        <div className="header flex-row flex-space-between">
                            {/* state */}
                            <div className="padding-left a-label">
                                START DATE<input type="date" name="start" title='assignment `start-date`' required />
                            </div>
                            {/* course code and section */}
                            <div className="a-label padding-right">
                                END DATE<input type="date" name="end" title='assignment `end-date`' required />
                            </div>
                        </div>
                        {/* middle frame */}
                        <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                            <input type="text" name="title" title='assignment title' placeholder={"Title"} className="title-input" required />
                        </div>
                        <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                            <input type="text" name="note" title='assignment note' placeholder={"Note"} className="title-input" required />
                        </div>
                        <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                            <input type="text" name="link" title='link to assignment' placeholder={"Link"} className="title-input"/>
                        </div>
                        {/* bottom frame */}
                        <div className="flex-row flex-space-between">
                            {/* course links */}
                            <div className="padding-left">
                                <input type="number" name="weight" title='assignment weight' placeholder={"Weight"} required />
                            </div>
                            {/* course type */}
                            <div className="padding-right a-label">
                                Group Project <input type="checkbox" name='is_group_project' />
                            </div>
                        </div>
                        <button type="submit" id="add-listed-assignment-form-submit-button">submit</button>
                    </form>
                </div>
                <button className="a-link save-button" onClick={submitFrom}>Save</button>
                <button className="a-link cancel-button" onClick={() => setAddNewElement(0)}>Cancel</button>
            </div>
    )
}