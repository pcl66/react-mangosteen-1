import styled from 'styled-components'
import airline from '../../asset/airline.svg'

const ItemListStyled = styled.div`
  .item {
    display: flex;
    justify-content: space-between;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      display: inline-block;
      left: 20px;
      width: 50px;
      height: 50px;
      background-image: url(${airline});
    }
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
  }
  .money {
    margin-right: 20px;
    line-height: 50px;
    color: green;
  }
`

export const ItemList: React.FC = () => {
  return (
    <ItemListStyled>
      <div className="item">
        <div className="content">
          <div className="title">旅行</div>
          <div className="time">2020-12</div>
        </div>
        <div className="money">¥2000</div>
      </div>
    </ItemListStyled>
  )
}
