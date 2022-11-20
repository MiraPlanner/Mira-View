import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import styles from './SidenavButton.module.scss'

const SidenavButton = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <div className={styles.ButtonContainer}>
      <div className={styles.ButtonBox}>
        <button className={styles.Button} onClick={() => collapseSidebar()}>
          {'O'}
        </button>
      </div>
    </div>
  )
}

export default SidenavButton
