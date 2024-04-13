import { generateUniqueId } from '../../../commonJs/UniqueId'
import { courseLink as Link } from '../../../entities/courseLink'
export default function AddListedLink({ setAddNewElement, elementsHook, elementsHookSetter, sharedHooks }) {
    // form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('add-listed-link-form')
        /* get elements of form */
        let t = JSON.parse(JSON.stringify(Link))
        t.id = generateUniqueId()
        t.title = form.elements.title.value
        t.prefix = form.elements.prefix.value
        t.suffix = form.elements.suffix.value
        t.index = form.elements.index.value
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
        <div className="add-listed-course-root">
            <div className='add-listed-course'>
                <form onSubmit={handleSubmit} id='add-listed-link-form'>
                    {/* middle frame */}
                    <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                        <input type="text" name="title" placeholder={"Title"} className="title-input" required />
                    </div>
                    <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                        <input type="text" name="prefix" placeholder={"Prefix"} className="title-input" required />
                    </div>
                    <div className="flex-row flex-items-horizontally-centered a-label title">
                        ID
                    </div>
                    <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                        <input type="text" name="suffix" placeholder={"Suffix"} className="title-input" required />
                    </div>
                    <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                        <input type="number" name="index" placeholder={"Index"} className="title-input" required />
                    </div>
                    <button type="submit" id="add-listed-link-form-submit-button">submit</button>
                </form>
            </div>
            <button className="a-link save-button" onClick={submitFrom}>Save</button>
            <button className="a-link cancel-button" onClick={() => setAddNewElement(0)}>Cancel</button>
        </div>
    )
}