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

interface P {
  onClick?: () => void
}

export const TopNav: React.FC<P> = (props) => {
  return (
    <TopNavStyled>
      <img className='menu' src={p} alt="" onClick={props.onClick}/>
      <div className='title'>山竹记账</div>
    </TopNavStyled>
  )
}
