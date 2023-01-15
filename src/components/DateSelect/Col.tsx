import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const ColStyled = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;
  .select-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid red; */
    background-color: #61575736;
    height: 26px;
    width: 100%;
  }
  .date-select-ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    li {
      height: 26px;
      line-height: 26px;
    }
  }
`
interface ColumnProps {
  items?: number[]
  value?: number
  onChange: (payload: number) => void
}
export const Col: React.FC<ColumnProps> = (p) => {
  const { items = Array.from({length: 10}).map((v,i) => 2000 + i), value = 2002, onChange } = p
  const touchPanelRef = useRef<HTMLDivElement | null>(null)
  const [translateY, setTranslateY] = useState<number>(-26*(items.indexOf(value)))
  // const [lastY, setLastY] = useState<number>(0)
  // const [isTouching, setIsTouching] = useState<boolean>(true)
  const lastYRef = useRef<number>(0)
  const isTouchingRef = useRef<boolean>(false)
  const translateYRef = useRef<number>(-26*(items.indexOf(value)))
  useEffect(() => {
    /** 绑定滑动开始事件 */
    touchPanelRef.current?.addEventListener('touchstart', (e: TouchEvent) => {
      console.log('touchstart')
      isTouchingRef.current = true
      lastYRef.current = e.touches[0].clientY
    })
    /** 绑定滑动时的事件 */
    touchPanelRef.current?.addEventListener('touchmove', (e: TouchEvent) => {
      console.log('touchmove')
      if (!isTouchingRef.current) return
      translateYRef.current = translateYRef.current + e.touches[0].clientY - lastYRef.current
      setTranslateY(translateYRef.current)
      lastYRef.current = e.touches[0].clientY
    })
    /** 绑定滑动完成时的事件 */
    touchPanelRef.current?.addEventListener('touchend', () => {
      if(translateYRef.current < 0) {
        if(Math.abs(translateYRef.current % 26) < 13) {
          translateYRef.current = translateYRef.current - (translateYRef.current % 26)
          setTranslateY(translateYRef.current)
        } else {
          translateYRef.current = translateYRef.current - (26 -Math.abs(translateYRef.current % 26))
          setTranslateY(translateYRef.current)
        }
      } else {

      }
      if(translateYRef.current > 0) {
        translateYRef.current = 0
        setTranslateY(0)
      }
      if(translateYRef.current < - (items.length - 1)  * 26) {
        translateYRef.current = -(items.length -1) * 26
        setTranslateY(translateYRef.current)
      }
      onChange(items[Math.abs(translateYRef.current) / 26])
      isTouchingRef.current = false
    })
  }, [])
  useEffect(() =>{
    // console.log('effect',translateYRef.current)
    setTranslateY(-26*(items.indexOf(value)))
  }, [value])
  return (
    <ColStyled ref={touchPanelRef}>
      <div className='select-box'>
        <ul
          // ref={ulRef}
          // onTouchStart={(e) => {
          //   setIsTouching(true)
          //   console.log(isTouching)
          //   setLastY(e.touches[0].clientY)
          // }}
          // onTouchMove={(e) => {
          //   // console.log(e.touches[0].clientY)
          //   console.log(isTouching)
          //   if (!isTouching)
          //     return
          //   setTranslateY(translateY + e.touches[0].clientY - lastY)
          //   setLastY(e.touches[0].clientY)
          // }}
          // onTouchEnd={() => {
          //   setIsTouching(false)
          // }}
          className='date-select-ul'
          style={{ transform: `translateY(${translateY}px)`, transition: isTouchingRef.current ? '' : 'all .25s' }}>
          {items.map((v,i) => (<li key={i}>{v}</li>))}
        </ul>
      </div>
      <div className='select-box'></div>
    </ColStyled>
  )
}
