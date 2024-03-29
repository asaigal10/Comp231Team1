import { useEffect, useState } from 'react'
import NavBar from './Pages/Elements/NavBar'
import Home from './Pages/Home'

function App() {

  const [curWeek, setCurWeek] = useState(0)
  useEffect(() => {
    setCurWeek({date: new Date().getDay()})
  }, [])

  return (
      <div>
        <NavBar currentDayOfWeek={curWeek.date}/>
        <Home />
      </div>
  )
}

export default App
