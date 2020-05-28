import React, { Component } from "react"
import axios from "axios"
import api from "../../services/api"
import Swiper from "swiper"
import { Message } from "antd"
import "swiper/js/swiper.js"
import "swiper/css/swiper.css"
import "./style.less"
class index extends Component {
  state = {
    img: [], //轮播图片
    title: "", //名称
    price: "", //价格
    freight: "", //邮费
    sales: "", //月销量
    commet: [],
    visable: true,
    color: [],
    size: [],
    num: 1,
  }
  componentDidMount() {
    axios.get(api.detatil).then((res) => {
      console.log(res)
      this.setState(
        {
          img: res.data.data.images,
          title: res.data.data.title,
          price: res.data.data.price,
          freight: res.data.data.freight,
          sales: res.data.data.sales,
        },
        () => {
          new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          })
        }
      )
    })
    axios.get(api.commet).then((nbb) => {
      this.setState({
        commet: nbb.data.data,
      })
    })
    axios.get(api.size).then((res) => {
      this.setState({
        color: res.data.data[0].values,
        size: res.data.data[1].values,
      })
    })
  }
  handlmask = () => {
    const { visable } = this.state
    this.setState({
      visable: !visable,
    })
  }
  affirm = () => {
    const { title, price, freight, num, img } = this.state
    this.setState({
      visable: true,
    })
    var size = document.getElementsByClassName("on")[0]
    var color = document.getElementsByClassName("tinct")[0]
    if (size && color) {
      var obj = {
        title,
        img,
        price,
        freight,
        num,
        color: color.innerHTML,
        size: size.innerHTML,
      }
      console.log(obj);
    } else {
      Message.info("请选择颜色或尺寸")
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
    var arr = Array.from(document.getElementsByClassName("shop-color-arr"))

    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("tinct")
    }
    arr[index].classList.add("tinct")
  }
  sizeclick = (index) => {
    var arr = Array.from(document.getElementsByClassName("shop-color-brr"))

    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("on")
    }
    arr[index].classList.add("on")
  }
  render() {
    const {
      img,
      title,
      price,
      freight,
      sales,
      commet,
      visable,
      size,
      color,
      num,
    } = this.state
    console.log(commet, 5555)
    return (
      <section>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {img
              ? img.map((v, i) => {
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
          <div className="commet-head">商品评价({commet.length})</div>
          <div className="commet_detail">
            {commet
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
                <img src={img[0]} alt="" />
              </dt>
              <dd>
                <p>{title}</p>
                <p className="shop-price">¥{price}</p>
              </dd>
            </dl>
            <div className="shop-coloe">
              <p>颜色</p>
              <div>
                {color.map((v, i) => {
                  return (
                    <span
                      className="shop-color-arr"
                      key={i}
                      onClick={() => this.colorclick(i)}
                    >
                      {v.value}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="shop-size">
              <p>尺码</p>
              <div>
                {size.map((v, i) => {
                  return (
                    <span
                      className="shop-color-brr"
                      key={i}
                      onClick={() => this.sizeclick(i)}
                    >
                      {v.value}
                    </span>
                  )
                })}
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

export default index
