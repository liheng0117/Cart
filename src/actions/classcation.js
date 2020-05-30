import { get } from '@/utils/request'
import api from '@/services/api'

export function getList(options) {
  return {
    type: 'FETCH_CLASS_LIST',
    payload: get(api.classList),
  }
}
export function classGoods(options) {
  return {
    type: 'FETCH_CLASS_GOODS',
    payload: get(api.goodsbefor + options + api.goodslast),
  }
}
