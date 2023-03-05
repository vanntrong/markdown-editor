import { ROUTES } from '@/constants'
import { type Route } from '@/interfaces'
import Login from '@/modules/auth/pages/login.page'
import Home from '@/modules/home/pages/home.page'

export const publicRoutes: Route[] = [
  {
    key: 'home',
    path: ROUTES.home,
    component: <Home />
  },
  {
    key: 'login',
    path: ROUTES.login,
    component: <Login />
  }
]

export const privateRoutes: Route[] = []
