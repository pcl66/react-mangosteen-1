import { useState } from 'react'

export const useUpdate = () => {
  const [, setNum] = useState(Date.now())
  const update = () => {
    setNum(Date.now())
  }
  return update
}
