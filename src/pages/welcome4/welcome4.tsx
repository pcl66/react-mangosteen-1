/* eslint-disable max-statements-per-line */
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import p from '../../asset/云.svg'
import { useLocalStore } from '../../store/useLocalStore'

const Welcome4Styled = styled.div`
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
export const Welcome4: React.FC = () => {
  const nav = useNavigate()
  const { setSkipped } = useLocalStore()
  return (
    <Welcome4Styled>
      <div className='wrapper'>
        <img src={p} alt='' />
        <div className='title'>
        云备份
          <br /> 再也不怕数据丢失
        </div>
        <NavLink onTouchStart={() => { nav('/home'); setSkipped(true) }} to={'/welcome/5'}>开启记账</NavLink>
      </div>
    </Welcome4Styled>
  )
}
