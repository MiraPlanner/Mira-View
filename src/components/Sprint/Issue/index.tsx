import React from 'react'
import styles from './Issue.module.scss'
import Icon from './Icon'
import { IssueStatus, IssueType } from '../../../shared/constants/issues'
import Status from './Status'

const Issue = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.LeftAlign}>
          <Icon type={IssueType.STORY} />
          <div className={styles.Name}>OWASP Report</div>
        </div>
        <div className={styles.RightAlign}>
          <Status status={IssueStatus.TODO} />
        </div>
      </div>
    </div>
  )
}

export default Issue
