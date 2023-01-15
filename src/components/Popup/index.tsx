import type { ReactNode } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'

const PopupStyled = styled.div`
position: absolute;
touch-action: none;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    background-color: #44404da8;
    z-index: 256;
  }
  .content {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 512;
  }
`
interface P {
  visible: boolean
  children: ReactNode
  onMaskClick?: () => void
}
export const Popup: React.FC<P> = (p) => {
  const { visible, children, onMaskClick } = p
  const [maskVisible, setMaskVisible] = useState<boolean>(visible)
  const contentStyle = useSpring({
    transform: visible ? 'translateY(0%)' : 'translateY(100%)',
  })
  const maskStyle = useSpring({
    opacity: visible ? 1 : 0,
    onStart({ value }) {
      if (value.opacity < 0.1) {
        setMaskVisible(true)
      }
    },
    onRest({ value }) {
      if (value.opacity < 0.1) {
        setMaskVisible(false)
      }
    },
  })
  const hClickMask = () => {
    onMaskClick?.()
  }
  return (
    <PopupStyled id='popup-mask'>
      <animated.div className={'mask'} style={{ ...maskStyle, display: maskVisible ? 'block' : 'none' }} onClick={hClickMask}>
        <animated.div className={'content'} style={{ ...contentStyle }} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
          {children}
        </animated.div>
      </animated.div>
    </PopupStyled>
  )
}
