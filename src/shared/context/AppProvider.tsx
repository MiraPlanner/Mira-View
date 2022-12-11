import React, { useEffect, useState } from 'react'
import { getSprints, SprintProps } from '../utils/calls'

type Props = {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  const AppContext = React.createContext<SprintProps[] | undefined>(undefined)
  const [sprints, setSprints] = useState<SprintProps[] | undefined>(undefined)

  useEffect(() => {
    fetchSprints()
  }, [])

  const fetchSprints = () => {
    getSprints().then((res) => {
      if (res.error) {
        console.log(res.error)
      } else {
        setSprints(res.response)
      }
    })
  }

  const { Provider } = AppContext
  return <Provider value={sprints}>{children}</Provider>
}

export default AppProvider
