import Cookies from 'js-cookie'

type CookieName = 'access_token' | 'refresh_token'

export const getCookie = (name: CookieName): string | undefined => {
  return Cookies.get(name)
}

export const setCookie = (name: CookieName, value: string, exp: number): void => {
  Cookies.set(name, value, {
    expires: new Date(Date.now() + exp * 1000)
  })
}

export const removeCookie = (name: CookieName): void => {
  Cookies.remove(name)
}

export const clearCookies = (): void => {
  Cookies.remove('access_token')
  Cookies.remove('refresh_token')
}
