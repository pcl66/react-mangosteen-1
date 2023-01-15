import { useState } from 'react'
import { Popup } from '../../../components/Popup'

export const Playground: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => setVisible(true)}>下方弹出</button>
      <Popup visible={visible} onMaskClick={() => { setVisible(last => !last) }}>
        <div>弹窗内容</div>
      </Popup>
    </div>
  )
}
