import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import { BrowserRouter } from 'react-router-dom'
import CreateEvent from './pages/createPage'
import EventPage from './pages/eventPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/create' element={<CreateEvent />}></Route>
      <Route path='/event' element={<EventPage />}>
        <Route path='/event/:eName/:hName/:location/:startDate/:startTime/:endDate/:endTime/:location'></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
