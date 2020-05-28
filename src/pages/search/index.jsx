import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import { getHotData } from '@/actions/search'
import { connect } from 'react-redux';
import shortid from 'shortid'
import './style.less';

const { Search } = Input

export default
@connect(
  (state) => {
    return {
      hotData: state.search.hotData,
    }
  },
  {
    getHotData,
  }
)
class MySearch extends Component {
  componentDidMount() {
    this.props.getHotData()
  }
  // 搜索
  onSearch = (val) => {
    this.props.history.push("/searchgoods?kwords=" + val)
  }
  // 返回 
  goBack = () => {
    this.props.history.go(-1)
  }
  // 点击热门搜索
  goodsFn = (val) => {
    this.props.history.push("/searchgoods?kwords=" + val)
  }
  render() {
    const { hotData } = this.props
    return (
      <div className="search">
        <div className="search-head">
          <Icon type="close" onClick={this.goBack} />
          <Search
            placeholder="请输入宝贝名称"
            onSearch={(value) => this.onSearch(value)}
          />
        </div>
        <div className="search-section">
          <h3>热门搜索</h3>
          <div>
            {hotData.map((v) => {
              return (
                <span
                  key={shortid.generate()}
                  onClick={() => this.goodsFn(v.title)}
                >
                  {v.title}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
