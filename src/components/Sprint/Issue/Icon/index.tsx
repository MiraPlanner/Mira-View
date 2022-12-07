import React from 'react'
import styles from './Icon.module.scss'
import { IssueType } from '../../../../shared/constants/issues'

type Props = {
  type: number
}

function Icon({ type }: Props) {
  if (type == IssueType.TASK) {
    return (
      <div className={styles.Icon}>
        <img src='https://siome.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium' />
      </div>
    )
  } else if (type == IssueType.Subtask) {
    return (
      <div className={styles.Icon}>
        <img src='https://siome.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium' />
      </div>
    )
  } else {
    return (
      <div className={styles.Icon}>
        <img src='https://siome.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium' />
      </div>
    )
  }
}

export default Icon
