import React from 'react'
import styles from './Sprint.module.scss'
import Header from './Header'
import Issue from './Issue'
import ButtonCreate from './ButtonCreate'

const Sprint = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header title={'Sprint X'} />
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
