import React, { Component } from 'react'
import HomeHead from '@@/HomeHead'
import './style.less';

export default class Home extends Component {
  state = {
    headClassName: 'comp-homeheadon'
  }

  render() {
    const { headClassName } = this.state;
    return (
      <div className="pages-home">
        <HomeHead headClassName={headClassName} />
        <div className="home-mainbox">
        </div>
      </div>
    )
  }
}
