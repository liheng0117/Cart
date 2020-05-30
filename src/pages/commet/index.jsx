import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getcommet } from '@/actions/commet'
import './style.less'

export default
@connect(
  (state) => {
    return {
      commet: state.commet,
    }
  },
  {
    getcommet,
  }
)
class index extends Component {
  componentDidMount() {
    var gid = this.props.match.params.gid
    this.props.getcommet(gid)
  }
  render() {
    const { commet } = this.props
    return (
      <section>
        <div className="commet-made">
          <div className="commet-head">
            商品评价({commet instanceof Array ? commet.length : 0})
          </div>
          <div className="commet_detail">
            {commet instanceof Array
              ? commet.map((v, i) => {
                  return (
                    <div key={i} className="commet-cmmit">
                      <div className="commet-Top">
                        <p className="commet-img">
                          <img src={v.head} alt="" />
                        </p>
                        {v.nickname}
                      </div>
                      <div className="commet-content">{v.content}</div>
                      <div>{v.times}</div>
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </section>
    )
  }
}
