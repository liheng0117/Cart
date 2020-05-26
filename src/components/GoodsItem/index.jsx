import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.less'

export default class GoodsItem extends Component {

  render() {
    const { data } = this.props;
    // console.log(data)
    return (
      <div className="comp-goodsitem">
        <div className="goodstitle">
          <p><span>{data.title}</span></p>
        </div>
        <div className="goodsinfo">
          {
            data.items.length === 7?data.items.map( (val, index) => {
              if( index === 0 ) {
                return (                 
                  <Link to={"/goods/:"+val} key={val.gid} className="goodsseven">
                    <dl>
                      <dd>{val.title}</dd>
                      <dd>
                        精品打折
                        <span>{val.price}</span>
                      </dd>
                      <dt><img src={val.image} /></dt>                        
                    </dl>
                  </Link>                                               
                )
              } else if ( index === 1 || index === 2 ) {
                return (
                  <Link to={"/goods/:"+val} key={val.gid} className="goodsseven">
                    <dl>
                      <dd>
                        <span>{val.title}</span>
                        <span>品质精选</span>
                      </dd>
                      <dt><img src={val.image} /></dt>                        
                    </dl>
                  </Link>                                                                               
                )
              } else {
                return (                 
                  <Link to={"/goods/:"+val} key={val.gid} className="goodsseven">
                    <dl>
                      <dd>{val.title}</dd>
                      <dt><img src={val.image} /></dt> 
                      <dd>{'￥'+val.price}</dd>
                      <dd>{'￥'+(val.price+100)}</dd>                       
                    </dl>
                  </Link> 
                )
              }
            }):data.items.map( (val, index) => {
              if( index === 0 || index === 1 ) {
                return (                 
                    <Link to={"/goods/:"+val} key={val.gid} className="goodssix">
                      <dl>
                        <dd>{val.title}</dd>
                        <dd>
                          火爆开售
                        </dd>
                        <dt><img src={val.image} /></dt>                        
                      </dl>
                    </Link>                                               
                )
              } else {
                return (                 
                  <Link to={"/goods/:"+val} key={val.gid} className="goodssix">
                    <dl>
                      <dd>{val.title}</dd>
                      <dt><img src={val.image} /></dt> 
                      <dd>{'￥'+val.price}</dd>
                      <dd>{'￥'+(val.price+100)}</dd>                       
                    </dl>
                  </Link> 
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}
