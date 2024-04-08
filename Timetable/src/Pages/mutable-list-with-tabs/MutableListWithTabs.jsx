/* author:mohammad al-jelmawi 2024-04-08*/
import { useState } from 'react'
import { ACTIVE, ARCHIVE } from '../../commonJs/states'
import './mutable-list-with-tabs.css'
/** Note:
 * restricted html elements tree order; 
 * css direct child selectors in use; 
 * changing html elements depth require css file to be updated 
 * */
/* TO-DO: vs-code component signature instructions to be updated */
/* vs-code function hint; sensitive html like document */
/** a scrollable list with tabs e.i. notebook widget
 * 
 * `title:String` the title of the notebook
 * 
 *  `tabList:Array` the tabs of the notebook
 * 
 *  `elementList:Array of Objects` the elements to be shown i.e. [{'tab-key-field':'tab-name',..},{...}]
 * 
 *  `setElementList:React.Hook-Setter` to update elementList array
 * 
 *  `elementTabKey:String` the field-name to use to filter elements for a tab 
 * 
 *  `elementComponent:React.JSX.Element` component to list the elements
 * 
 *  `newElementComponent:React.JSX.Element` component to add an element to elementList
 * 
 * **elementComponent** must accept the following arguments:
 * 
 *      - `element` Object -> the object to be displayed
 * 
 *      - `DeleteQueueListHookSetter` Hook-Setter -> to add the element-id to delete-queue-list to be deleted from `elementList`
 * 
 * **newElementComponent** must accept the following arguments:
 * 
 *      - `newElementState` Hook-Setter -> String; init as undefined|'wait'; waits for: 'done' | 'canceled'
 * 
 *      - `newElementValue` Hook-Setter -> Object; waits for: elementList-item | null
 * */
export default function MutableListWithTabs({
    title,
    tabs = [{ key: 'active', value: ACTIVE }, { key: 'archive', value: ARCHIVE }],
    elementsHook,
    elementsHookSetter=(items)=>console.log('updating elements: '+items),
    elementComponent = ({ element, setDeleteItemsQueue, selectedItemHookFieldName, selectedItemHookSetter, sharedHooks }) => <div key={element[selectedItemHookFieldName]}>{element[selectedItemHookFieldName]}</div>,
    newElementComponent = ({ addNewElement, elementsHook, elementsHookSetter }) => <div>New Element From Template</div>,
    selectedItemHook,
    selectedItemHookSetter = (id) => { console.log(id + " selected!") },
    // fields of element of elements-hook e.i. elements-hook-value={element={id-field:'',tab-field:'',...},...}
    tabFieldName = 'state',
    selectedTabIndex = 0,
    sharedHooks,
}) {
    const [selectedTab, setSelectedTab] = useState(selectedTabIndex)
    const [addNewElement, setAddNewElement] = useState(false)
    return (
        <div className='mutable-list-with-tabs'>
            <div className='body'>
                {/* title */}
                <div className='title'>
                    <div>
                        <div className='a-header'>{title}</div>
                    </div>
                </div>
                {/* tabs */}
                <div className='tabs'>
                    {
                        tabs.map((tab, index) =>
                            <button key={index} className={'tab a-link' + (index == selectedTab ? " current-tab" : "")} onClick={() => setSelectedTab(index)}>{tab.key}</button>
                        )
                    }
                </div>
                {/* items-display */}
                <div className='items-display'>
                    {/* add new element */}
                    {addNewElement ?
                        <div className='new-element-display'>
                            {newElementComponent({ setAddNewElement, elementsHook, elementsHookSetter, sharedHooks })}
                        </div>
                        :
                        <></>
                    }
                    {/* elements list */}
                    { elementsHook != undefined?
                        elementsHook
                            .filter(element => element[tabFieldName] === tabs[selectedTab].value)
                            .map(element => elementComponent({ element, elementsHook, elementsHookSetter, selectedItemHook, selectedItemHookSetter, sharedHooks }))
                        :<></>
                    }
                </div>

            </div>
            {/* add/cancel button */}
            <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className='add-button' onClick={() => setAddNewElement(addNewElement == false)}>
                <ellipse cx="18" cy="18" rx="15" ry="15"></ellipse>
                {!addNewElement ?
                    <>
                        {/* + */}
                        <path d="M 8 18 L 28 18"></path>
                        <path d="M 18 8 L 18 28"></path>
                    </>
                    :
                    <>
                        {/* x */}
                        <path d="M 11 11 L 25 25"></path>
                        <path d="M 25 11 L 11 25"></path>
                    </>
                }

            </svg>
            <button className='all-as-selected-item a-link' onClick={() => selectedItemHookSetter('all')}>All</button>
        </div>
    )
}
