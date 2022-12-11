import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ProSidebarProvider } from 'react-pro-sidebar'
import AppProvider from '../../shared/context/AppProvider'
import './Styles/baseStyles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <ProSidebarProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ProSidebarProvider>
  )
}
export default App
