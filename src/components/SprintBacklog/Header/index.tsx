import React from 'react'
import styles from './Header.module.scss'
import ButtonSprintCreate from '../ButtonSprintCreate'

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Description}>
        <div className={styles.Title}>Backlog</div>
        <div className={styles.Issues}>(0 issues)</div>
      </div>

      <div className={styles.TitleEnd}>
        <ButtonSprintCreate />
      </div>
    </div>
  )
}

export default Header
