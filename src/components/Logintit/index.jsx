import React, { Component } from "react";
import { Icon } from 'antd'
import {withRouter} from 'react-router-dom'
import "./style.less";

 class index extends Component {
  back  = () => {
    this.props.history.push(this.props.url)
  }
  render() {
    const { title} = this.props
    return (
      <div className="header">
        <div className="header_Left" onClick={ () => this.back()}>
        <Icon type="left"/>
        </div>
      <div className="header_Center">{title}</div>
        <div className="header_Right"></div>
      </div>
    )
  }
}
export default withRouter(index)
