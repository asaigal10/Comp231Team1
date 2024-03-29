import { calcWeekOfYear } from "../commonJs/dateTime"
export default function Home() {
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>Week {calcWeekOfYear()} / 14</p>
    </div>
}