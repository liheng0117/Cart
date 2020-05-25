import React, { Component } from 'react';
import ComHead from '@@/ComHead'
import './style.less';

export default class Cart extends Component {
  render() {
    return (
      <div className="pages-cart">
        <ComHead title="购物车" />
        <div className="cart-main"></div>
      </div>
    )
  }
}
