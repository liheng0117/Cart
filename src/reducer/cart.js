const defaultState = {
  allCheck: false,
  allPrice: 0,
  cartList: [
    {
      'gid': '143208071',
      'title': '高跟鞋女2018款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带',
      'amount': '1',
      'price': 128,
      'img': '//vueshop.glbuys.com/uploadfiles/1524556409.jpg',
      'checked': false,
      'freight': 20,
      'color': '白色',
      'size': '38'
    },
    {
      'gid': '143208072',
      'title': '高跟鞋女2018款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带',
      'amount': '1',
      'price': 250,
      'img': '//vueshop.glbuys.com/uploadfiles/1524556409.jpg',
      'checked': false,
      'freight': 20,
      'color': '蓝色',
      'size': '39'
    }
  ]
}

export default function cart ( state=defaultState, action ) {
  switch (action.type) {
    //离开购物车页面是存储数据
    case 'SET_CART_DATA':
      // console.log(action.payload)
      return action.payload;
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