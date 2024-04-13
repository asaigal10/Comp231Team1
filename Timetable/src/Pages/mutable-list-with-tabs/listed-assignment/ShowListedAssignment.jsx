import { DUE, DONE } from '../../../commonJs/states'

import './listed-assignment.css'

export default function ShowListedAssignment({ element, elementsHook, elementsHookSetter, selectedItemHook, selectedItemHookSetter, sharedHooks }) {
    function asTitle(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1)
    }
    function setState(state) {
        element.state = state
        refresh()
    }
    const deleteElement = () => {
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
        <div className={'show-listed-assignment' + (selectedItemHook == element.id ? " selected-show-listed-assignment" : "")} key={element.id}>
            {/* top frame */}
            <div className="header flex-row flex-space-between">
                {/* course state change button */}
                <div className="flex-row a-label padding-left right-element">
                    {element.link ? <a href={element.link} className='a-link' target="_blank" rel="noopener noreferrer">Link</a> : ""}
                    {element.state == DUE ?
                        <div className='a-link change-state-button' onClick={() => setState(DONE)}>Done</div>
                        :
                        <div className='a-link change-state-button' onClick={() => setState(DUE)}>Not Done</div>
                    }
                    {
                        element.state == DONE ?
                            <div className='a-link a-delete-btn' onClick={deleteElement}>Delete</div>
                            : <></>
                    }
                </div>
                {/* course code and section */}
                <div className="a-label padding-right">{element.start + " • " + element.end}</div>
            </div>
            {/* middle frame */}
            <div className="flex-row flex-items-horizontally-centered a-label a-title a-link title" onClick={setAsSelected}>
                {element.title}
            </div>
            {/* bottom frame */}
            <div className="flex-row flex-space-between">
                {/* course links */}
                <div className='padding-left flex-row'>
                    <div className="a-label">{element.note != "" ? "Note: " + element.note : ""}</div>
                </div>
                {/* course type */}
                <div className="padding-right">
                    <div className="a-label">{element.isGroupProject ? "Group Project-" : ""}{element.weight}%</div>
                </div>
            </div>
        </div>
    )
}