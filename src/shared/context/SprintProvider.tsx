import React, { createContext, useEffect, useState } from 'react'
import { getSprints, SprintProps } from '../utils/calls'

type SprintContextType = {
  sprints: SprintProps[]
  setSprints: React.Dispatch<React.SetStateAction<SprintProps[] | []>>
}

const SprintContextState = {
  sprints: [],
  setSprints: () => [],
}

export const SprintContext = createContext<SprintContextType>(SprintContextState)

// Defining Provider
type Props = {
  children: React.ReactNode
}

const SprintProvider = ({ children }: Props) => {
  const [sprints, setSprints] = useState<SprintProps[] | []>([])
  const INTERVAL_MS = 10000

  useEffect(() => {
    fetchSprints()

    const interval = setInterval(() => {
      fetchSprints()
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  const fetchSprints = () => {
    getSprints().then((res) => {
      if (res.error) {
        console.log(res.error)
      } else {
        const sortedSprints = res.response.sort((a, b) => a.name.localeCompare(b.name))
        setSprints(sortedSprints)
      }
    })
  }

  return <SprintContext.Provider value={{ sprints, setSprints }}>{children}</SprintContext.Provider>
}

export default SprintProvider
