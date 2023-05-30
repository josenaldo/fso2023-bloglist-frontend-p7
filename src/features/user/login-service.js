import axios from 'axios'
import { appConfig } from '@/data'

const baseUrl = `${appConfig.application.BACKEND}/api/login`

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)

  return response.data
}

export default { login }
