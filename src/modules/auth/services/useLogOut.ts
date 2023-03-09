import { supabase } from '@/configs'

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
        console.log(error)
      })
  }

  return {
    logout
  }
}

export default useLogout
