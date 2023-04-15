import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SideBarStyled = styled.div`
display: flex;
.mask {
  position: fixed;
  right: 0;
  top: 0;
  background-color: #a9a3a399;
  width: calc(100vw - 200px);
  width: 100vh;
  height: 100vh;
  /* opacity: 0; */
  /* transition: all .4s; */
  z-index: 256;
}
.left-content {
  position: fixed;
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: -200px;
  top: 0;
  transition: all .4s;
  background-color: #fff;
  z-index: 512;
  .top-bar {
    height: 150px;
    background-color: #5c33be;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: wheat;
  }
  .item {
    padding: 10px;
  }
  }
  .left-visible {
    left: 0;
    top: 0;
  }
  
`
interface P {
  onClickMask?: () => void
  visible: boolean
}

export const SideBar: React.FC<P> = (p) => {
  const navigate = useNavigate()
  const [maskVisible, setMaskVisible] = useState<boolean>(false)
  const props = useSpring({
    opacity: p.visible ? '1' : '0',
    /** 动画开始时的回调 */
    onStart({value}) {
      console.log('动画开始', value)
      if(value.opacity < 0.1) {
        setMaskVisible(true)
      }
    },
    /** 动画结束时的回调 */
    onRest({value}) {
      console.log(value, 'value')
      if(value.opacity < 0.1) {
        setMaskVisible(false)
      }
    }
  })
  return (
    <SideBarStyled>
      <animated.div style={{...props, display: maskVisible ? 'block' : 'none'}}  className='mask' onClick={p.onClickMask}>
        {/* <div className={`mask ${p.visible ? 'mask-visible' : ''}`} onClick={p.onClickMask}></div> */}
      </animated.div>
      
      <div className={`left-content ${p.visible ? 'left-visible' : ''}`}>
        <div className='top-bar' onClick={() => { navigate('/login') }}>
          <div className='title'>未登录用户</div>
          <div className='sub-title'>点击这里登录</div>
        </div>
        <div className='menu'>
          <div className='item'>统计图表</div>
          <div className='item'>导出数据</div>
          <div className='item'>自定义分类</div>
          <div className='item'>记账提醒</div>
        </div>

      </div>
    </SideBarStyled>
  )
}
