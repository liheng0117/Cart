export function setCart (options){
  return {
    type: 'SET_CART_DATA',
    payload: options
  }
}

export function addCart (options){
  return {
    type: 'ADD_CART_DATA',
    payload: options
  }
}

export function delCart (options){
  return {
    type: 'DEL_CART_DATA',
    payload: options
  }
}