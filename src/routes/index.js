import { useRoutes } from "react-router-dom"
// 引入路由对应的组件
import Login from "@/pages/Login"
import MyLayout from "@/pages/Layout"
import NotFound from "@/pages/NotFound"

// 引入高阶组件
import { AuthComponent } from "@/components/AuthComponent"

// 配置Routes
// eslint-disable-next-line
export default () => {
  const element = useRoutes([
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <AuthComponent><MyLayout /></AuthComponent>
    }
  ])
  return element
}