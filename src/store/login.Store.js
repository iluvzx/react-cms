import { makeAutoObservable } from 'mobx'
import { getToken, http, removeToken, setToken } from '@/utils'

// 登录module层
class LoginStore {
  // 页面初始化存入token，如果本地有token，就使用本地的，反之
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }

  // 发送登录请求
  getTokenRequest = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile, code
    })
    // token存入示例对象 
    this.token = res.data.token
    // 存入localStorage
    setToken(this.token)
  }

  // 退出登录
  loginOut = () => {
    // 删除实例对象token
    this.token = ''
    // 删除本地token
    removeToken()
  }

}

export default LoginStore