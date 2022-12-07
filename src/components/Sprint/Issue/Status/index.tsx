import React from 'react'
import styles from './Status.module.scss'
import { IssueStatus } from '../../../../shared/constants/issues'

type Props = {
  status: string
}

function Status({ status }: Props) {
  if (status == IssueStatus.TODO) {
    return (
      <div className={styles.Container}>
        <div className={styles.TODO}>To Do</div>
      </div>
    )
  } else if (status == IssueStatus.INPROGRESS) {
    return (
      <div className={styles.Container}>
        <div className={styles.INPROGRESS}>In Progress</div>
      </div>
    )
  } else {
    return (
      <div className={styles.Container}>
        <div className={styles.Done}>Done</div>
      </div>
    )
  }
}

export default Status
