import React, { Component } from 'react'
import { getdetail } from '@/actions/shop'
import { connect } from 'react-redux'
import './style.less'

export default
@connect(
  (state) => {
    return {
      detail: state.shop,
    }
  },
  {
    getdetail,
  }
)
class index extends Component {
  componentDidMount() {
    var gid = this.props.match.params.gid
    this.props.getdetail(gid)
  }
  render() {
    const { bodys } = this.props.detail
    return (
      <section>
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: bodys }}
            style={{ padding: '0 0.2rem', fontSize: '0.3rem' }}
          ></p>
        </div>
      </section>
    )
  }
}
