import axios from 'axios'
import qs from 'qs'
import api from '@/services/api'

export function isLogin (options) {
  let status={}
  axios.post(api.login,qs.stringify(options))
  .then( res => {
    res.data.code!==200 ? status=false : status=true
  } )
  return {
    type: "FETCH_LOGIN_ISLOGIN",
    payload: status 
  }
}