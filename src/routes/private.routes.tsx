import { ROUTES } from '@/constants'
import { useAuthContext } from '@/contexts/auth.context'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = (): JSX.Element => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} state={{ from: window.location.pathname }} />
  }

  return <Outlet />
}

export default PrivateRoutes
