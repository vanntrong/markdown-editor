import { supabase } from '@/configs'
import { toastError } from '@/utils'
import { useCallback } from 'react'

import { type SignUpInput } from '../pages/signup.page'

interface SignUpOutput {
  signUp: (payload: SignUpInput) => Promise<void>
}

const useSignUp = (): SignUpOutput => {
  const signUp = useCallback(async (payload: SignUpInput) => {
    const { error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password
    })

    if (error) {
      toastError(error.message)
    }
  }, [])

  return {
    signUp
  }
}

export default useSignUp
