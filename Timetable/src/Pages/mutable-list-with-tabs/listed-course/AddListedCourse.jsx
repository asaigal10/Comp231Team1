import {course as Course} from '../../../entities/course'
import {ONLINE, IN_PERSON, OTHER, ENROLLED} from '../../../commonJs/states'
export default function AddListedCourse({ setAddNewElement, elementsHook, elementsHookSetter }) {
    // form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('add-listed-course-form')
        /* get elements of form */
        
        console.log(form.elements.code)
        let c = JSON.parse(JSON.stringify(Course))
        c.title = form.elements.title.value
        c.section = form.elements.section.value
        c.code = form.elements.code.value
        c.webAccessId = form.elements.web_access_id.value
        let course_type = form.elements.type.value
        switch (course_type) {
            case "online":
                c.type = ONLINE
                break;
            case "in-person":
                c.type = IN_PERSON
                break;
            case "other":
                c.type = OTHER
                break;
            default:
                break;
        }
        c.state = ENROLLED
        elementsHook.push(c)
        elementsHookSetter(elementsHook)
        setAddNewElement(0)
    };
    function submitFrom(){
        let submitButton = document.getElementById('add-listed-course-form-submit-button')
        submitButton.click()
    }
    return (
        <div className="add-listed-course-root">
            <div className='add-listed-course'>
                <form onSubmit={handleSubmit} id='add-listed-course-form'>
                    {/* top frame */}
                    <div className="header flex-row flex-space-between">
                        {/* state */}
                        <div className="padding-left">
                        </div>
                        {/* course code and section */}
                        <div className="a-label padding-right">
                            <input type="text" name="code" placeholder={'Code'} title='course code e.g. `COMP213`' required/><span>•</span><input type="text" name="section" placeholder={'Section'} title='course section e.g. `401`' required/>
                        </div>
                    </div>
                    {/* middle frame */}
                    <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title">
                        <input type="text" name="title" title='course title e.g. `Software Development Project 1`' placeholder={"Title"} className="title-input" required/>
                    </div>
                    {/* bottom frame */}
                    <div className="flex-row flex-space-between">
                        {/* course links */}
                        <div className="padding-left">
                            <input type="text" name="web_access_id" title='course web-access-id e.g. `1079746`' placeholder={"Web Access ID"} required/>
                        </div>
                        {/* course type */}
                        <div className="padding-right">
                            <select name="type">
                                <option value="online">On-Line</option>
                                <option value="in-person">In-Person</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" id="add-listed-course-form-submit-button">submit</button>
                </form>
            </div>
            <button className="a-link save-button" onClick={submitFrom}>Save</button>
            <button className="a-link cancel-button" onClick={() => setAddNewElement(0)}>Cancel</button>
        </div>
    )
}