import React from 'react'
import styles from './BacklogSprintHeader.module.scss'
import ButtonCreateSprint from '../ButtonCreateSprint/ButtonCreateSprint'

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Description}>
        <div className={styles.Title}>Backlog</div>
        <div className={styles.Issues}>(0 issues)</div>
      </div>

      <div className={styles.TitleEnd}>
        <ButtonCreateSprint />
      </div>
    </div>
  )
}

export default Header
