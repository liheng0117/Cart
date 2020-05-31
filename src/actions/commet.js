import { GET_DETAIL_COMMET } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getcommet(options) {
  return {
    type: GET_DETAIL_COMMET,
    payload: get(`${api.commet}${options}${api.flower}`),
  }
}
