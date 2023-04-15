import { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome } from '../components/RedirectToWelcome'
// import { RedirectToWelcome } from '../components/RedirectToWelcome'
import { MainLayout } from '../Layout/main-layout'
import { WelcomeLayout } from '../Layout/welcome-layout'
import { ChargeUp } from '../pages/charge-up'
import { Playground } from '../pages/charge-up/playground'
import { Home } from '../pages/home/Home'
import { ItemsNew } from '../pages/items-new'
import { ItemsPage } from '../pages/items-page/items-page'
import Login from '../pages/login/Login'
import { welcomeRoutes } from './welcome-routes'

export const router = createBrowserRouter([
  // path: '/',
  // element: <MainLayout />,
  // 404
  // errorElement: <RedirectToWelcome />,
  {
    path: '/',
    element: <RedirectToWelcome />,
  },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children: welcomeRoutes,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/items',
    element: <ItemsPage />,
  },
  {
    path: '/items/new',
    element: <ItemsNew />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/charge-up',
    element: <ChargeUp />,
  },
  {
    path: '/playground',
    element: <Playground />,
  },
])

// 老师写法
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     // 404
//     // errorElement: <RedirectToWelcome />,
//     children: [
//       {
//         path: '/welcome',
//         element: <WelcomeLayout />,
//         children: welcomeRoutes,
//       },
//       {
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         path: '/items',
//         element: <ItemsPage />,
//       },
//     ],
//   },
// ])
