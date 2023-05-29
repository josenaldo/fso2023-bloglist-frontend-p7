import axios from 'axios'
import { appConfig } from '@/data'

const baseUrl = `${appConfig.application.BACKEND}/api/login`

console.log('🔴 VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL)
console.log('🔴 BASEURL', baseUrl)

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)

  return response.data
}

export default { login }
