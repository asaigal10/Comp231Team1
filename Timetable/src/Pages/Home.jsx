import { calcWeekOfYear } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"
export default function Home() {
    /* DEMO DATA - daySchedule */
    let daySchedule = [
        {
            title:'Enterprise Application Development',
            startTime:'13:00',
            endTime:'14:20',
            webAccessId:'1134519',
            courseType:'Online',
            courseCode:'COMP303',
            courseSection:'402'
        },
        {
            title:'Enterprise Application Development',
            startTime:'13:00',
            endTime:'14:20',
            webAccessId:'1134519',
            courseType:'Online',
            courseCode:'COMP303',
            courseSection:'402'
        },
    ]
    let weeksCount = 14;
    let days = ['Mon','Tue','Wed','Thu','Fri','Sat']
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>Week {calcWeekOfYear()} / 14</p>
        <Schedule daySchedule={daySchedule}/>
        <WeekSchedule weeksCount={weeksCount} days={days} />
    </div>
}