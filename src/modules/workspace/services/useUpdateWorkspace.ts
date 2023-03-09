import { supabase } from '@/configs'
import { useAppContext } from '@/contexts/app.context'
import { toast } from '@/utils'

import { type Workspace } from '../interfaces/workspace.interface'

interface useUpdateWorkspaceOutput {
  updateWorkspace: (workspace: Workspace) => Promise<void>
}

const useUpdateWorkspace = (): useUpdateWorkspaceOutput => {
  const { setWorkspaces, setCurrentWorkspace } = useAppContext()
  const updateWorkspace = async (workspace: Workspace): Promise<void> => {
    try {
      const { data } = await supabase
        .from('files')
        .update({ ...workspace, is_recent: true })
        .eq('id', workspace.id)
        .eq('author', workspace.author)
        .select()

      if (data) {
        setWorkspaces((prev) => prev.map((item) => (item.id === workspace.id ? workspace : item)))
        setCurrentWorkspace?.(workspace)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      }
    }
  }

  return {
    updateWorkspace
  }
}

export default useUpdateWorkspace
