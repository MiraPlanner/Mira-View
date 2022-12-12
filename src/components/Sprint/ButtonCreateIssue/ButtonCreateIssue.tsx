import React, { useContext, useState } from 'react'
import styles from './ButtonCreateIssue.module.scss'
import AddIcon from '@mui/icons-material/Add'
import CreateIssueModal from '../../Modals/Issues/CreateIssueModal'
import { SprintContext } from '../../../shared/context/SprintContext'

const ButtonCreateIssue = () => {
  const [showIssueModal, setShowIssueModal] = useState(false)
  const { sprint } = useContext(SprintContext)

  return (
    <div className={styles.Container}>
      <button className={styles.Button} onClick={() => setShowIssueModal(true)}>
        <div className={styles.AddIcon}>
          <AddIcon fontSize='small' />
        </div>
        <div>Create issue</div>
      </button>
      <CreateIssueModal
        show={showIssueModal}
        hide={() => setShowIssueModal(false)}
        defaultValue={sprint.id}
      />
    </div>
  )
}

export default ButtonCreateIssue
