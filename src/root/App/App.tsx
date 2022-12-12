import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ProSidebarProvider } from 'react-pro-sidebar'
import SprintProvider from '../../shared/context/SprintProvider'
import './Styles/baseStyles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <ProSidebarProvider>
      <SprintProvider>
        <AppRoutes />
      </SprintProvider>
    </ProSidebarProvider>
  )
}
export default App
