import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Board from '../pages/Board/Board'

it('renders placeholder board', () => {
  render(
    <ProSidebarProvider>
      <BrowserRouter>
        <Board />
      </BrowserRouter>
    </ProSidebarProvider>,
  )
  expect(screen.getByText('Board Content Goes Here')).toBeInTheDocument()
})
