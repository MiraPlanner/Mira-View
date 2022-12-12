import React, { useContext, useState } from 'react'
import Layout from '../../layouts/Layout/Layout'
import BacklogHeader from './BacklogHeader/BacklogHeader'
import styles from './Backlog.module.scss'
import Sprint from '../../components/Sprint/Sprint'
import BacklogSprint from '../../components/BacklogSprint/BacklogSprint'
import { SprintContext } from '../../shared/context/SprintProvider'

const Backlog = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)

  const { sprints } = useContext(SprintContext)

  return (
    <Layout>
      <div className={styles.Container}>
        <BacklogHeader />
        <div className={styles.Sprints}>
          {sprints?.map((sprint) => (
            <Sprint {...sprint} key={sprint.id} />
          ))}
          <BacklogSprint />
        </div>
      </div>
    </Layout>
  )
}

export default Backlog
