import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import p from '../../asset/图表.svg'

const Welcome3Styled = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    height: 100%;
    width: 90%;
    border-radius: 8px;
    display: flex;
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
export const Welcome3: React.FC = () => {
  const nav = useNavigate()
  return (
    <Welcome3Styled>
      <div className='wrapper'>
        <img src={p} alt='' />
        <div className='title'>
          数据可视化
          <br /> 收支一目了然
        </div>
        <NavLink onTouchStart={() => { nav('/welcome/4') }} to={'/welcome/4'}>下一页</NavLink>
      </div>
    </Welcome3Styled>
  )
}
