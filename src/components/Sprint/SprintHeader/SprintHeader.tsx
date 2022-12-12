import React, { useContext } from 'react'
import styles from './SprintHeader.module.scss'
import StatusButton from '../ButtonStatus/ButtonStatus'
import { SprintStatus } from '../../../shared/constants/issues'
import Moment from 'react-moment'
import { SprintContext } from '../../../shared/context/SprintContext'

const SprintHeader = () => {
  const { sprint } = useContext(SprintContext)

  const issueText = () => {
    const issueCount = sprint.issues.length
    if (issueCount == 1) {
      return <div className={styles.Issues}>(1 issue)</div>
    }
    return <div className={styles.Issues}>({issueCount} issues)</div>
  }

  const dateText = () => {
    if (!sprint.startDate || !sprint.endDate) return

    return (
      <div className={styles.Dates}>
        <Moment format='D MMM' date={sprint.startDate} />
        <div className={styles.DateSeparator}> - </div>
        <Moment format='D MMM' date={sprint.endDate} />
      </div>
    )
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Description}>
          <div className={styles.Title}>{sprint.name}</div>
          {dateText()}
          {issueText()}
        </div>

        <div className={styles.TitleEnd}>
          <StatusButton status={SprintStatus.INACTIVE} activeSprint={true} />
        </div>
      </div>
      <div className={styles.Goal}>{sprint.goal}</div>
    </div>
  )
}

export default SprintHeader
