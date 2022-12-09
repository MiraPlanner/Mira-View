import React from 'react'
import styles from './Sprint.module.scss'
import Header from './Header'
import Issue from './Issue'
import ButtonCreate from './ButtonCreate'
import { SprintProps } from '../../shared/utils/calls'

const Sprint = ({ id, name, goal, issues, startDate, endDate }: SprintProps) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header name={name} goal={goal} startDate={startDate} endDate={endDate} issues={issues} />
        <div>
          <div>
            <Issue />
            <Issue />
          </div>
          <ButtonCreate />
        </div>
      </div>
    </div>
  )
}

export default Sprint
