import { useEffect, useState } from 'react';
import { calcWeekOfYear } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"


export default function Home({sharedHooks}) {
    if (sharedHooks.daySchedule == undefined){
        return <div>Please Wait</div>
    }
    return <div className="max-w-6xl border-black border-4 rounded-md text-center m-auto">
        <h1 className="text-orange-500">Welcome to TimeTable!</h1>
        <p>Week {calcWeekOfYear()} / 14</p>
        {/* <Schedule daySchedule={daySchedule} /> */}
        <Schedule sharedHooks={sharedHooks} />
        {/* <WeekSchedule studyWeeksCount={studyWeeksCount} studyDaysList={studyDaysList} /> */}
        <WeekSchedule sharedHooks={sharedHooks} />
    </div>
}