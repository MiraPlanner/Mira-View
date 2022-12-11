import React from 'react'
import styles from './BacklogHeader.module.scss'

const BacklogHeader = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Links}>
        <div>Projects</div>
        <div className={styles.Divider}>/</div>
        <div>Milan Individual Project</div>
      </div>
      <div className={styles.Header}>Backlog</div>
    </div>
  )
}

export default BacklogHeader
