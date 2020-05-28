import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.less'

export default @connect ( state => {
  return {
    navList: state.home.navList
  }
},{
  
})
class HomeNav extends Component {

  render() {
    const { navList } = this.props
    // console.log(navList)
    return (
      <div className="comp-homenav">
        {
          navList?navList.map( val => {
            return (
              <Link to={'/fenlei/:'+val.cid} key={val.cid}>
                <dl>
                  <dt><img src={val.image} alt="" /></dt>
                  <dd>{val.title}</dd>
                </dl>
              </Link>              
            )
          }):null
        }
      </div>
    )
  }
}
