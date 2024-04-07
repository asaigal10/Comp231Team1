import { getSemesterString } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"
import DaySchedule from "./day-schedule/Day-Schedule"; // Import DaySchedule component


export default function Home({sharedHooks}) {
    
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>{getSemesterString()}</p>
        <div className="schedules-container">
                <WeekSchedule sharedHooks={sharedHooks} />
                <DaySchedule sharedHooks={sharedHooks} />
            </div>
        </div>
        
}