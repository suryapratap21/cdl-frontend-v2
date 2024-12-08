import { hostname } from '@/services/utils'
import axios from 'axios'

export const getDotDetails = async (values: any) => {
  try {
    const response = await axios.post(
      `${hostname()}/company/dot-lookup`,
      values,
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createCompany = async (values: any) => {
  try {
    const response = await axios.post(`${hostname()}/company/create`, values)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
