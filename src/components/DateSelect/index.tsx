import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Col } from './Col'
import * as dayjs from 'dayjs'

const DateSelectStyled = styled.div`
  .date-select-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    background-color: #fff;
    .button {
      /* width: 50px; */
      height: 50px;
      padding: 15px;
      white-space: nowrap;
    }
    .confirm {
      color: blue;
    }
  }
  .date-select-content {
    display: flex;
    height: 50vh;
  }
`
interface P {
  date: Date,
  onCancel: () => void,
  onConfirm: (val: Date) => void,
  trigger: number
}
export const DateSelect: React.FC<P> = (p) => {
  const { date, onCancel, onConfirm, trigger } = p
  const [year, setYear] = useState<number>(date.getFullYear())
  const [month, setMonth] = useState<number>(date.getMonth() + 1)
  const [day, setDay] = useState<number>(date.getDate())
  const hClickCancel = () => {
    onCancel()
  }
  const hClickConfirm = () => {
    // onConfirm(`${year}-${month}-${day}`)
    onConfirm(new Date(`${year}-${month}-${day}`))
  }
  useEffect(() => {
    console.log('xx',date)
    setYear(date.getFullYear())
    setMonth(date.getMonth() + 1)
    console.log('yy', date.getDate())
    setDay(date.getDate())
  }, [trigger])
  return (
    <DateSelectStyled>
      <div className='date-select-toolbar'>
        <div className='cancel button' onClick={hClickCancel}>取消</div>
        <span className='title'>选择日期</span>
        <div className='confirm button' onClick={hClickConfirm}>确认</div>
      </div>
      <div className='date-select-content'>
        <Col items={Array.from({length: 20}).map((_,i)=> 2010 + i)} value={year} onChange={setYear}/>
        <Col items={Array.from({length: 12}).map((_,i) => 1 + i)} value={month} onChange={setMonth}/>
        <Col items={Array.from({length: 30}).map((_,i) => 1 + i) } value={day} onChange={setDay}/>
      </div>
    </DateSelectStyled>
  )
}
