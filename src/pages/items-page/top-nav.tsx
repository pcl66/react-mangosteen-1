import styled from 'styled-components'
import p from '../../asset/menu.svg'

const TopNavStyled = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  margin-top: 30px;
  .menu {
    width: 60px;
    padding: 10px;
  }
  .title {
    font-size: 28px;
  }
`

export const TopNav: React.FC = () => {
  return (
    <TopNavStyled>
      <img className='menu' src={p} alt="" />
      <div className='title'>山竹记账</div>
    </TopNavStyled>
  )
}
