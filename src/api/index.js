import { http } from "@/utils"

// 登录接口
const login = async (mobile, code) => {
  const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
    mobile, code
  })
  console.log('api/index.js:', res.data)
  return res.data
}

export { login }