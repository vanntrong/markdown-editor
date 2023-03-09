import { type Workspace } from '@/modules/workspace/interfaces/workspace.interface'
import useGetAllWorkspace from '@/modules/workspace/services/useGetAllWorkspace'
import { type FC, type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

export interface IAppContext {
  workspaces: Workspace[]
  currentWorkspace?: Workspace
  setWorkspaces: React.Dispatch<React.SetStateAction<Workspace[]>>
  setCurrentWorkspace?: React.Dispatch<React.SetStateAction<Workspace | undefined>>
}

const AppContext = createContext<IAppContext>({
  workspaces: [],
  setWorkspaces: () => {}
})

export const useAppContext = (): IAppContext => useContext(AppContext)

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace>()
  const { getAllWorkspace } = useGetAllWorkspace()

  useEffect(() => {
    getAllWorkspace()
      .then(({ workspaces }) => {
        setWorkspaces(workspaces)
        setCurrentWorkspace(workspaces[0])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [getAllWorkspace])

  return (
    <AppContext.Provider value={{ workspaces, setWorkspaces, currentWorkspace, setCurrentWorkspace }}>
      {children}
    </AppContext.Provider>
  )
}
