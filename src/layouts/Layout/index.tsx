import React from 'react'
import Sidenav from '../../components/Sidenav'
import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Container}>
      <Sidenav />
      {children}
    </div>
  )
}

export default Layout
