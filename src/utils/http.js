import axios from "axios";
import { getToken } from "@/utils";

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
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
  return Promise.reject(err)
})

export default http