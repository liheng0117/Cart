import React, { Component } from "react";
import Logintit from '@@/Logintit'
import "./style.less";

export default class index extends Component {
  render() {
    return (
      <div className="login">
        <Logintit  title="登录" url="/home"/>
        <section>
          
        </section>
      </div>
    )
  }
}
