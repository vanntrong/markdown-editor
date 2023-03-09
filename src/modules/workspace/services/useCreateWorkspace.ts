import { supabase } from '@/configs'
import { useAppContext } from '@/contexts/app.context'
import { toast } from '@/utils'

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
        toast({
          title: 'Error',
          description: 'Something went wrong',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      }
    }
  }

  return {
    createWorkspace
  }
}

export default useCreateWorkspace
