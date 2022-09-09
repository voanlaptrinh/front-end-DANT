import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Websitelayout from './layout/Websitelayout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Websitelayout /> }>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
