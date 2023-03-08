import { supabase } from '@/configs'
import { type User } from '@/interfaces'
import { useCallback } from 'react'

interface GetMeOutput {
  user: User | null
}

interface UseGetMeOutput {
  getMe: () => Promise<GetMeOutput>
}

const useGetMe = (): UseGetMeOutput => {
  const getMe = useCallback(async (): Promise<GetMeOutput> => {
    const { data, error: _err } = await supabase.auth.getSession()
    if (_err) throw new Error(_err.message)
    const { data: user, error } = await supabase.from('profiles').select().eq('id', data.session?.user.id).single()
    if (error) throw new Error(error.message)
    return {
      user: user as User
    }
  }, [])

  return {
    getMe
  }
}

export default useGetMe
