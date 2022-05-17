import { createContext, useContext } from 'react'
import LoginStore from '@/store/login.Store'
import UserStore from '@/store/user.Store'

class Store {
  constructor() {
    // 实例化store的实例对象
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

const storeContext = createContext(new Store())
export const useStore = () => useContext(storeContext)