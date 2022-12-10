import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Board from '../pages/Board'

it('renders placeholder board', () => {
  render(
    <ProSidebarProvider>
      <Router>
        <Board />
      </Router>
    </ProSidebarProvider>,
  )
  expect(screen.getByText('Board Content Goes Here')).toBeInTheDocument()
})
