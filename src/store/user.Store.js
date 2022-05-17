import { http } from "@/utils"
const { makeAutoObservable } = require("mobx")

class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }

  // 获取用户信息
  async getUserInfo() {
    // 调用获取用户信息的接口
    const res = await http.get('user/profile')
    // 设置用户信息
    this.userInfo = res.data
  }
}

export default UserStore