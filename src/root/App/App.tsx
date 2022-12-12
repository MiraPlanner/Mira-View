import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ProSidebarProvider } from 'react-pro-sidebar'
import BacklogProvider from '../../shared/context/BacklogProvider'
import './Styles/baseStyles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <ProSidebarProvider>
      <BacklogProvider>
        <AppRoutes />
      </BacklogProvider>
    </ProSidebarProvider>
  )
}
export default App
