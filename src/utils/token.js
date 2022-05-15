// token持久化

const key = 'pc-key'

// 存入token
const setToken = token => {
  return window.localStorage.setItem(key, token)
}

// 获取token
const getToken = () => {
  return window.localStorage.getItem(key)
}

// 删除token
const removeToken = () => {
  return window.localStorage.removeItem(key)
}

// 必须把存、取、删的结果返回出去!

export {
  setToken,
  getToken,
  removeToken
}