import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Websitelayout from './layout/Websitelayout'
import Home from './pages/Home'
import Login from './pages/Login'
import SearchIT from './pages/SearchIT'
import Signupcandidate from './pages/Signupcandidate'
import Signupemploer from './pages/Signupemploer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Websitelayout />}>
            <Route index element={<Home />} />
            <Route path='search' element={<SearchIT />} />
          </Route>
          <Route path='/login/signupcandidate' element={<Signupcandidate />} />
          <Route path='/login/signupempoly' element={<Signupemploer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
