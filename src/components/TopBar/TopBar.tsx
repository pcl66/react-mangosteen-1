import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const TopBarStyled = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #fff;
  background-color: #5c33be;
  .back {
    margin: 0 20px 0 20px;
  }
  .title {
    font-size: 18px;
  }
`
interface P {
  title: string
}
export const TopBar: React.FC<P> = (p) => {
  const history = useNavigate()
  const onClickBack = () => {
    history(-1)
  }
  return (
    <TopBarStyled>
      <div className='back' onClick={onClickBack}>{'-<'}</div>
      <div className='title'>{p.title}</div>
    </TopBarStyled>
  )
}
