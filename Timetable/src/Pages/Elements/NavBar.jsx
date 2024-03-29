import { Link } from "react-router-dom"
export default function NavBar({currentDayOfWeek}) {
    return <div id="Navbar" className="flex flex-row justify-center w-screen max-w-6xl m-auto my-4">
        <Link to="/" className="mx-10 text-white hover:text-orange-500 flex-1 justify-items-start">Home</Link>
        <p className={"mx-2 text-white hover:text-orange-500 " + (currentDayOfWeek == 1 ? "underline font-bold" : "")}>Monday</p>
        <p className={"mx-2 text-white hover:text-orange-500 " + (currentDayOfWeek == 2 ? "underline font-bold" : "")}>Tuesday</p>
        <p className={"mx-2 text-white hover:text-orange-500 " + (currentDayOfWeek == 3 ? "underline font-bold" : "")}>Wednesday</p>
        <p className={"mx-2 text-white hover:text-orange-500 " + (currentDayOfWeek == 4 ? "underline font-bold" : "")}>Thursday</p>
        <p className={"mx-2 text-white hover:text-orange-500 " + (currentDayOfWeek == 5 ? "underline font-bold" : "")}>Friday</p>
        <p className={"mx-2 text-gray-400 hover:text-orange-500 " + (currentDayOfWeek == 6 ? "underline font-bold" : "")}>Saturday</p>
        <p className={"mx-2 text-gray-400 hover:text-orange-500 " + (currentDayOfWeek == 0 ? "underline font-bold" : "")}>Sunday</p>
        <Link to="/settings" className="mx-10 text-white hover:text-orange-500 flex-1 justify-self-end text-right">Settings</Link>
    </div>
}