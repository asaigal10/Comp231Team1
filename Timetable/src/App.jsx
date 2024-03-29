import { useEffect, useState } from 'react'
import NavBar from './Pages/Elements/NavBar'
import Home from './Pages/Home'
import Settings from './Pages/Settings'

function App({page = 'home'}) {

  const [curWeek, setCurWeek] = useState(0)
  useEffect(() => {
    setCurWeek({date: new Date().getDay()})
  }, [])

  return (
      <div>
        <NavBar currentDayOfWeek={curWeek.date}/>
        {(page == 'home') ? <Home /> : null}
        {(page == 'settings') ? <Settings /> : null}
      </div>
  )
}

export default App
