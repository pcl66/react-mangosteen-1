import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  console.log('main-layout')
  return (
  // <div>
      <Outlet />
  // </div>
  // <Navigate to={'/welcome/1'} />
  // <div>123</div>
  )
}
