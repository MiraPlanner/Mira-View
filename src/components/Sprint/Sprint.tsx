import React, { useContext } from 'react'
import styles from './Sprint.module.scss'
import SprintHeader from './SprintHeader/SprintHeader'
import SprintIssue from './SprintIssue/SprintIssue'
import ButtonCreateIssue from './ButtonCreateIssue/ButtonCreateIssue'
import { SprintContext } from '../../shared/context/SprintContext'

const Sprint = () => {
  const { sprint } = useContext(SprintContext)

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <SprintHeader />
        <div>
          <div>
            {sprint.issues?.map((issue) => (
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
