import { useEffect, useRef, useState } from 'react'

export const useSwipe = (elRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const x = useRef(0)

  const onStart = (e: TouchEvent) => {
    e.preventDefault()
    // e.stopPropagation()
    x.current = e.touches[0].clientX
    // console.log('x', x.current)
  }
  const onMove = (e: TouchEvent) => {
    const newX = e.touches[0].clientX
    // console.log('newX', newX)
    if (x.current - newX < 3 || x.current - newX < -3) {
      setDirection('')
    }
    else if (x.current - newX >= 3) {
      setDirection('left')
    }
    else {
      setDirection('right')
    }
  }
  const onEnd = () => {
    setDirection('')
  }

  useEffect(() => {
    if (!elRef.current)
      return
    elRef.current.addEventListener('touchstart', onStart)
    elRef.current.addEventListener('touchmove', onMove)
    elRef.current.addEventListener('touchend', onEnd)
    return () => {
      if (!elRef.current)
        return
      elRef.current.removeEventListener('touchstart', onStart)
      elRef.current.removeEventListener('touchmove', onMove)
      elRef.current.removeEventListener('touchend', onEnd)
    }
  }, [])
  return [direction]
}
