import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout/Layout'
import BacklogHeader from './BacklogHeader/BacklogHeader'
import styles from './Backlog.module.scss'
import { getSprints, SprintProps } from '../../shared/utils/calls'
import Sprint from '../../components/Sprint/Sprint'
import BacklogSprint from '../../components/BacklogSprint/BacklogSprint'

const Backlog = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)
  const [sprints, setSprints] = useState<SprintProps[]>()

  useEffect(() => {
    fetchSprints()
  }, [])

  const fetchSprints = () => {
    getSprints().then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const fetchedSprints = response.response
        const sortedSprints = fetchedSprints.sort((a, b) => a.name.localeCompare(b.name))
        setSprints(sortedSprints)
      }
    })
  }

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
