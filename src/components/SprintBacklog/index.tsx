import React from 'react'
import styles from './SprintBacklog.module.scss'

import Header from './Header'
import Issue from '../Sprint/Issue'
import ButtonCreate from '../Sprint/ButtonCreate'

const SprintBacklog = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header />
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

export default SprintBacklog
