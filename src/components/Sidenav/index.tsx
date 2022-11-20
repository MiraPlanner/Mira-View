import React, { Fragment } from 'react'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'
import styles from './Sidenav.module.scss'
import SidenavHeader from './SidenavHeader'
import SidenavButton from './SidenavButton'

const Sidenav = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Fragment>
      <div className={styles.Container}>
        <Sidebar className={styles.Sidenav} backgroundColor='' collapsedWidth='1.4rem'>
          <Menu>
            <SidenavHeader />
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
        <SidenavButton />
      </div>
    </Fragment>
  )
}

export default Sidenav
