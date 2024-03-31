import { useEffect, useState } from 'react'
import NavBar from './Pages/Elements/NavBar'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import './App.css'
import {
  getDaySchedule,
  getStudyWeekNumber,
  getTodayNumberInStudyDayList,
  getStudyDaysList,
  getStudyWeeksCount
} from './commonJs/demo'

function App({page = 'home'}) {
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

  const [curWeek, setCurWeek] = useState(0)
  useEffect(() => {
    setCurWeek({date: new Date().getDay()})
  }, [])

  return (
      <div>
        <NavBar currentDayOfWeek={curWeek.date}/>
        {(page == 'home') ? <Home sharedHooks={sharedHooks}/> : null}
        {(page == 'settings') ? <Settings /> : null}
      </div>
  )
}

export default App
