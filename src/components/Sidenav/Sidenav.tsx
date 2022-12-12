import React, { Fragment } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import SidenavHeader from './SidenavHeader/SidenavHeader'
import SidenavResizeButton from './SidenavResizeButton/SidenavResizeButton'
import SidenavFooter from './SidenavFooter/SidenavFooter'
import styles from './Sidenav.module.scss'

const Sidenav = () => {
  return (
    <Fragment>
      <div className={styles.Container}>
        <Sidebar
          className={styles.Sidenav}
          backgroundColor=''
          width='15.2rem'
          collapsedWidth='1.4rem'
        >
          <Menu style={{ height: '100%', position: 'relative' }}>
            <SidenavHeader />
            <MenuItem routerLink={<Link to='/backlog' />}> Backlog</MenuItem>
            <MenuItem routerLink={<Link to='/boards' />}> Board</MenuItem>
            <SidenavFooter />
          </Menu>
        </Sidebar>
        <SidenavResizeButton />
      </div>
    </Fragment>
  )
}

export default Sidenav
