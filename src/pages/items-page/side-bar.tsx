import styled from 'styled-components'

const SideBarStyled = styled.div`
display: flex;
.mask {
  position: fixed;
  right: calc( -1 * (100vw - 200px));
  top: 0;
  background-color: #a9a3a399;
  width: calc(100vw - 200px);
  height: 100vh;
  transition: all .4s;
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
  .mask-visible {
    right: 0;
  }
  
`
interface P {
  onClickMask?: () => void
  visible: boolean
}

export const SideBar: React.FC<P> = (p) => {
  return (
    <SideBarStyled>
      <div className={`mask ${p.visible ? 'mask-visible' : ''}`} onClick={p.onClickMask}></div>
      <div className={`left-content ${p.visible ? 'left-visible' : ''}`}>
        <div className='top-bar'>
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
