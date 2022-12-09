import React from 'react'
import styles from './Issue.module.scss'
import Icon from './Icon'
import Status from './Status'
import { IssueProps } from '../../../shared/utils/calls'

const Issue = ({ title, issueType, issueStatus }: IssueProps) => {
  {
    console.log(issueType)
  }

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

export default Issue
