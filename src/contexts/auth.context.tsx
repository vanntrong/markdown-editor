import { type User } from '@/interfaces'
import useGetMe from '@/modules/auth/services/useGetMe'
import { type FC, type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

export interface IAuthContext {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  isAuthenticated: false
})

export const useAuthContext = (): IAuthContext => useContext(AuthContext)

export const AuthProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)
  const { getMe } = useGetMe()

  useEffect(() => {
    getMe()
      .then(({ user }) => {
        setUser(user)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [getMe])

  return <AuthContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>{children}</AuthContext.Provider>
}
