import React, { Fragment } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import styles from './Sidenav.module.scss'
import SidenavHeader from './SidenavHeader'
import SidenavButton from './SidenavButton'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <Fragment>
      <div className={styles.Container}>
        <Sidebar className={styles.Sidenav} backgroundColor='' collapsedWidth='1.4rem'>
          <Menu>
            <SidenavHeader />
            <MenuItem routerLink={<Link to='/backlog' />}> Backlog</MenuItem>
            <MenuItem routerLink={<Link to='/boards' />}> Board</MenuItem>
          </Menu>
        </Sidebar>
        <SidenavButton />
      </div>
    </Fragment>
  )
}

export default Sidenav
