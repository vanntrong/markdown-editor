import { supabase } from '@/configs'
import { type User } from '@/interfaces'
import { toastError } from '@/utils'
import { AuthError } from '@supabase/supabase-js'
import { useCallback } from 'react'

interface GetMeOutput {
  user: User | null
}

interface UseGetMeOutput {
  getMe: () => Promise<GetMeOutput>
}

const useGetMe = (): UseGetMeOutput => {
  const getMe = useCallback(async (): Promise<GetMeOutput> => {
    try {
      const { data } = await supabase.auth.getSession()
      const { data: user } = await supabase.from('profiles').select().eq('id', data.session?.user.id).single()
      return {
        user
      }
    } catch (error: unknown) {
      if (error instanceof AuthError) {
        toastError(error.message)
      }
      return {
        user: null
      }
    }
  }, [])

  return {
    getMe
  }
}

export default useGetMe
