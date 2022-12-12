import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import CreateIssueModal from '../Modals/Issues/CreateIssueModal'

const Header = () => {
  const [showIssueModal, setShowIssueModal] = useState(false)

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <img src={logo} className={styles.Logo} />
          <div
            className={styles.CreateIssueButtonContainer}
            onClick={() => setShowIssueModal(true)}
          >
            <div className={styles.CreateIssueButton}>
              <div className={styles.CreateIssueButtonText}>Create</div>
            </div>
          </div>
        </div>
      </div>
      <CreateIssueModal
        show={showIssueModal}
        hide={() => setShowIssueModal(false)}
        defaultValue={undefined}
      />
    </div>
  )
}

export default Header
