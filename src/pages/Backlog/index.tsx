import React from 'react'
import Layout from '../../layouts/Layout'
import Title from './Title'
import Sprint from '../../components/Sprint'
import SprintBacklog from '../../components/SprintBacklog'
import styles from './Backlog.module.scss'

const Backlog = () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <Title />
        <div className={styles.Sprints}>
          <Sprint />
          <Sprint />
          <Sprint />
          <SprintBacklog />
        </div>
      </div>
    </Layout>
  )
}

export default Backlog
