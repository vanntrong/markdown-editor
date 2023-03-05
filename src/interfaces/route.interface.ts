export interface Route {
  key: string
  path: string
  children?: Route[]
  component?: JSX.Element
}
