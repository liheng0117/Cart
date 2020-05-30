import api from '@/services/api'
import { post } from '@/utils/request'

export function isLogin (options) {
  return {
    type: "FETCH_LOGIN_ISLOGIN",
    payload: post(api.login,options) 
  }
}