import { type User } from '@/interfaces'
import { type FC, type PropsWithChildren, createContext, useContext, useMemo, useState } from 'react'

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

  const values = useMemo(
    () => ({
      user,
      setUser,
      isAuthenticated: !(user === null)
    }),
    [user]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
