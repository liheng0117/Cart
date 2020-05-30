const defaultState = {
  listData: [],
  goodsData: [],
}

export default function classcation(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_CLASS_LIST':
      return { ...state, listData: action.payload.data }
    case 'FETCH_CLASS_GOODS':
      return { ...state, goodsData: action.payload.data }
    default:
      return state
  }
}
