import React, { useContext } from 'react'
import styles from './BacklogSprint.module.scss'

import SprintBacklogHeader from './BacklogSprintHeader/BacklogSprintHeader'
import ButtonCreateIssue from '../Sprint/ButtonCreateIssue/ButtonCreateIssue'
import { SprintContext } from '../../shared/context/SprintProvider'
import SprintIssue from '../Sprint/SprintIssue/SprintIssue'

const BacklogSprint = () => {
  const { backlog } = useContext(SprintContext)

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <SprintBacklogHeader />
        <div>
          {backlog?.map((issue) => (
            <SprintIssue {...issue} key={issue.id} />
          ))}
          <ButtonCreateIssue />
        </div>
      </div>
    </div>
  )
}

export default BacklogSprint
