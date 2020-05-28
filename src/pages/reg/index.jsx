import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form, Input, Button, Switch} from 'antd';
import { isLogin } from '@/actions/login'
import Logintit from '@@/Logintit'
import "./style.less";

export default @connect( state => {
  return {
    islogin:state.login.islogin
  }
},{
  isLogin,
} )

@Form.create()
class index extends Component {
  state={
    inpType:true,
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      let obj={}
      obj['cellphone'] = values.username
      obj['password'] = values.pwd
      this.props.isLogin(obj)
      if (this.props.islogin) {
        this.props.history.push('/reg')
      }
    });
  };
  changeClick = () => {
    let newstate = !this.state.inpType
    this.setState({
      inpType : newstate
    })
  }
  goReg = () => {
    this.props.history.push('/reg')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { inpType } = this.state
    return (
      <div className="login">
        <Logintit  title="会员注册" url="/login"/>
        <section>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className='code'>
              <p className="code_left">
                <Form.Item>
                  {getFieldDecorator('masg')(
                    <Input
                      type='input' 
                      placeholder="验证码"
                    />,
                  )}
                </Form.Item>
              </p>
              <p className='code_right'>
                  <img src="" alt=""/>
              </p>
            </div>
            <div className='mesg'>
              <p className="mesg_left">
              <Form.Item >
                {getFieldDecorator('cellphone')(
                  <Input
                    type='input'
                    placeholder="请输入手机号"
                  />,
                  )}
              </Form.Item>
              </p>
              <p className="mesg_right">
                获取短信验证码
              </p>
            </div>
            

            <div className='pwd'>
              <p className="pwd_left">
              <Form.Item >
                {getFieldDecorator('pwd')(
                  <Input
                    type={ inpType ? 'password' : 'input' }
                    placeholder="请输入密码"
                  />,
                  )}
              </Form.Item>
              </p>
              
              <p className="pwd_right">
                <Switch defaultChecked={false} 
                onClick={ () => this.changeClick()} 
                className='pawdReft'/>
              </p>
            </div>
            <Form.Item>
              <Button 
                type="danger" 
                htmlType="submit" 
                className="login-form-button butt" 
                id="dologin">
                  注册
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
