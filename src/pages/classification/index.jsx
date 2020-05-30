import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Input } from 'antd'
import { Switch, NavLink, Route, Redirect } from 'react-router-dom'
import { getList } from '@/actions/classcation'
import { Classgoods } from '@/router/assembly'
import './style.less'

export default
@connect(
  (state) => {
    return {
      listData: state.classcation.listData,
    }
  },
  {
    getList,
  }
)
class index extends Component {
  componentDidMount() {
    this.props.getList()
  }
  back = () => {
    this.props.history.push('/')
  }
  goSearch = () => {
    this.props.history.push('/search')
  }
  render() {
    const { listData } = this.props
    return (
      <div className="classaction">
        <div className="header">
          <div className="header_Left" onClick={this.back}>
            <Icon type="left" />
          </div>
          <div className="header_Center">
            <Input
              type="input"
              placeholder="请输入宝贝名称"
              onClick={this.goSearch}
            />
          </div>
          <div className="header_Right"></div>
        </div>
        <section>
          <div className="sec_left">
            {listData.map((v) => {
              return (
                <p key={v.cid}>
                  <NavLink to={`/classification/classgoods/${v.cid}`}>
                    {v.title}
                  </NavLink>{' '}
                </p>
              )
            })}
          </div>
          <div className="sec_right">
            <Switch>
              <Route
                path="/classification/classgoods/:cid"
                exact
                component={Classgoods}
              />
              <Redirect to="/classification/classgoods/492" />
            </Switch>
          </div>
        </section>
      </div>
    )
  }
}
