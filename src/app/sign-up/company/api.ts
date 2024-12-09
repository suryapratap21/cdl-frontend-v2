import { hostname } from '@/services/utils'
import axios from 'axios'

export const getDotDetails = async (values: any) => {
  try {
    const response = await axios.post(
      `${hostname()}/company/dot-lookup`,
      values,
    )
    return response.data
  } catch (error: any) {
    console.error(error)
    throw new Error(
      typeof error?.response?.data?.message === 'string'
        ? error.response.data.message
        : 'Something went wrong!',
    )
  }
}

export const createCompany = async (values: any) => {
  try {
    const response = await axios.post(`${hostname()}/company/create`, values)
    return response.data
  } catch (error: any) {
    console.error(error)
    throw new Error(
      typeof error?.response?.data?.message === 'string'
        ? error.response.data.message
        : 'Something went wrong!',
    )
  }
}
