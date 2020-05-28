import React, { Component } from "react"
import axios from "axios"
import api from "@/services/api"
import "./style.less"

export default class index extends Component {
  state = {
    img: [], //轮播图片
    bodys: "", //名称
  }
  componentDidMount() {
    axios.get(api.detatil).then((res) => {
      console.log(res, 222222)
      this.setState({
        img: res.data.data.images,
        bodys: res.data.data.bodys,
      })
    })
  }
  render() {
    const { bodys } = this.state
    return (
      <section>
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: bodys }}
            style={{ padding: "0 0.2rem", fontSize: "0.3rem" }}
          ></p>
        </div>
      </section>
    )
  }
}
