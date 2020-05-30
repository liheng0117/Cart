import _ from 'loadsh'
const defaultState = {
  allCheck: false,
  allPrice: 0,
  cartList: [],
}
export default function cart(state = defaultState, action) {
  switch (action.type) {
    //离开购物车页面是存储数据
    case 'SET_CART_DATA':
      // console.log(action.payload)
      return action.payload
    //添加购物车数据
    case 'ADD_CART_DATA':
      let obj1 = action.payload
      let arr1 = state.cartList
      const flag = arr1.some((val) => val.gid === obj1.gid)
      if (!flag) {
        arr1.push(obj1)
      }
      return { ...state, cartList: arr1 }
    //删除购物车数据
    case 'DEL_CART_DATA':
      const gid2 = action.payload
      let arr2 = state.cartList
      arr2 = arr2.filter((val) => {
        return val.gid !== gid2
      })
      return { ...state, cartList: _.cloneDeep(arr2) }
    default:
      return state
  }
}
