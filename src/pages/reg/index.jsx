import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form, Input, Button, Switch} from 'antd';
import { getCode, isReg, hashCode } from '@/actions/reg'
import Logintit from '@@/Logintit'
import MesgCode from '@@/MesgCode'
import "./style.less";

export default @connect( state => {
  return {
    imgSrc:state.reg.imgSrc,
    hashCode:state.reg.hashCode,
  }
},{
  getCode,
  isReg,
  hashCode,
} )

@Form.create()
class index extends Component {
  state={
    inpType:true,
    isVal:false,//判断输入的手机号是否符合条件
  }
  componentDidMount() {
    this.props.getCode()
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      let obj = {}
      obj.cellphone = values.cellphone
      obj.password = values.password
      this.props.isReg(obj)
    });
  }
  onCode = (e) => {
    let obj = {}
    obj.vcode = e.target.value
    this.props.hashCode(obj)
  }
  changeClick = () => {
    let newstate = !this.state.inpType
    this.setState({
      inpType : newstate
    })
  }
  onChange = (e) => {
    var valtest = /\d{11}/
    valtest.test(e.target.value) ?
    this.setState({
      isVal:true,
    }) :
    this.setState({
      isVal:false,
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { inpType, isVal } = this.state
    const { imgSrc, getCode} = this.props
    return (
      <div className="login">
        <Logintit  title="会员注册" url="/login"/>
        <section>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className='code'>
                <Form.Item className="code_left">
                  {getFieldDecorator('masg')(
                    <Input
                      type='input' 
                      placeholder="验证码"
                      onChange={(e) => this.onCode(e)}
                    />,
                  )}
                </Form.Item>
              <p className='code_right' onClick={getCode}>
                  <img src={imgSrc} alt=""/>
              </p>
            </div>
            <div className='mesg'>
              <Form.Item className="mesg_left">
                {getFieldDecorator('cellphone')(
                  <Input
                    type='input'
                    placeholder="请输入手机号"
                    onChange={ (e) => this.onChange(e) }
                  />,
                  )}
              </Form.Item>
              <div className="mesg_right">
                <MesgCode isVal={isVal}/>
              </div>
            </div>
            <Form.Item>
                {getFieldDecorator('mesgCode')(
                  <Input
                    type='input'
                    placeholder="输入短信验证码"
                  />,
                  )}
              </Form.Item>

            <div className='pwd'>
              <Form.Item className="pwd_left">
                {getFieldDecorator('password',{
                  rules: [{ required: true, message: '最少6位密码',min: 6}],
                })(
                  <Input
                    type={ inpType ? 'password' : 'input' }
                    placeholder="请输入密码"
                  />,
                  )}
              </Form.Item>
            
              
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
