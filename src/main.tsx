import React from 'react'
import ReactDOM from 'react-dom/client'
import { unstable_HistoryRouter as Router, RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './index.css'
import App from './App'

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)

root.render(<RouterProvider router={router} />)
// root.render(<Router router={router} />)
// root.render(<App/>)
