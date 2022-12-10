import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../root/App'

it('renders placeholder board', () => {
  render(<App />)
  expect(screen.getByText('Board Content Goes Here')).toBeInTheDocument()
})
