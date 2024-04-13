import { generateUniqueId } from '../../../commonJs/UniqueId'
import { link as Link } from '../../../entities/link'
export default function AddListedLink({ setAddNewElement, elementsHook, elementsHookSetter, sharedHooks }) {
    // form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('add-listed-link-form')
        /* get elements of form */
        let t = JSON.parse(JSON.stringify(Link))
        t.id = generateUniqueId()
        t.title = form.elements.title.value
        t.description = form.elements.description.value
        t.state = undefined
        elementsHook.push(t)
        elementsHookSetter(elementsHook)
        /* let block close/hide this component */
        setAddNewElement(0)
    };
    function submitFrom() {
        let submitButton = document.getElementById('add-listed-link-form-submit-button')
        submitButton.click()
    }
    return (
        sharedHooks.selectedCourse == undefined || sharedHooks.selectedCourse == 'all' ?
            <div>Please Select a Course form Courses List</div>
            :
            <div className="add-listed-course-root">
                <div className='add-listed-course'>
                    <form onSubmit={handleSubmit} id='add-listed-link-form'>
                        {/* middle frame */}
                        <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                            <input type="text" name="title" placeholder={"Title"} className="title-input" required />
                        </div>
                        <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                            <input type="text" name="description" placeholder={"Description"} className="title-input" required />
                        </div>
                        <button type="submit" id="add-listed-link-form-submit-button">submit</button>
                    </form>
                </div>
                <button className="a-link save-button" onClick={submitFrom}>Save</button>
                <button className="a-link cancel-button" onClick={() => setAddNewElement(0)}>Cancel</button>
            </div>
    )
}