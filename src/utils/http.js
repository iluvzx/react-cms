import axios from "axios";
import { getToken, history } from "@/utils";

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000,
})

// 请求拦截
http.interceptors.request.use(config => {
  // 从本地取出token
  const token = getToken()
  // token注入
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
http.interceptors.response.use(res => {
  return res.data
}, err => {
  // 处理token失效，token失效响应的状态码是401
  // 如果状态码为401，则跳转到登录页
  // 调用history中的push方法跳转路由
  if (err.response.status === 401) history.push('/login')
  return Promise.reject(err)
})

export default http