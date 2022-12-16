import { AddButton } from '../../components/AddButton'
import { ItemList } from './item-list'
import { ItemsSummary } from './Items-summary'
import { TimeRangePicker } from './time-range-picker'
import { TopNav } from './top-nav'

export const ItemsPage: React.FC = () => {
  return (
    <div>
      <TopNav />
      <TimeRangePicker />
      <ItemsSummary />
      <ItemList />
      <AddButton />
    </div>
  )
}
