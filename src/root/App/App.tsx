import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.modules.scss'
import Backlog from '../../pages/Backlog/Backlog'
import Board from '../../pages/Board/Board'

const App = () => {
  return (
    <div className='App'>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/backlog' replace />} />
            <Route path='/backlog' element={<Backlog />} />
            <Route path='/boards' element={<Board />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
