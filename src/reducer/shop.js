import { GET_DETAIL_DETAIL } from '@/constants/actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_DETAIL:
      return { ...payload.data }
    default:
      return state
  }
}
