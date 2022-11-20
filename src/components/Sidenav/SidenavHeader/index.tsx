import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import styles from './SidenavHeader.module.scss'

const SidenavHeader = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <span className={styles.ImageContainer}>
          <div className={styles.ImageBox}>
            <span className={styles.Image}>
              <span className={styles.ImageLink} />
            </span>
          </div>
        </span>
        <div className={styles.Text}>
          <h5 className={styles.Title}>Milan Individual Project</h5>
          <span className={styles.Subtitle}> Software Project </span>
        </div>
      </div>
    </div>
  )
}

export default SidenavHeader
