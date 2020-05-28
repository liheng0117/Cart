import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.less'

export default @connect ( state => {
  return {
    recomList: state.home.recomList
  }
},{
  
})
class Recom extends Component { 
  render() {
    const { recomList } = this.props;
    // console.log(recomList);    
    return (
      <div className="comp-recom">
        <h1>为您推荐</h1>
        <div className="recombox">
          {
            recomList?recomList.map( val => {
              return (
                <Link to={"/goods/:"+val} key={val.gid}>
                  <dl>
                    <dt><img src={val.image} alt="" /></dt>
                    <dd>{val.title}</dd>
                    <dd>{'￥'+val.price}</dd>
                  </dl>
                </Link>
              )
            }):null
          }
        </div>
      </div>
    )
  }
}
