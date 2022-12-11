import React from 'react'
import styles from './Sprint.module.scss'
import SprintHeader from './SprintHeader/SprintHeader'
import SprintIssue from './SprintIssue/SprintIssue'
import ButtonCreateIssue from './ButtonCreateIssue/ButtonCreateIssue'
import { SprintProps } from '../../shared/utils/calls'

const Sprint = ({ id, name, goal, issues, startDate, endDate }: SprintProps) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <SprintHeader
          name={name}
          goal={goal}
          startDate={startDate}
          endDate={endDate}
          issues={issues}
        />
        <div>
          <div>
            {issues?.map((issue) => (
              <SprintIssue {...issue} key={issue.id} />
            ))}
          </div>
          <ButtonCreateIssue />
        </div>
      </div>
    </div>
  )
}

export default Sprint
