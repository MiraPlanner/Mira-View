import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import IssueCreateModal from '../Modals/CreateIssueModal/IssueCreateModal' // with import

const Header = () => {
  const [showIssueModal, setShowIssueModal] = useState(false)

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <img src={logo} className={styles.Logo} />
          <div className={styles.CreateIssueButtonContainer}>
            <div className={styles.CreateIssueButton}>
              <div className={styles.CreateIssueButtonText} onClick={() => setShowIssueModal(true)}>
                Create
              </div>
              <IssueCreateModal show={showIssueModal} hide={() => setShowIssueModal(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
