import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Tabs } from '../../components/Tabs'
import { TopBar } from '../../components/TopBar/TopBar'
import { Calculate } from './calculate'
import { IconSelect } from './icon-select'

const ChargeUpStyled = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5635b7;
    color: #fff;
  }
`

export const ChargeUp = () => {
  const [current, setCurrent] = useState(0)
  return (
    <ChargeUpStyled>
      <TopBar title='记一笔' />
      <Tabs
        items={[
          {
            id: 0,
            title: '支出',
            element: (
              <>
                <IconSelect />
                <Calculate />
              </>
            ),
          },
          { id: 1, title: '收入', element: <div>收入</div> },
        ]}
        current={current}
        onChange={setCurrent}
        className='center'
      />
      {/* <IconSelect />
      <Calculate /> */}
    </ChargeUpStyled>
  )
}
