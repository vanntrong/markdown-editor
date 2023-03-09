import { supabase } from '@/configs'
import { useAppContext } from '@/contexts/app.context'
import { toastError } from '@/utils'

interface UseCreateWorkspaceOutput {
  createWorkspace: (name: string, author: string) => Promise<void>
}

const useCreateWorkspace = (): UseCreateWorkspaceOutput => {
  const { setWorkspaces, setCurrentWorkspace } = useAppContext()
  const createWorkspace = async (name: string, author: string): Promise<void> => {
    try {
      const { data } = await supabase
        .from('files')
        .insert([
          {
            name,
            created_at: new Date().toISOString(),
            author
          }
        ])
        .select()

      if (data) {
        setWorkspaces((prev) => [data[0], ...prev])
        setCurrentWorkspace?.(data[0])
      }
    } catch (error) {
      if (error instanceof Error) {
        toastError(error.message)
      }
    }
  }

  return {
    createWorkspace
  }
}

export default useCreateWorkspace
