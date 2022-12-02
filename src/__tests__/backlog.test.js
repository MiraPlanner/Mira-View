import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../root/App'

it('renders placeholder backlog', () => {
  render(<App />)
  expect(screen.getByText('Backlog Content Goes Here')).toBeInTheDocument()
})
