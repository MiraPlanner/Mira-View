import React from 'react'
import styles from './Title.module.scss'

const Title = () => {
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

export default Title
