import React from 'react'

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import AppRoutes from './Routes/AppRoutes'
import { ProSidebarProvider } from 'react-pro-sidebar'

import './Styles/baseStyles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <ProSidebarProvider>
    <AppRoutes />
  </ProSidebarProvider>
)

export default App
