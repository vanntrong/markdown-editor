import { supabase } from '@/configs'
import { useAuthContext } from '@/contexts/auth.context'
import { toastError } from '@/utils'
import { useCallback } from 'react'

import { type Workspace } from '../interfaces/workspace.interface'

interface GetAllWorkspaceOutput {
  workspaces: Workspace[]
}

interface useGetAllWorkspaceOutput {
  getAllWorkspace: () => Promise<GetAllWorkspaceOutput>
}

const useGetAllWorkspace = (): useGetAllWorkspaceOutput => {
  const { user } = useAuthContext()
  const getAllWorkspace = useCallback(async (): Promise<GetAllWorkspaceOutput> => {
    if (!user) {
      return {
        workspaces: []
      }
    }
    try {
      const { data } = await supabase
        .from('files')
        .select()
        .eq('author', user.id)
        .order('created_at', { ascending: false })
        .order('name', { ascending: true })
        .order('is_recent', { ascending: true })

      return {
        workspaces: data ?? []
      }
    } catch (error) {
      toastError(error instanceof Error ? error?.message : undefined)
      return {
        workspaces: []
      }
    }
  }, [user])

  return {
    getAllWorkspace
  }
}

export default useGetAllWorkspace
