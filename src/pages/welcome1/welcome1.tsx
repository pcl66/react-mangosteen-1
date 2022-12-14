import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import p from '../../asset/存钱罐.svg'

const Welcome1Styled = styled.div`
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
export const Welcome1: React.FC = () => {
  return (
    <Welcome1Styled>
      <div className='wrapper'>
        <img src={p} alt='' />
        <div className='title'>
          会挣钱
          <br /> 还要会省钱
        </div>
        <NavLink to={'/welcome/2'}>下一页</NavLink>
      </div>
    </Welcome1Styled>
  )
}
