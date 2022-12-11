import React from 'react'
import styles from './Sprint.module.scss'
import Header from './Header'
import Issue from './Issue'
import ButtonCreateIssue from './ButtonCreateIssue'
import { SprintProps } from '../../shared/utils/calls'

const Sprint = ({ id, name, goal, issues, startDate, endDate }: SprintProps) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header name={name} goal={goal} startDate={startDate} endDate={endDate} issues={issues} />
        <div>
          <div>
            {issues?.map((issue) => (
              <Issue {...issue} key={issue.id} />
            ))}
          </div>
          <ButtonCreateIssue />
        </div>
      </div>
    </div>
  )
}

export default Sprint
