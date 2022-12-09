import React from 'react'
import styles from './Header.module.scss'
import StatusButton from '../ButtonStatus'
import { SprintStatus } from '../../../shared/constants/issues'
import Moment from 'react-moment'
import { SprintProps } from '../../../shared/utils/calls'

const Header = ({ name, startDate, endDate, goal, issues }: SprintProps) => {
  const issueText = (issueCount: number) => {
    if (issueCount == 1) {
      return <div className={styles.Issues}>(1 issue)</div>
    }
    return <div className={styles.Issues}>({issueCount} issues)</div>
  }

  const dateText = (startDate: string | undefined, endDate: string | undefined) => {
    if (!startDate || !endDate) return

    return (
      <div className={styles.Dates}>
        <Moment format='D MMM' date={startDate} />
        <div className={styles.DateSeparator}> - </div>
        <Moment format='D MMM' date={endDate} />
      </div>
    )
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Description}>
          <div className={styles.Title}>{name}</div>
          {dateText(startDate, endDate)}
          {issueText(issues.length)}
        </div>

        <div className={styles.TitleEnd}>
          <StatusButton status={SprintStatus.INACTIVE} activeSprint={true} />
        </div>
      </div>
      <div className={styles.Goal}>{goal}</div>
    </div>
  )
}

export default Header
