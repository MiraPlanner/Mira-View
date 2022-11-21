import React from 'react'
import Sidenav from '../../components/Sidenav'
import styles from './Layout.module.scss'
import Header from '../../components/Header'

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
