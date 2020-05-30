const detState = {
  isReg: false,
  imgSrc: '',
  hashCode: false,
}
export default function login(state = detState, action) {
  switch (action.type) {
    case 'FETCH_REG_ISREG':
      if (action.payload.data.code === 200) {
        return { ...state, isReg: true }
      } else {
        return { ...state, isReg: false }
      }
    case 'FETCH_REG_GETCODE':
      return { ...state, imgSrc: action.payload.config.url }
    case 'FETCH_REG_HASHCODE':
      if (action.payload.data.code === 200) {
        return { ...state, hashCode: true }
      } else {
        return { ...state, hashCode: false }
      }
    default:
      return state
  }
}
