import { useState, useEffect } from "react";
import Modal from "./Elements/Modal";

import ShowListedNote from './mutable-list-with-tabs/listed-note/ShowListedLink'
import AddCourseLink from './mutable-list-with-tabs/listed-course-link/AddListedLink'
import MutableListWithTabs from './mutable-list-with-tabs/MutableListWithTabs'

export default function Settings({sharedHooks}) {
    /* refresh hook */
    const [refreshHook, setRefreshHook] = useState(undefined)

    const [showModal, setShowModal] = useState(false)
    const [confirmedChoice, setConfirmedChoice] = useState(null)

    useEffect(() => {
        setShowModal(false)
    }, [confirmedChoice])

    return <div>
        <p>Setting!</p>
        {/* Modal Demo */}
        {showModal ? <Modal setConfirmedChoice={setConfirmedChoice} /> : <></>}

        <p>{"Modal Choice: " + (confirmedChoice ? "True" : "False")}</p>
        <button className="p-5 m-5 bg-yellow-200 border-2 border-black rounded-md" onClick={() => { setShowModal(true) }}>Show Modal</button>
        {/* End Modal Demo */}
        {/* MutableListWithTabs for course-default links e.g. home,zoom,..etc */}
        <MutableListWithTabs
            title={"course links"}
            elementsHook={sharedHooks.courseLinks}
            elementsHookSetter={sharedHooks.setCourseLinks}
            tabs={[{ key: 'course links book', value: undefined }]}
            elementComponent={ShowListedNote}
            newElementComponent={AddCourseLink}
            selectedItemHook={refreshHook}
            selectedItemHookSetter={setRefreshHook}
            sharedHooks={sharedHooks}
        />
    </div>
}