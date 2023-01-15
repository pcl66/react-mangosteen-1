import { useState } from 'react'
import styled from 'styled-components'
import { Tabs } from '../../components/Tabs'

const TimeRangePickerStyled = styled.div`
  width: 80%;
`
const config = [
  {
    id: 0,
    title: '本月',
    element: <div></div>,
  },
  {
    id: 1,
    title: '上个月',
    element: <div></div>,
  },
  {
    id: 2,
    title: '今年',
    element: <div></div>,
  },
  {
    id: 3,
    title: '自定义时间',
    element: <div></div>,
  },
]

export const TimeRangePicker: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  return (
    <TimeRangePickerStyled>
        <Tabs items={config} current={current} onChange={setCurrent}/>
    </TimeRangePickerStyled>
  )
}
