import React, { Component } from 'react'
import { getSearchData, getTypeshData, getFilterData } from '@/actions/search'
import { connect } from 'react-redux';
import { Icon } from 'antd'
import qs from 'qs'
import './style.less'

export default 
@connect(
  (state) => {
    return {
      searchData: state.search.searchData,
      typesData: state.search.typesData,
    }
  },
  {
    getSearchData,
    getTypeshData,
    getFilterData,
  }
)
class SearchGoods extends Component {
  state = {
    isShow: false,
    maskShow: false,
    currentIndex: 0,
    priceIndex: 0,
    filterpriceData: [
      "1-100",
      "100-200",
      "200-300",
      "300-500",
      "500-2000",
      "2000-9999",
    ],
  }
  query = qs.parse(
    this.props.location.search,
    { ignoreQueryPrefix: true } //  切割成对象
  )
  componentDidMount() {
    this.props.getTypeshData()
    this.props.getSearchData(this.query.kwords, "all")
  }
  // 排序显示隐藏
  isShowFn = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  // 综合排序
  allFn = () => {
    this.props.getSearchData(this.query.kwords, "all")
    this.isShowFn()
  }
  // 价格从低到高排序
  upFn = () => {
    this.props.getSearchData(this.query.kwords, "up")
    this.isShowFn()
  }
  // 价格从高到低排序
  downFn = () => {
    this.props.getSearchData(this.query.kwords, "down")
    this.isShowFn()
  }
  // 销量排序
  salesFn = () => {
    this.props.getSearchData(this.query.kwords, "sales")
  }
  // 返回上一页
  goBack = () => {
    this.props.history.go(-1)
  }
  // 筛选遮罩层显示隐藏
  maskShowFn = () => {
    this.setState({
      maskShow: !this.state.maskShow,
    })
  }
  // 分类选中样式
  currentIndexFn = (i) => {
    this.setState({
      currentIndex: i,
    })
  }
  priceIndexFn = (i) => {
    this.setState({
      priceIndex: i,
    })
  }
  // 点击筛选里的确定按钮
  determineBtn = () => {
    let Interval = this.state.filterpriceData[this.state.priceIndex].split("-")
    let newArr = JSON.parse(sessionStorage.getItem("search")).filter((v) => {
      return (
        Number(v.price) >= Number(Interval[0]) &&
        Number(v.price) < Number(Interval[1])
      )
    })
    this.props.getFilterData(newArr)
    this.maskShowFn()
  }

  render() {
    const { searchData, typesData } = this.props
    const { filterpriceData } = this.state
    return (
      <div className="sea-goods">
        <div className="sae-goods-head">
          <Icon type="left" onClick={this.goBack} />
          <input type="text" value={this.query.kwords} disabled={true} />
          <p onClick={this.maskShowFn}>筛选</p>
        </div>
        <div className="sea-goods-nav">
          <p onClick={this.isShowFn}>
            <span>综合</span>
            <Icon type="down" />
          </p>
          <p onClick={this.salesFn}>
            <span>销量</span>
          </p>
          <ul style={{ display: this.state.isShow ? "block" : "none" }}>
            <li onClick={this.allFn}>综合</li>
            <li onClick={this.upFn}>价格从低到高</li>
            <li onClick={this.downFn}>价格从高到低</li>
          </ul>
        </div>
        <div className="sea-goods-sec">
          {searchData.length === 0 || searchData instanceof Array === false ? (
            <p style={{ textAlign: "center", paddingTop: "1rem" }}>暂无数据</p>
          ) : (
            searchData.map((v) => {
              return (
                <dl key={v.gid}>
                  <dt>
                    <img src={v.image} alt="" />
                  </dt>
                  <dd>
                    <p>{v.title}</p>
                    <p>￥{v.price}</p>
                    <p>
                      销量<span>{v.sales}</span>件
                    </p>
                  </dd>
                </dl>
              )
            })
          )}
        </div>
        <div
          className="goods-mask"
          style={{ display: this.state.maskShow ? "flex" : "none" }}
        >
          <div className="mask-shadow" onClick={this.maskShowFn}></div>
          <div className="mask-sec">
            <div className="mask-sec-head">
              <h3>分类</h3>
              <div className="type-sec">
                {typesData.map((v, i) => {
                  return (
                    <p
                      key={v.cid}
                      onClick={() => this.currentIndexFn(i)}
                      className={this.state.currentIndex === i ? "pactive" : ""}
                    >
                      {v.title}
                    </p>
                  )
                })}
              </div>
              <h3>价格区间</h3>
              <div className="type-sec">
                {filterpriceData.map((v, i) => {
                  return (
                    <p
                      key={v}
                      onClick={() => this.priceIndexFn(i)}
                      className={this.state.priceIndex === i ? "pactive" : ""}
                    >
                      {v}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="mask-foot">
              <div className="foot-count">
                共<span>{searchData.length}</span>件
              </div>
              <div className="foot-btn" onClick={this.determineBtn}>
                <button>确定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
