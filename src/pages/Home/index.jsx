import React, { Component } from 'react'
import { connect } from 'react-redux'
//引入相关组件
import HomeHead from '@@/HomeHead'
import BannerSwiper from '@@/BannerSwiper'
import HomeNav from '@@/HomeNav'
import GoodsItem from '@@/GoodsItem'
import Recom from '@@/Recom'
//请求相关数据的方法
import { getBanner, getNav, getGoods, getRecom } from '@/actions/home'
import './style.less';

export default @connect ( state => {
  return {
    goodsList: state.home.goodsList
  }
},{
  getBanner, 
  getNav,
  getGoods, 
  getRecom
}) 
class Home extends Component {
  state = {
    headClassName: 'comp-homehead'
  }

  componentDidMount () {
    const { getBanner, getNav, getGoods, getRecom } = this.props;
    getBanner()
    getNav()
    getGoods()
    getRecom()
  }

  scrollFn = () => {
    const myBox = this.refs.mainbox;
    if ( myBox.scrollTop > 50 ) {
      this.setState({
        headClassName: 'comp-homeheadon'
      })
    } else {
      this.setState({
        headClassName: 'comp-homehead'
      })
    }
  }

  render() {
    const { headClassName } = this.state;
    const { goodsList } = this.props;
    return (
      <div className="pages-home">
        <HomeHead headClassName={headClassName} />
        <div className="home-mainbox" onScroll={this.scrollFn} ref="mainbox">
          <BannerSwiper />
          <HomeNav />
          {
            goodsList?goodsList.map( (val,index) => {
              return (
                <GoodsItem key={index} data={val} />
              )
            }):null
          }
          <Recom />
        </div>
      </div>
    )
  }
}
