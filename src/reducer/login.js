import { FETCH_LOGIN_ISLOGIN } from '@/constants/actionTypes'
const detState = {
  islogin: false,
}
export default function login(state = detState, action) {
  switch (action.type) {
    case FETCH_LOGIN_ISLOGIN:
      if (action.payload.data.code === 200) {
        return { islogin: true }
      } else {
        return { islogin: false }
      }
    default:
      return state
  }
}
