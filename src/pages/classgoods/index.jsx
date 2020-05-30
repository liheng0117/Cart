import React, { Component } from 'react'
import { connect } from 'react-redux'
import { classGoods } from '@/actions/classcation'
import './style.less'

export default @connect( state => {
  return {
    goodsData:state.classcation.goodsData
  }
},{
  classGoods
}) 
class index extends Component {
  componentDidMount () {
    let cid = this.props.match.params.cid
    localStorage.setItem('cid',cid)
    this.props.classGoods(cid)
  }
  componentWillReceiveProps(nextProps){
    let cid = nextProps.match.params.cid
    if (cid !== localStorage.getItem('cid')) {
      localStorage.setItem('cid',cid)
      this.props.classGoods(cid)
    }
  }
  onclick = (gid) => {
    this.props.history.push(`/detail/${gid}`)
  }
  render() {
    const { goodsData } = this.props
    return (
      <React.Fragment>
        {
          goodsData === '没有数据' ? <h1>没有相关宝贝</h1> :
          goodsData.map(v => {
            return(
              <div key={v.cid} className="goods">
                <p className="title">{v.title}</p>
                <div className="goodsList">
                {
                    v.goods == null ? <h1>{``}</h1> :
                    v.goods.map(j => {
                      return(
                        <dl key={j.gid} onClick={this.onclick(j.gid)}>
                          <dt><img src={j.image} alt=""/></dt>
                          <dd>{j.title}</dd>
                        </dl>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
        
      </React.Fragment>
    )
  }
}
