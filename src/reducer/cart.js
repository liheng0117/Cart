const defaultState = {
  cartList: []
}

export default function cart ( state=defaultState, action ) {
  switch (action.type) {
    //添加购物车数据
    case 'ADD_CART_DATA':
      return state;    
    //删除购物车数据
    case 'DEL_CART_DATA':
      return state; 
    //增加数量
    case 'ADD_CART_NUM':
      return state;
    //减少数量
    case 'MINUS_CART_NUM':
      return state;
    default :
      return state
  }
}