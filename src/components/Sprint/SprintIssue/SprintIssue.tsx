import React from 'react'
import styles from './SprintIssue.module.scss'
import Icon from './IssueIcon/IssueIcon'
import Status from './IssueStatus/IssueStatus'
import { IssueProps } from '../../../shared/utils/calls'

const SprintIssue = ({ title, issueType, issueStatus }: IssueProps) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.LeftAlign}>
          <Icon type={issueType} />
          <div className={styles.Name}>{title}</div>
        </div>
        <div className={styles.RightAlign}>
          <Status status={issueStatus} />
        </div>
      </div>
    </div>
  )
}

export default SprintIssue
