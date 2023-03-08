import { supabase } from '@/configs'
import { toast } from '@/utils'
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
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        position: 'top-right'
      })
      // return
    }
  }, [])

  return {
    login
  }
}

export default useLoginOAuth
