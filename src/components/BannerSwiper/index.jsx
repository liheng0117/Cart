import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import 'swiper/js/swiper.js'

export default
@connect((state) => {
  return {
    bannerList: state.home.bannerList,
  }
})
class BannerSwiper extends Component {
  swiperFn = () => {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
      },

      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  componentDidMount() {
    this.swiperFn()
  }

  componentDidUpdate() {
    this.swiperFn()
  }

  render() {
    const { bannerList } = this.props
    // console.log(bannerList)
    return (
      <div className="comp-bannerswiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {bannerList
              ? bannerList.map((val, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img src={val.image} alt="" />
                    </div>
                  )
                })
              : null}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
