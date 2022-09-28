import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signupcandidate from './pages/candidate/Signupcandidate'
import Homecan from './pages/candidate/Homecan'
import SearchITcan from './pages/candidate/SearchITcan'
import Websitelayoutcan from './layout/candidate/Websitelayoutcan'
import Websitelayoutemp from './layout/employer/Websitelayoutemp'
import Homeemp from './pages/employer/Homeemp'
import Signupemployer from './pages/employer/Signupemployer'
import Idemployer from './pages/candidate/Idemployer'
import Pickpassword from './pages/Pickpassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Websitelayoutcan />}>
            <Route index element={<Homecan />} />
            <Route path='search' element={<SearchITcan />} />
            <Route path='idemployer' element={<Idemployer />} />
          </Route>
          <Route path='employer' element={<Websitelayoutemp />}>
            <Route index element={<Homeemp />} />
          </Route>
          <Route path='/login/signupcandidate' element={<Signupcandidate />} />
          <Route path='/login/signupempoly' element={<Signupemployer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Pickpassword' element={<Pickpassword />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
