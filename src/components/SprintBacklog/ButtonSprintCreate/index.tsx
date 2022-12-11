import React, { useState } from 'react'
import styles from './ButtonSprintCreate.module.scss'
import { createSprint, SprintProps } from '../../../shared/utils/calls'

type Props = {
  sprints: SprintProps[]
}

const ButtonSprintCreate = () => {
  const [error, setError] = useState(false)

  const newSprint = () => {
    return {
      name: 'new sprint',
      issues: [],
    }
  }

  const makeSprint = () => {
    createSprint(newSprint()).then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const createdSprint = response.response
      }
    })
  }

  return (
    <div className={styles.Enabled} onClick={() => makeSprint()}>
      Create Sprint
    </div>
  )
}

export default ButtonSprintCreate
