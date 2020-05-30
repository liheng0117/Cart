import React, { Component } from 'react'
import { Form, Input, Button, Switch } from 'antd'
import api from '@/services/api'
import { post } from '@/utils/request'
import Logintit from '@@/Logintit'

import './style.less'

export default
@Form.create()
class index extends Component {
  state = {
    inpType: true,
    islog: this.props.islogin,
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      post(api.login, values).then((res) => {
        if (res.data.code === 200) {
          this.props.history.push('/reg')
        }
      })
    })
  }
  changeClick = () => {
    let newstate = !this.state.inpType
    this.setState({
      inpType: newstate,
    })
  }
  goReg = () => {
    this.props.history.push('/reg')
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { inpType } = this.state
    return (
      <div className="login">
        <Logintit title="会员登录" url="/home" />
        <section>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('cellphone')(<Input placeholder="手机号" />)}
            </Form.Item>
            <div id="pawd">
              <Form.Item className="pawdLeft">
                {getFieldDecorator('password')(
                  <Input
                    type={inpType ? 'password' : 'input'}
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <p className="pwdRight">
                <Switch
                  defaultChecked={false}
                  onClick={() => this.changeClick()}
                  className="pawdReft"
                />
              </p>
            </div>
            <Form.Item>
              <Button
                type="danger"
                htmlType="submit"
                className="login-form-button"
                id="dologin"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
          <div className="foot">
            <p>忘记密码</p>
            <p onClick={() => this.goReg()}>快速注册</p>
          </div>
        </section>
      </div>
    )
  }
}
