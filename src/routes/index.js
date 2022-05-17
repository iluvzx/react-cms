import { Navigate, useRoutes } from "react-router-dom"
// 引入路由对应的组件
import Login from "@/pages/Login"
import MyLayout from "@/pages/Layout"
import Home from "@/pages/Home"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import { AuthComponent } from "@/components/AuthComponent"




// 配置Routes
// eslint-disable-next-line
export default () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/layout'} replace />
    },
    {
      path: '/layout',
      element: <Navigate to={'home'} />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/layout',
      element: <AuthComponent><MyLayout /></AuthComponent>,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'article',
          element: <Article />
        },
        {
          path: 'publish',
          element: <Publish />
        }
      ]
    }
  ])
  return element
}