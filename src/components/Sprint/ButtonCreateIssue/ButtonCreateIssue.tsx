import React from 'react'
import styles from './ButtonCreateIssue.module.scss'
import AddIcon from '@mui/icons-material/Add'

const ButtonCreateIssue = () => {
  return (
    <div className={styles.Container}>
      <button className={styles.Button}>
        <div className={styles.AddIcon}>
          <AddIcon fontSize='small' />
        </div>
        <div>Create issue</div>
      </button>
    </div>
  )
}

export default ButtonCreateIssue
