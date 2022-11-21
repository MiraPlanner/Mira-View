import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png' // with import

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <img src={logo} className={styles.Logo} />
          <div className={styles.CreateIssueButtonContainer}>
            <div className={styles.CreateIssueButton}>
              <div className={styles.CreateIssueButtonText}>Create</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
