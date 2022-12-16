import { createBrowserRouter } from 'react-router-dom'
// import { RedirectToWelcome } from '../components/RedirectToWelcome'
import { MainLayout } from '../Layout/main-layout'
import { WelcomeLayout } from '../Layout/welcome-layout'
import { Home } from '../pages/home/Home'
import { ItemsPage } from '../pages/items-page/items-page'
import { welcomeRoutes } from './welcome-routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // 404
    // errorElement: <RedirectToWelcome />,
    children: [
      {
        path: 'welcome',
        element: <WelcomeLayout />,
        children: welcomeRoutes,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'items',
        element: <ItemsPage />,
      },
    ],
  },
])
