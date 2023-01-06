import styled from 'styled-components'

const ItemSummaryStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  background-color: #262a41;
  border-radius: 8px;
  color: white;
  .item {
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
  }
  .income {
    color: red;
  }
  .outcome {
    color: green;
  }
`

const config = [
  {
    id: 0,
    title: '收入',
  },
  {
    id: 1,
    title: '支出',
  },
  {
    id: 2,
    title: '净收入',
  },
]
export const ItemsSummary: React.FC = () => {
  return (
    <ItemSummaryStyled>
      {config.map((v) => {
        return (
          <div className={`item ${v.id === 0 && 'income'} ${v.id === 1 && 'outcome'}`} key={v.id}>
            <div className='title'>{v.title}</div>
            <div className='value'>123</div>
          </div>
        )
      })}
    </ItemSummaryStyled>
  )
}
