import { get } from '@/utils/request'
import api from '@/services/api'

export function getdetail(options) {
  return {
    type: 'GET_DETAIL_DETAIL',
    payload: get(`${api.detatil}${options}${api.follow}`),
  }
}
