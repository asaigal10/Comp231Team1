import { useEffect, useState } from 'react';
import { calcWeekOfYear } from "../commonJs/dateTime"
import Schedule from './schedule/Schedule'
import WeekSchedule from "./week-schedule/WeekSchedule"
import {
    getDaySchedule,
    getStudyWeekNumber,
    getTodayNumberInStudyDayList,
    getStudyDaysList,
    getStudyWeeksCount
} from '../commonJs/demo'

export default function Home() {
    const [ studyWeeksCount, setStudyWeeksCount ] = useState(getStudyWeeksCount());
    const [ studyDaysList, setStudyDaysList ] = useState(getStudyDaysList());
    const [ selectedDay, setSelectedDay ] = useState(getTodayNumberInStudyDayList(studyDaysList));
    const [ selectedWeek, setSelectedWeek ] = useState(getStudyWeekNumber());
    const [ daySchedule, setDaySchedule ] = useState(getDaySchedule(selectedDay, selectedWeek));
    const [ settings, setSettings ] = useState({'time-format':'12h'});
    
    /* shared hooks to be passed to other components */
    const sharedHooks = {
        studyWeeksCount, setStudyWeeksCount,
        studyDaysList, setStudyDaysList,
        selectedDay, setSelectedDay,
        selectedWeek, setSelectedWeek,
        daySchedule, setDaySchedule,
        settings, setSettings
    }

    if (daySchedule == undefined){
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