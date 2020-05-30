import api from '@/services/api'
import axios from 'axios'

export function isReg(options) {
  return {
    type: 'FETCH_REG_ISREG',
    payload: axios.post(api.reg, options),
  }
}
export function getCode(options) {
  const nowtime = new Date().getTime()
  return {
    type: 'FETCH_REG_GETCODE',
    payload: axios.post(`${api.opcode}&randow=${nowtime}`),
  }
}
export function hashCode(options) {
  return {
    type: 'FETCH_REG_HASHCODE',
    payload: axios.post(api.hashCode, options),
  }
}
