import { type User } from '@/interfaces'
import { type FC, type PropsWithChildren, createContext, useContext, useState } from 'react'

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

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated: !(user === null) }}>{children}</AuthContext.Provider>
  )
}
