import { GET_DETAIL_SIZE } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getsize(options) {
  return {
    type: GET_DETAIL_SIZE,
    payload: get(`${api.size}${options}${api.minut}`),
  }
}
