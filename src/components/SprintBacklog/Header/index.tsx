import React from 'react'
import styles from './Header.module.scss'
import ButtonAdd from '../ButtonAdd'

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Description}>
        <div className={styles.Title}>Backlog</div>
        <div className={styles.Issues}>(0 issues)</div>
      </div>

      <div className={styles.TitleEnd}>
        <ButtonAdd />
      </div>
    </div>
  )
}

export default Header
