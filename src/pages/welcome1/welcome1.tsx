import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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
  const Welcome1StyledRef = useRef<HTMLDivElement | null>(null)
  const nav = useNavigate()
  return (
    <Welcome1Styled ref={Welcome1StyledRef}>
      <div className='wrapper'>
        <img src={p} alt='' />
        <div className='title'>
          会挣钱
          <br /> 还要会省钱
        </div>
        <NavLink onTouchStart={() => { nav('/welcome/2') }} to={'/welcome/2'}>下一页</NavLink>
      </div>
    </Welcome1Styled>
  )
}
