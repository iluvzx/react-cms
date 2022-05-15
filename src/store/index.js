import { createContext, useContext } from 'react'
import LoginStore from '@/store/login.Store'

class Store {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const storeContext = createContext(new Store())
export const useStore = () => useContext(storeContext)