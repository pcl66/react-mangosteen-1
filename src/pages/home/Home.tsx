import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import p from '../../asset/存钱罐.svg'
import { AddButton } from '../../components/AddButton'

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-box {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .start-button {
    background-color: #5c33be;
    width: 95%;
    text-align: center;
    color: wheat;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
  }
  /* .add-button {
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: #5c33be;
    color: wheat;
    font-size: 32px;
    text-align: center;
    line-height: 43px;
  } */
`

export const Home: React.FC = () => {
  const nav = useNavigate()
  const hClick = () => {
    nav('/items')
  }
  return (
    <HomeStyled>
      <div className='img-box'>
        <img src={p} alt="" />
      </div>
      <div className='start-button' onClick={hClick}>开始记账</div>
      <AddButton />
    </HomeStyled>
  )
}
