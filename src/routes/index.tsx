import { privateRoutes, publicRoutes } from '@/configs/routes.config'
import { type Route as RouteType } from '@/interfaces'
import { Route, Routes } from 'react-router-dom'

import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

const getRoutes = (routes: RouteType[]): JSX.Element[] => {
  return routes.map((route) => {
    let childrenComponent: JSX.Element[] | null = null
    if (route.children !== undefined) {
      childrenComponent = getRoutes(route.children)
    }

    const { component, key, children, ...rest } = route
    if (childrenComponent !== null) {
      return (
        <Route key={key} {...rest}>
          {childrenComponent}
        </Route>
      )
    }

    return <Route key={key} element={component} path={rest.path} />
  })
}

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>{getRoutes(privateRoutes)}</Route>

      <Route element={<PublicRoutes />}>{getRoutes(publicRoutes)}</Route>
    </Routes>
  )
}

export default AppRoutes
