import React from 'react'
import styled from 'styled-components'
import { Form, Input, message } from 'antd'
import type { FormInstance } from 'antd/es/form'
import { TopBar } from '../../components/TopBar/TopBar'
import logo from '../../asset/山竹.svg'
import { getCode, login } from '../../api/userInfo'
import type { RoutedProps } from '../../components/withRouter/index'
import { withRouter } from '../../components/withRouter/index'

const LoginStyled = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .name {
        font-size: 38px;
        line-height: 38px;
        font-family: 'SourceHanSansCN-Bold';
        font-weight: bold;
        margin-top: 5px;
        color: #5c33be;
      }
    }
    .email,
    .code {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 100%;
      .ant-form-item:where(.css-dev-only-do-not-override-k83k30).ant-form-item {
        margin-bottom: 0;
      }
      .input-title {
        font-size: 18px;
      }
      input {
        height: 48px;
        margin: 10px 0;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid black;
        &:focus-visible {
          outline: 0;
          border: 1px solid #5c33be;
        }
        &::placeholder {
          /* transform: translateX(10px); */
          color: gray;
        }
      }
    }
    .code {
      .input {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        .code-button {
          flex: 1;
          text-align: center;
          height: 46px;
          line-height: 48px;
          background-color: #5c33be;
          margin-left: 20px;
          border-radius: 8px;
          color: #fff;
        }
      }
    }
    .login {
      width: 100%;
      margin-top: 50px;
      text-align: center;
      background-color: #5c33be;
      color: #fff;
      height: 48px;
      line-height: 48px;
      border-radius: 8px;
    }
  }
`
class Login extends React.Component<{} & RoutedProps> {
  formRef = React.createRef<FormInstance>()
  onFinish = (values: any) => {
    console.log(values)
    login(values).then((res: any) => {
      console.log('res', res)
      localStorage.setItem('token', res.data.jwt)
      message.success('登录成功')
      this.props.navigate('/items')
    })
  }

  state: {
    countDown: number
  } = {
      countDown: 11,
    }

  timeRef: number | undefined = undefined
  render() {
    return (
      <LoginStyled>
        <TopBar title='登录' />
        <Form ref={this.formRef} onFinish={this.onFinish}>
          <div className='main'>
            <div className='logo'>
              <img src={logo} alt='' />
              <div className='name'>山竹记账</div>
            </div>
            <div className='email'>
              <div className='input-title'>邮件地址</div>
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: '请输入正确的邮箱', validateTrigger: 'onBlur' },
                ]}
                validateTrigger='onBlur'
                >
                <Input placeholder='请输入邮箱，然后点击发送验证码' />
              </Form.Item>
            </div>
            <div className='code'>
              <div className='input-title'>验证码</div>
              <div className='input'>
                <Form.Item name='code' rules={[
                  { required: true, message: '请输入验证码' },
                  { pattern: /^\d{6}$/, message: '请输入正确的验证码', validateTrigger: 'onBlur' },
                ]}
                validateTrigger = 'onBlur'
                >
                  <Input placeholder='请输入验证码' />
                </Form.Item>
                <div className='code-button' style={this.state.countDown === 11 ? {} : { backgroundColor: 'rgba(0, 0, 0, 0.04)', color: '#5c33be', cursor: 'not-allowed' }}>
                  {
                    this.state.countDown === 11
                      ? <div onClick={() => {
                        getCode({ email: this.formRef.current?.getFieldValue('email') }).then((res: any) => {
                          message.success('验证码发送成功')
                        })
                        if (this.state.countDown === 11) {
                          this.setState({ countDown: 10 })
                        }
                        this.timeRef = setInterval(() => {
                          if (this.state.countDown === 0) {
                            this.setState({ countDown: 11 })
                            clearInterval(this.timeRef)
                            return
                          }
                          this.setState((state: { countDown: number }) => {
                            return {
                              countDown: state.countDown - 1,
                            }
                          })
                        }, 1000)
                      }}>发送验证码</div>
                      : <div>{this.state.countDown}</div>
                  }
                </div>
              </div>
            </div>
            {/* <div className='login' onClick={() => { console.log(this.formRef.current?.getFieldsValue()) }}>登录</div> */}
            <button className='login' type='submit'>
              登录
            </button>
          </div>
        </Form>
      </LoginStyled>
    )
  }
}

export default withRouter(Login)
