import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import p from '../../asset/闹钟.svg'

const Welcome2Styled = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    height: 100%;
    width: 90%;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    .title {
      text-align: center;
      font-size: 32px;
    }
  }
`
export const Welcome2: React.FC = () => {
  return (
    <Welcome2Styled>
      <div className='wrapper'>
        <img src={p} alt='' />
        <div className='title'>
          每日提醒
          <br /> 不会遗漏每一笔账单
        </div>
        <NavLink to={'/welcome/3'}>下一页</NavLink>
      </div>
    </Welcome2Styled>
  )
}
