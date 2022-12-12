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

//
// const BacklogProvider = ({ children }: Props) => {
//   const [sprint, setSprint] = useState<SprintProps>()
//
//
//   return (
//     <SprintContext.Provider value={{ sprint, setSprint}}>
//       {children}
//     </SprintContext.Provider>
//   )
// }
//
// export default BacklogProvider
