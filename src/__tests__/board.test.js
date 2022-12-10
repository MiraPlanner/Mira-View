import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Board from '../pages/Board'

it('renders placeholder board', () => {
  render(<Board />)
  expect(screen.getByText('Board Content Goes Here')).toBeInTheDocument()
})
