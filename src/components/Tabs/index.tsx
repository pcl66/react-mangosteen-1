import styled from 'styled-components'

const TabsStyled = styled.div`
  display: flex;
  .item {
    padding: 8px;
    border-bottom: 3px solid transparent;
    transition: all .5s;
    flex: 1;
    text-align: center;
    white-space: nowrap;
  }
  .active {
    border-bottom: 3px solid #c3b1f9;
  }
`

interface P {
  items: {
    id: number
    title: string
    element: React.ReactNode
  }[]
  current: number
  onChange: (id: number) => void
  className?: string
}

export const Tabs: React.FC<P> = (p) => {
  const { current, items, className, onChange } = p
  return (
    <>
    <TabsStyled className={className}>
        {
          items.map((v) => {
            return (
              <div key={v.id} onClick={() => { onChange(v.id) }} className={`item ${current === v.id ? 'active' : ''}`}>
                {v.title}
              </div>
            )
          })
        }
    </TabsStyled>
    {items[current].element}
    </>
  )
}
