import { useEffect, useState } from 'react'
import styled from 'styled-components'
import lunch from '../../asset/lunch.svg'
import plus from '../../asset/add.svg'

const IconSelected = styled.div<{ calculateHeight?: number }>`
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 101.5px - ${props => props.calculateHeight}px);
    overflow: auto;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .value {
        font-size: 12px;
      }
    }
    li {
      list-style: none;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      .img-warp {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid black;
      }
      .img-warp-active {
        border: 1px solid #5c33be;
      }
    }
  }
`
export const IconSelect = () => {
  const preCount = Math.floor(window.document.body.offsetWidth / 48)
  const count = preCount - ((100) % preCount) - 1
  const [calHeight, setCalHeight] = useState(0)
  useEffect(() => {
    const calculateHeight = document.getElementById('charge-up-calculate')!.offsetHeight
    setCalHeight(calculateHeight)
  }, [])
  return (
    <IconSelected calculateHeight={calHeight}>
      <div className='content'>
        <div className='item'>
          <li>
            <div className='img-warp img-warp-active'>
              <img src={plus} alt='' style={{ width: '22px' }} />
            </div>
          </li>
          <span>+</span>
        </div>
        {Array.from({ length: 100 }).map((v, index) => (
          <div className='item'key={index}>
            <li >
              <div className='img-warp img-warp-active'>
                <img src={lunch} alt='' style={{ width: '22px' }} />
              </div>
            </li>
            <span className='value'>吃饭</span>
          </div>
        ))}
        {Array.from({ length: count }).map((v, index) => (
          <li key={index}></li>
        ))}
      </div>
    </IconSelected>
  )
}
