import React, { createContext, useEffect, useState } from 'react'
import { getBacklog, getSprints, IssueProps, SprintProps } from '../utils/calls'

type SprintContextType = {
  sprints: SprintProps[]
  setSprints: React.Dispatch<React.SetStateAction<SprintProps[] | []>>
  backlog: IssueProps[]
  setBacklog: React.Dispatch<React.SetStateAction<IssueProps[] | []>>
}

const SprintContextState = {
  sprints: [],
  setSprints: () => [],
  backlog: [],
  setBacklog: () => [],
}

export const SprintContext = createContext<SprintContextType>(SprintContextState)

// Defining Provider
type Props = {
  children: React.ReactNode
}

const SprintProvider = ({ children }: Props) => {
  const [sprints, setSprints] = useState<SprintProps[] | []>([])
  const [backlog, setBacklog] = useState<IssueProps[] | []>([])

  const INTERVAL_MS = 10000

  useEffect(() => {
    fetchSprints()
    fetchBacklog()

    const interval = setInterval(() => {
      fetchSprints()
      fetchBacklog()
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  const fetchSprints = () => {
    getSprints().then((res) => {
      if (res.error) {
        console.log(res.error)
      } else {
        const fetchedSprints = res.response

        const sortedSprints = fetchedSprints.sort(function (a, b) {
          return new Date(a.createdAt).getTime() - new Date(b.updatedAt).getTime()
        })

        setSprints(sortedSprints)
      }
    })
  }

  const fetchBacklog = () => {
    getBacklog().then((res) => {
      if (res.error) {
        console.log(res.error)
      } else {
        const fetchedIssues = res.response

        setBacklog(fetchedIssues)
      }
    })
  }

  return (
    <SprintContext.Provider value={{ sprints, setSprints, backlog, setBacklog }}>
      {children}
    </SprintContext.Provider>
  )
}

export default SprintProvider
