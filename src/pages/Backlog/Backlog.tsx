import React, { useContext, useState } from 'react'
import Layout from '../../layouts/Layout/Layout'
import BacklogHeader from './BacklogHeader/BacklogHeader'
import styles from './Backlog.module.scss'
import Sprint from '../../components/Sprint/Sprint'
import BacklogSprint from '../../components/BacklogSprint/BacklogSprint'
import { BacklogContext } from '../../shared/context/BacklogProvider'
import { SprintContext } from '../../shared/context/SprintContext'

const Backlog = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)

  const { sprints } = useContext(BacklogContext)

  return (
    <Layout>
      <div className={styles.Container}>
        <BacklogHeader />
        <div className={styles.Sprints}>
          {sprints?.map((sprint) => (
            <SprintContext.Provider value={{ sprint }} key={sprint.id}>
              <Sprint />
            </SprintContext.Provider>
          ))}
          <BacklogSprint />
        </div>
      </div>
    </Layout>
  )
}

export default Backlog
