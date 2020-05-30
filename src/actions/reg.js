import api from '@/services/api'
import { post } from '@/utils/request'

export function isReg (options) {
  return {
    type: "FETCH_REG_ISREG",
    payload:post(api.reg,options)
  }
}
export function getCode (options) {
  const nowtime = new Date().getTime()
  return {
    type: "FETCH_REG_GETCODE",
    payload: post(`${api.opcode}&randow=${nowtime}`)
  }
}
export function hashCode (options) {
  return {
    type: "FETCH_REG_HASHCODE",
    payload: post(api.hashCode,options)
  }
}