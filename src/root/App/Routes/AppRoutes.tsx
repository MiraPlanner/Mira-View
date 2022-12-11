import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import BacklogPage from '../../../pages/Backlog/BacklogPage'
import Board from '../../../pages/Board'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/backlog' replace />} />
      <Route path='/backlog' element={<BacklogPage />} />
      <Route path='/boards' element={<Board />} />
    </Routes>
  </Router>
)

export default AppRoutes
