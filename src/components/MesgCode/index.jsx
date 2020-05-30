import React, { Component } from 'react'
import './style.less'

export default class index extends Component {
  state = {
    pHtml:"获取短信验证码",
    isVala:true,
    isdisable:false,
  }
  componentDidMount () {
   
  }
  getMsg = () => {
    this.setState({
      isVala:false,
      isdisable:true
    })
    const fn = this.intervalGetstate
    const able = this.diable
    var time = 10;
    var timer = null;
    timer = setInterval(function(){
      
      time--;   
      fn(time)
      if(time === 0) { 
        clearInterval(timer); 
        able()
      }
    },1000)
  }
  intervalGetstate = (num) => {
    if (num===0) {
      this.setState({
        pHtml:'获取短信验证码'
      }) 
    }else{
      this.setState({
        pHtml:'重新获取('+num+')'
      })
    }
  }
  diable = () => {
    this.setState({
      isVala:true,
      isdisable:false
    })
  }
  render() {
    const { pHtml, isVala, isdisable } = this.state
    const { isVal } = this.props
    return (
      <React.Fragment>
          <button 
            onClick={ isVal ? this.getMsg : () => {} }
            disabled={isdisable}
            className={ isVal === isVala ? 'tur_click' : '' }
            >
            {pHtml} 
          </button>
      </React.Fragment>
    )
  }
}
