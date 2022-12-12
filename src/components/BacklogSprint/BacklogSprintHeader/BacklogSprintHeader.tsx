import React, { useContext } from 'react'
import styles from './BacklogSprintHeader.module.scss'
import ButtonCreateSprint from '../ButtonCreateSprint/ButtonCreateSprint'
import { BacklogContext } from '../../../shared/context/BacklogProvider'

const BacklogSprintHeader = () => {
  const { backlog } = useContext(BacklogContext)

  const issueText = () => {
    const issueCount = backlog.length
    if (issueCount == 1) {
      return <div className={styles.Issues}>(1 issue)</div>
    }
    return <div className={styles.Issues}>({issueCount} issues)</div>
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Description}>
        <div className={styles.Title}>Backlog</div>
        {issueText()}
      </div>

      <div className={styles.TitleEnd}>
        <ButtonCreateSprint />
      </div>
    </div>
  )
}

export default BacklogSprintHeader
