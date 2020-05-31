import {
  GET_BANNERLIST,
  GET_NAVLIST,
  GET_GOODSLIST,
  GET_RECOMLIST,
} from '@/constants/actionTypes'
const defaultState = {
  bannerList: '',
  navList: '',
  goodsList: '',
  recomList: '',
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case GET_BANNERLIST:
      return { ...state, bannerList: action.payload.data }
    case GET_NAVLIST:
      return { ...state, navList: action.payload.data }
    case GET_GOODSLIST:
      return { ...state, goodsList: action.payload.data }
    case GET_RECOMLIST:
      return { ...state, recomList: action.payload.data }
    default:
      return state
  }
}
