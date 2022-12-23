import { useState } from 'react'
import { AddButton } from '../../components/AddButton'
import { ItemList } from './item-list'
import { ItemsSummary } from './Items-summary'
import { SideBar } from './side-bar'
import { TimeRangePicker } from './time-range-picker'
import { TopNav } from './top-nav'

export const ItemsPage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const hClickMenu = () => {
    setVisible(true)
  }
  const hClickMask = () => {
    setVisible(false)
  }
  return (
    <div>
      <TopNav onClick={hClickMenu}/>
      <TimeRangePicker />
      <ItemsSummary />
      <ItemList />
      <AddButton />
      {/* {
        visible && <SideBar onClickMask={hClickMask}/>
      } */}
      <SideBar visible={visible} onClickMask={hClickMask}/>
    </div>
  )
}
