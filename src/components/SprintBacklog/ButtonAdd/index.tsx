import React, { useEffect, useState } from 'react'
import styles from './ButtonAdd.module.scss'

const ButtonAdd = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    makeSprint()
  }, [])

  const makeSprint = () => {
    createSprint().then((response) => {
      if (response.error) {
        setError(true)
      } else {
        setError(false)
        const createdSprint = response.response
        const sortedSprints = fetchedSprints.sort((a, b) => a.name.localeCompare(b.name))
        setSprints(sortedSprints)
      }
    })
  }

  return <div className={styles.Enabled}>Create Sprint</div>
}

export default ButtonAdd
