import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

// 1.判断token是否存在
// 2.如果存在，直接正常渲染后台页面
// 3.如果不存在，路由重定向到登录页面


// 高阶组件：接收一个组件作为参数，返回一个新的组件

const AuthComponent = ({ children }) => {
  // 判断token是否存在
  const token = getToken()
  return !token ? <Navigate to={'/login'} replace /> : <>{children}</>
}


// const AuthLogin = ({ children }) => {
//   const token = getToken()
//   return token ? <Navigate to={'/login'} replace /> : <>{children}</>
// }

export {
  AuthComponent,
}

// 1.使用高阶组件将需要鉴权的组件包裹
// 例如：<AuthComponent><Layout /></AuthComponent>
// 2.Layout组件会被当做AuthComponent的children传入
// 3.然后进行判断，获取token,如果token存在，直接渲染children下面的组件<Layout />
// 4.如果不存在，则强制跳转到登录界面