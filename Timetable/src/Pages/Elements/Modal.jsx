/* Using the modal: 
    In the parent element add two useStates to track returned result and for visibility:

            const [showModal, setShowModal] = useState(false)
            const [confirmedChoice, setConfirmedChoice] = useState(null)

    Also add useEffect hook to control conditional rendering:

        useEffect(() => {
            setShowModal(false)
         }, [confirmedChoice])

    In the parent elements return:

        Conditionally render the modal:
            {(showModal ? <Modal setConfirmedChoice={setConfirmedChoice} /> : <></>)}

        and track the results:
            <p>{"Modal Choice: " + (confirmedChoice ? "True" : "False")}</p>
*/
export default function Modal({setConfirmedChoice}) {

    function clickedYes() {
        setConfirmedChoice(true)
    }

    function clickedNo() {
        setConfirmedChoice(false)
    }

    return <div className="absolute left-1/4 top-1/4 w-1/4 p-5 bg-white border-black border-4 rounded-md">
        <h1 className="text-center">Are you sure?</h1>
        <div className="text-center">
            <button className="m-5 p-5 border-black rounded-md border-2 font-bold bg-green-300" onClick={() => { clickedYes()}}>Yes</button>
            <button className="m-5 p-5 border-black rounded-md border-2 font-bold bg-red-300" onClick={() => { clickedNo()}}>No</button>
            <div className="hidden"></div>
        </div>

    </div>
}