import React, { useContext, useState } from 'react'
import styles from './ButtonCreateSprint.module.scss'
import { createSprint } from '../../../shared/utils/calls'
import { BacklogContext } from '../../../shared/context/BacklogProvider'

const ButtonSprintCreate = () => {
  const [error, setError] = useState(false)
  const { sprints, setSprints } = useContext(BacklogContext)

  const sprintName = () => {
    const lastSprint = sprints.at(-1)

    if (lastSprint == null) return 'Sprint 0'

    const lastNumber = lastSprint.name.match(/[0-9]+$/)

    if (lastNumber == null || isNaN(Number(0))) return lastSprint.name + ' 2'
    const newNumber = parseInt(lastNumber[0]) + 1
    return lastSprint.name.replace(/\d+$/, '') + '' + newNumber
  }

  const makeSprint = () => {
    createSprint({
      name: sprintName(),
    }).then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const createdSprint = response.response
        createdSprint.issues = []
        setSprints((sprints) => [...sprints, createdSprint])
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
