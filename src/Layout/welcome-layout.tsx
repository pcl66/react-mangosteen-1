import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './img/山竹.svg'

const WelcomeLayoutStyled = styled.div`
  background-color: #6336c2;
  height: 100vh;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    .title {
      margin-top: 10px;
      font-size: 32px;
      color: wheat;
    }
    .top-skip {
      width: 100%;
      height: 100px;
      position: relative;
      .skip {
        position: absolute;
        padding: 16px;
        font-size: 32px;
        color: wheat;
        right: 0;
        top: 0;
      }
    }
  }
  .content {
    position: relative;
    height: 70%;
    padding: 20px 10px 50px 10px;
    .animated {
      left: 0;
      top: 20px;
    }
  }
`

export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const pathMap = useRef<Record<string, ReactNode>>({})
  pathMap.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: `${location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)'}` },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: {
      duration: 800,
    },
  })
  return (
    <WelcomeLayoutStyled>
      <div className='header'>
        <div className='top-skip'>
          <span className='skip'>跳过</span>
        </div>
        <img src={Logo} alt='' />
        <div className='title'>山竹记账</div>
      </div>
      <div className='content'>
        {transitions(({ ...style }, pathname) => {
          return (
            <animated.div className='animated' key={pathname} style={{ ...style, width: '100%', height: '400px', position: 'absolute' }}>
                {/* <Outlet /> */}
                {pathMap.current[pathname]}
            </animated.div>
          )
        })}
      </div>
    </WelcomeLayoutStyled>
  )
}
