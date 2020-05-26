import React, { Component } from 'react';
import { connect } from 'react-redux'
import ComHead from '@@/ComHead'
import { setCart } from '@/actions/cart'
import './style.less';

export default @connect ( state => {
  return {
    cart: state.cart
  }
},{
  setCart
})
class Cart extends Component {
  state = {
    allPrice: 0,
    allCheck: false,
    cartList: []
  }
  componentDidMount () {
    const { allPrice, allCheck, cartList } = this.props.cart;
    this.setState({
      allPrice,
      allCheck,
      cartList
    })
  }
  //计算总价钱及是否全部选中
  computeAllFn = () => {
    let allPrice = 0;
    let allCheck = false;
    const { cartList } = this.state;
    allCheck = cartList.every( val => val.checked )
    cartList.forEach( val => {
      if ( val.checked ) {
        allPrice += val.amount*val.price
      }     
    });
    this.setState({
      allPrice: allPrice,
      allCheck: allCheck
    })
  }
  //单选改变选中状态
  changeFn1 = (index) => {
    let arr = this.state.cartList;
    arr[index].checked = !arr[index].checked
    this.setState({
      cartList: arr
    })
    this.computeAllFn()
  }
  //全选改变选中状态
  changeFn2 = (myCheck) => {
    let arr = this.state.cartList;
    arr.forEach( val => {
      val.checked =  myCheck   
    });
    this.setState({
      cartList: arr
    })
    this.computeAllFn()
  }
  //添加数量
  addNumFn = (index) => {
    let arr = this.state.cartList;
    arr.forEach( (val, i) => {
      if( i === index ) {
        val.amount = val.amount*1+1
      } 
    });
    this.setState({
      cartList: arr
    })
    this.computeAllFn()
  }
  //减少数量
  minusNumFn = (index) => {
    let arr = this.state.cartList;
    arr.forEach( (val, i) => {
      if( i === index && val.amount > 1 ) {
        val.amount = val.amount*1-1
      } 
    });
    this.setState({
      cartList: arr
    })
    this.computeAllFn()
  }
  //结算
  toPayFn = () => {
    if( !localStorage.getItem('token') ) {
      this.props.history.push('/login')
    } else {
      
    }
  }
  //切换页面时把修改后的数据重新给到redux
  componentWillUnmount () {
    const { setCart } = this.props;
    setCart(this.state)
  }

  render() {
    const { allCheck, allPrice, cartList } = this.state;
    // console.log(cartList)
    return (
      <div className="pages-cart">
        <ComHead title="购物车" />
        <div className="cart-main">
          {
            cartList.length !== 0?cartList.map( (val, index) => {
              return (
                <dl key={val.gid} className="cart-box">
                  <dt>
                    <input type="checkbox" checked={val.checked} onChange={()=>this.changeFn1(index)} />
                  </dt>
                  <dd>
                    <p><img src={val.img} /></p>
                    <p>删除</p>
                  </dd>
                  <dd>
                    <p>{val.title}</p>
                    <p>
                      {
                        val.attrs.map( v => {
                          return (
                            <span key={v.attrid}>{v.title+": "+v.param[0].title}</span>
                          )
                        })
                      }
                    </p>
                    <p>
                      <span>{'￥'+val.price}</span>
                      <span>
                        <i onClick={()=>this.minusNumFn(index)}>-</i>
                        <i>{val.amount}</i>
                        <i onClick={()=>this.addNumFn(index)}>+</i>
                      </span>
                    </p>
                  </dd>
                </dl>
              )
            }):<h3>您的购物车空空如也</h3>
          }
        </div>
        <div className="cart-foot">
          <p>
            <input type="checkbox" checked={allCheck} onChange={()=>this.changeFn2(!allCheck)} />
            全选
          </p>
          <p>
            合计:
            <span>{' ￥'+allPrice}</span>
            <button onClick={this.toPayFn}>去结算</button>
          </p>
        </div>
      </div>
    )
  }
}
