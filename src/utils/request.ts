import { API_URL } from '@/constants'
import axios from 'axios'

import { clearCookies, getCookie } from './cookies'
import { toast } from './toast'

export const request = axios.create({
  baseURL: API_URL
})

const token = getCookie('access_token')
if (token !== undefined) {
  request.defaults.headers.common.Authorization = `Bearer ${token}`
}

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    if (error.response.status === 401) {
      clearCookies()
      window.location.href = '/login'
    }
    toast({
      title: 'Error',
      description: error.response.data.message,
      status: 'error',
      duration: 5000,
      isClosable: true
    })
    return await Promise.reject(error)
  }
)
