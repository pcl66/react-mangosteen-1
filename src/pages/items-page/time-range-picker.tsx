import { useState } from 'react'
import styled from 'styled-components'

const TimeRangePickerStyled = styled.div`
  display: flex;
  .item {
    padding: 8px;
    border-bottom: 3px solid transparent;
    transition: all .5s;
  }
  .active {
    border-bottom: 2px solid black;
  }
`
const config = [
  {
    id: 0,
    title: '本月',
  },
  {
    id: 1,
    title: '上个月',
  },
  {
    id: 2,
    title: '今年',
  },
  {
    id: 3,
    title: '自定义时间',
  },
]

export const TimeRangePicker: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const hClick = (id: number) => {
    setCurrent(id)
  }
  return (
    <TimeRangePickerStyled>
        {
          config.map((v) => {
            return (
              <div key={v.id} onClick={() => { hClick(v.id) }} className={`item ${current === v.id ? 'active' : ''}`}>
                {v.title}
              </div>
            )
          })
        }
    </TimeRangePickerStyled>
  )
}
