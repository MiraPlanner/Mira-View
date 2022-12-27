import React, { createContext, useEffect, useState } from 'react'
import { getBacklog, getSprints, IssueProps, SprintProps } from '../utils/calls'

type BacklogContextType = {
  sprints: SprintProps[]
  setSprints: React.Dispatch<React.SetStateAction<SprintProps[] | []>>
  backlog: IssueProps[]
  setBacklog: React.Dispatch<React.SetStateAction<IssueProps[] | []>>
}

const BacklogContextState = {
  sprints: [],
  setSprints: () => [],
  backlog: [],
  setBacklog: () => [],
}

export const BacklogContext = createContext<BacklogContextType>(BacklogContextState)

type Props = {
  children: React.ReactNode
}

const BacklogProvider = ({ children }: Props) => {
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
        console.log(res)
      } else {
        const fetchedSprints = res.response

        const sortedSprints = fetchedSprints.sort(function (a, b) {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
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
    <BacklogContext.Provider value={{ sprints, setSprints, backlog, setBacklog }}>
      {children}
    </BacklogContext.Provider>
  )
}

export default BacklogProvider
