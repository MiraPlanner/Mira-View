import React from 'react'
import styles from './BacklogSprint.module.scss'

import SprintBacklogHeader from './BacklogSprintHeader/BacklogSprintHeader'
import ButtonCreateIssue from '../Sprint/ButtonCreateIssue/ButtonCreateIssue'

const BacklogSprint = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <SprintBacklogHeader />
        <div>
          <div>
            {/*<SprintIssue />*/}
            {/*<SprintIssue />*/}
          </div>
          <ButtonCreateIssue />
        </div>
      </div>
    </div>
  )
}

export default BacklogSprint
