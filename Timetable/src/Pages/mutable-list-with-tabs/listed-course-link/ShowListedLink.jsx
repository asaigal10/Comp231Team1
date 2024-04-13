import './listed-link.css'

export default function ShowListedLink({ element, elementsHook, elementsHookSetter, selectedItemHook, selectedItemHookSetter, sharedHooks }) {
    function deleteElement() {
        let index = elementsHook.findIndex(x => x.id === element.id);
        elementsHook.splice(index, 1);
        elementsHookSetter(elementsHook)
        refresh()
    }
    function setAsSelected() {
        selectedItemHookSetter(element.id)
    }
    function refresh(){
        if (selectedItemHook != 0) {
            selectedItemHookSetter(0)
        // for UI update only
        } else {
            selectedItemHookSetter(-1)
        }
    }
    return (
        <div className={'show-listed-course' + (selectedItemHook == element.id ? " selected-show-listed-course" : "")} key={element.id}>
            {/* top frame */}
            <div className="header flex-row flex-space-between">
                {/* course state change button */}
                <div className="flex-row a-label padding-left right-element">
                    {/* <button className='a-link change-state-button' onClick={()=>selectedItemHookSetter(element.id)}>Select</button> */}
                    {element.link ? <a href={element.link} className='a-link change-state-button' target="_blank" rel="noopener noreferrer">Link</a> : ""}
                    <button className='a-link change-state-button a-delete-btn' onClick={deleteElement}>Delete</button>
                </div>
            </div>
            {/* middle frame */}
            <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title" onClick={setAsSelected}>
                {element.title}
            </div>
            {/* bottom frame */}
            <div className="flex-row flex-space-between">
                {/* time-window week */}
                <div className='flex-row'>
                <div className="a-label">{element.description}</div>
                </div>
                {/* time-window day */}
                <div className="padding-right">
                </div>
            </div>
        </div>
    )
}