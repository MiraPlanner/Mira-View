import React from 'react'
import styles from './SprintBacklog.module.scss'

import Header from './Header'
import ButtonCreateIssue from '../Sprint/ButtonCreateIssue'

const SprintBacklog = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header />
        <div>
          <div>
            {/*<Issue />*/}
            {/*<Issue />*/}
          </div>
          <ButtonCreateIssue />
        </div>
      </div>
    </div>
  )
}

export default SprintBacklog
