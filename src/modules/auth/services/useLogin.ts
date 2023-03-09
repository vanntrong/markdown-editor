import { supabase } from '@/configs'
import { toastError } from '@/utils'
import { useCallback } from 'react'

export type LoginProvider = 'google' | 'github' | 'facebook' | 'twitter'

interface LoginOutput {
  login: (provider: LoginProvider) => Promise<void>
}

const useLoginOAuth = (): LoginOutput => {
  const login = useCallback(async (provider: LoginProvider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin
      }
    })
    if (error) {
      toastError(error.message)
    }
  }, [])

  return {
    login
  }
}

export default useLoginOAuth
