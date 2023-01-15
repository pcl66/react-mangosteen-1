import { useState } from 'react'
import styled from 'styled-components'
import { DateSelect } from '../../components/DateSelect'
import { Popup } from '../../components/Popup'
import * as dayjs from 'dayjs'

const CalculateStyled = styled.div`
  position: fixed;
  bottom: 0;
  /* height: 100px; */
  width: 100%;
  background-color: #ccc;
  .cal-top {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-top: 2px solid #ccc;
    padding: 0 10px;
    height: 40px;
    align-items: center;
    .cal-time {
      &::before {
        content: '日期';
        margin-right: 10px;

      }
    }
    .cal-balance {
      color: green;
      font-weight: bold;
    }
  }
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 50px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    border: 2px solid #ccc;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      transition: all 1.5s;
      &:active {
        background-color: #5635b7;
        transition: all .5s;
      }
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div5 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div6 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .div7 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div8 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .div9 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .div10 {
    grid-area: 4 / 1 / 5 / 3;
  }
  .div11 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .div12 {
    grid-area: 1 / 4 / 3 / 5;
  }
  .div13 {
    grid-area: 3 / 4 / 5 / 5;
  }
`
export const Calculate: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [date, setDate] = useState<Date>(new Date())
  const [trigger, setTrigger] = useState<number>(0)
  const hClickDate = () => {
    console.log('点击了日期')
    setVisible(last => !last)
    setTrigger((last) => last + 1)
  }
  const hClickMask = () => {
    console.log('点击了')
    setVisible(false)
  }
  const hCancel = () => {
    setVisible(false)
  }
  const hConfirm = (time: Date) => {
    setVisible(false)
    console.log(time)
    setDate(time)
  }
  return (
    <CalculateStyled id='charge-up-calculate'>
      <div className='cal-top'>
        <div className='cal-time' onClick={hClickDate}>{dayjs(date).format('YYYY-MM-DD')}</div>
        <div className='cal-balance'>1231423</div>
      </div>
      <div className='parent'>
        <div className='div1'>1</div>
        <div className='div2'>2</div>
        <div className='div3'>3</div>
        <div className='div4'>4</div>
        <div className='div5'>5</div>
        <div className='div6'>6</div>
        <div className='div7'>7</div>
        <div className='div8'>8</div>
        <div className='div9'>9</div>
        <div className='div10'>0</div>
        <div className='div11'>.</div>
        <div className='div12'>清除</div>
        <div className='div13'>确认</div>
      </div>
      <Popup visible={visible} onMaskClick={hClickMask} >
        <DateSelect trigger={trigger} date={date} onCancel={hCancel} onConfirm={hConfirm}/>
      </Popup>
    </CalculateStyled>
  )
}
