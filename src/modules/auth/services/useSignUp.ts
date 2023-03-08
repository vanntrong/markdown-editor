import { supabase } from '@/configs'
import { toast } from '@/utils'
import { useCallback } from 'react'

import { type SignUpInput } from '../pages/signup.page'

interface SignUpOutput {
  signUp: (payload: SignUpInput) => Promise<void>
}

const useSignUp = (): SignUpOutput => {
  const signUp = useCallback(async (payload: SignUpInput) => {
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password
    })

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        position: 'top-right'
      })

      return
    }

    console.log('data', data)
  }, [])

  return {
    signUp
  }
}

export default useSignUp
