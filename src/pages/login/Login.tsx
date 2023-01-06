import React from 'react'
import styled from 'styled-components'
import { TopBar } from '../../components/TopBar/TopBar'
import logo from '../../asset/山竹.svg'

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
    .email,.code {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 100%;
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
        align-items: center;
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
export class Login extends React.Component {
  render() {
    return (
      <LoginStyled>
        <TopBar title='登录' />
        <div className='main'>
          <div className='logo'>
            <img src={logo} alt='' />
            <div className='name'>山竹记账</div>
          </div>
          <div className='email'>
            <div className='input-title'>邮件地址</div>
            <input type='text' placeholder='请输入邮箱，然后点击发送验证码' />
          </div>
          <div className='code'>
            <div className='input-title'>验证码</div>
            <div className='input'>
              <input type='text' placeholder='六位数字' />
              <div className='code-button'>发送验证码</div>
            </div>
          </div>
          <div className='login'>登录</div>
        </div>
      </LoginStyled>
    )
  }
}
