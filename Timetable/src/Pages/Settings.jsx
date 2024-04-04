import { useState, useEffect } from "react";
import Modal from "./Elements/Modal";

export default function Settings() {

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
        <button className="p-5 m-5 bg-yellow-200 border-2 border-black rounded-md" onClick={() => {setShowModal(true)}}>Show Modal</button>
        {/* End Modal Demo */}
    </div>
}