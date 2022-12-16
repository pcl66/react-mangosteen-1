import styled from 'styled-components'

const AddButtonStyled = styled.div`
  .add-button {
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
  }
`

export const AddButton: React.FC = () => {
  return (
    <AddButtonStyled>
      <div className='add-button'>+</div>
    </AddButtonStyled>
  )
}
