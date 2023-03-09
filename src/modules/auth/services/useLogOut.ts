import { supabase } from '@/configs'
import { toastError } from '@/utils'

interface LogoutOutput {
  logout: () => void
}

const useLogout = (): LogoutOutput => {
  const logout = (): void => {
    supabase.auth
      .signOut()
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        toastError(error.message)
      })
  }

  return {
    logout
  }
}

export default useLogout
