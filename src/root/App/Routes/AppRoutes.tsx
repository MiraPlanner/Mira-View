import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Backlog from '../../../pages/Backlog/Backlog'
import Board from '../../../pages/Board'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/backlog' replace />} />
      <Route path='/backlog' element={<Backlog />} />
      <Route path='/boards' element={<Board />} />
    </Routes>
  </Router>
)

export default AppRoutes
