import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsize } from '@/actions/size'
import { getcommet } from '@/actions/commet'
import { getdetail } from '@/actions/shop'
import { addCart } from '@/actions/cart'
import { Message } from 'antd'
import 'swiper/js/swiper.js'
import 'swiper/css/swiper.css'
import './style.less'

export default
@connect(
  (state) => {
    return {
      detail: state.shop,
      commet: state.commet,
      size: state.size,
    }
  },
  {
    getdetail,
    getcommet,
    getsize,
    addCart,
  }
)
class index extends Component {
  state = {
    num: 1,
    visable: true,
  }
  componentDidMount() {
    var gid = this.props.match.params.gid
    this.props.getdetail(gid)
    this.props.getcommet(gid)
    this.props.getsize(gid)
  }
  handlmask = () => {
    const { visable } = this.state
    this.setState({
      visable: !visable,
    })
  }
  affirm = () => {
    var gid = this.props.match.params.gid
    const { num } = this.state
    const { images, title, price, freight } = this.props.detail
    this.setState({
      visable: true,
    })
    var size = document.getElementsByClassName('on')[0]
    var color = document.getElementsByClassName('tinct')[0]
    if (size && color) {
      var obj = {
        gid,
        title,
        images,
        price,
        freight,
        amount: num,
        checked: false,
        color: color.innerHTML,
        size: size.innerHTML,
      }
      this.props.addCart(obj)
      Message.info('成功加入购物车')
    } else {
      Message.info('请选择颜色或尺寸')
    }
  }
  add = () => {
    const { num } = this.state
    this.setState({
      num: num + 1,
    })
  }
  subtract = () => {
    const { num } = this.state
    if (num >= 2) {
      this.setState({
        num: num - 1,
      })
    }
  }
  colorclick = (index) => {
    var arr = Array.from(document.getElementsByClassName('shop-color-arr'))

    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('tinct')
    }
    arr[index].classList.add('tinct')
  }
  sizeclick = (index) => {
    var arr = Array.from(document.getElementsByClassName('shop-color-brr'))

    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('on')
    }
    arr[index].classList.add('on')
  }
  render() {
    const { images, title, price, freight, sales } = this.props.detail
    const { visable } = this.state
    const { commet } = this.props
    const { num } = this.state
    const { size, color } = this.props.size
    return (
      <section>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images
              ? images.map((v, i) => {
                  return (
                    <div key={i} className="swiper-slide">
                      <img src={v} alt="" />
                    </div>
                  )
                })
              : null}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="title">{title}</div>
        <div className="price">¥{price}</div>
        <div className="freight">
          <div>快递:{freight}元</div>
          <div>月销量:{sales}件</div>
        </div>
        <div className="commet">
          <div className="commet-head">
            商品评价({commet instanceof Array ? commet.length : 0})
          </div>
          <div className="commet_detail">
            {commet instanceof Array
              ? commet.map((v, i) => {
                  return (
                    <div key={i} className="commet-cmmit">
                      <div className="commet-Top">
                        <p className="commet-img">
                          <img src={v.head} alt="" />
                        </p>
                        {v.nickname}
                      </div>
                      <div className="commet-content">{v.content}</div>
                      <div>{v.times}</div>
                    </div>
                  )
                })
              : null}
          </div>
        </div>
        <div className="Btn">
          <button className="collect">收藏</button>
          <button className="join" onClick={this.handlmask}>
            加入购物车
          </button>
        </div>
        <div className="mask" hidden={visable}>
          <div className="mask-box">
            <dl className="shop-detail">
              <dt>
                <img src={images ? images[0] : null} alt="" />
              </dt>
              <dd>
                <p>{title}</p>
                <p className="shop-price">¥{price}</p>
              </dd>
            </dl>
            <div className="shop-coloe">
              <p>颜色</p>
              <div>
                {color instanceof Array
                  ? color.map((v, i) => {
                      return (
                        <span
                          className="shop-color-arr"
                          key={i}
                          onClick={() => this.colorclick(i)}
                        >
                          {v.value}
                        </span>
                      )
                    })
                  : null}
              </div>
            </div>
            <div className="shop-size">
              <p>尺码</p>
              <div>
                {size instanceof Array
                  ? size.map((v, i) => {
                      return (
                        <span
                          className="shop-color-brr"
                          key={i}
                          onClick={() => this.sizeclick(i)}
                        >
                          {v.value}
                        </span>
                      )
                    })
                  : null}
              </div>
            </div>
            <div className="shop-buy">
              <p>购买数量</p>
              <p className="shop-emendation">
                <span onClick={this.subtract}>-</span>
                <span>{num}</span>
                <span onClick={this.add}>+</span>
              </p>
            </div>
            <button onClick={this.affirm}>确定</button>
          </div>
        </div>
      </section>
    )
  }
}
