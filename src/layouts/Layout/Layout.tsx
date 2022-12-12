import React from 'react'
import Header from '../../components/Header/Header'
import Sidenav from '../../components/Sidenav/Sidenav'
import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Wrapper}>
        <Sidenav />
        {children}
      </div>
    </div>
  )
}

export default Layout
