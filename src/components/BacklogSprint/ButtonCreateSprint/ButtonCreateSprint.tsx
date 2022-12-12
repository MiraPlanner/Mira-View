import React, { useContext, useState } from 'react'
import styles from './ButtonCreateSprint.module.scss'
import { createSprint } from '../../../shared/utils/calls'
import { SprintContext } from '../../../shared/context/SprintProvider'

const ButtonSprintCreate = () => {
  const [error, setError] = useState(false)
  const { sprints, setSprints } = useContext(SprintContext)

  const newSprint = () => {
    return {
      name: sprintName(),
      issues: [],
    }
  }

  const sprintName = () => {
    // This could be reworked in the future to use CreatedAt
    const lastSprint = sprints.at(-1)

    if (lastSprint == null) return 'Sprint 0'

    const lastNumber = lastSprint.name.match(/[0-9]+$/)
    if (lastNumber == null || !Number(lastNumber)) return lastSprint.name + ' 2'
    const newNumber = parseInt(lastNumber[0]) + 1
    const newName = lastSprint.name.replace(/\d+$/, '') + '' + newNumber

    return newName
  }

  const makeSprint = () => {
    createSprint(newSprint()).then((response) => {
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
