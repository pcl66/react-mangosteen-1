import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const DateSelectStyled = styled.div`
  height: 50vh;
  overflow: hidden;
  .date-select-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button {
      /* width: 50px; */
      height: 50px;
      padding: 15px;
      white-space: nowrap;
    }
    .confirm {
      color: blue;
    }
  }
  .date-select-ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    li {
      height: 25px;
    }
  }
`

export const DateSelect: React.FC = () => {
  const ulRef = useRef<HTMLUListElement | null>(null)
  const [translateY, setTranslateY] = useState<number>(0)
  const [lastY, setLastY] = useState<number>(0)
  const [isTouching, setIsTouching] = useState<boolean>(true)
  const lastYRef = useRef<number>(0)
  const isTouchingRef = useRef<boolean>(false)
  const translateYRef = useRef<number>(0)
  useEffect(() => {
    ulRef.current?.addEventListener('touchstart', (e: TouchEvent) => {
      isTouchingRef.current = true
      console.log(isTouchingRef.current)
      lastYRef.current = e.touches[0].clientY
    })
    ulRef.current?.addEventListener('touchmove', (e: TouchEvent) => {
      // console.log(e.touches[0].clientY)
      console.log(isTouchingRef.current)
      if (!isTouchingRef.current)
        return
      // console.log('translateY', translateY)
      console.log('lastY', lastYRef.current)
      translateYRef.current = translateYRef.current + e.touches[0].clientY - lastYRef.current
      // setTranslateY((last) => {
      //   console.log('lastTransY', last)
      //   return (last + e.touches[0].clientY - lastYRef.current)
      // })
      setTranslateY(translateYRef.current)
      lastYRef.current = e.touches[0].clientY
    })
    ulRef.current?.addEventListener('touchend', () => {
      console.log(isTouchingRef.current)
      isTouchingRef.current = false
    })
  }, [])
  return (
    <DateSelectStyled>
      <div className='date-select-toolbar'>
        <div className='cancel button'>取消</div>
        <span className='title'>选择日期</span>
        <div className='confirm button'>确认</div>
      </div>
      <ul
        ref={ulRef}
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
        style={{ transform: `translateY(${translateY}px)` }}>
        <li>2012</li>
        <li>2013</li>
        <li>2014</li>
        <li>2015</li>
        <li>2016</li>
        <li>2017</li>
        <li>2012</li>
        <li>2013</li>
        <li>2014</li>
        <li>2015</li>
        <li>2016</li>
        <li>2017</li>
        <li>2012</li>
        <li>2013</li>
        <li>2014</li>
        <li>2015</li>
        <li>2016</li>
        <li>2017</li>
      </ul>
    </DateSelectStyled>
  )
}
