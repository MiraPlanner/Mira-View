import { createContext } from 'react'
import { SprintProps } from '../utils/calls'

type SprintContext = {
  sprint: SprintProps
}

const BacklogContextState = {
  sprint: {
    name: '',
    issues: [],
    createdAt: '',
    updatedAt: '',
  },
}

export const SprintContext = createContext<SprintContext>(BacklogContextState)