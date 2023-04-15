import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import FormItem from 'antd/es/form/FormItem'
import { useState } from 'react'
import styled from 'styled-components'
import { TopBar } from '../../components/TopBar/TopBar'

const ItemsNewStyled = styled.div`
  .form-main {
    padding: 10px;
    .content {
      border: 1px solid red;
      .sign-bar {
        white-space: nowrap;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          display: none; 
        }
        span {
          padding: 5px;
        }
      }
    }
  }
`

export const ItemsNew: React.FC = () => {
  const [form] = useForm()
  const [sign, setSign] = useState('123')
  const hClick = () => {
    form.setFieldsValue({ sign: '222' })
    setSign('222')
  }
  return (
    <ItemsNewStyled>
      <TopBar title='新建标签' />
      <div className='form-main'>
        <Form
          form={form}
          onFinish={value => {
            console.log(value)
          }}>
          <Form.Item label='标签名' name='name'>
            <Input />
          </Form.Item>
          <Form.Item label='符号' name='sign'>
            <div>
              <span>{sign}</span>
              <div className='content'>
                <div className='sign-bar'>
                  <span>表情</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                  <span>手势</span>
                </div>
                <div>
                  <span onClick={hClick}>123</span>
                  <span>112</span>
                  <span>112</span>
                  <span>112</span>
                  <span>112</span>
                  <span>112</span>
                  <span>112</span>
                </div>
              </div>
            </div>
          </Form.Item>
          <p style={{ textAlign: 'center' }}>记账时长按标签，即可进行编辑</p>
          <Form.Item>
            <Button htmlType='submit'>确认</Button>
          </Form.Item>
        </Form>
      </div>
    </ItemsNewStyled>
  )
}
