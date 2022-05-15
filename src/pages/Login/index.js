import { useStore } from "@/store"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, Checkbox, message } from "antd"
import logo from "@/assets/logo192.png"
import "@/pages/Login/index.scss"


const Login = () => {
  // 手机：13811111111
  // 密码：246810 
  // 同意协议选择状态，默认为true
  const [checked, setChecked] = useState(true)
  const { loginStore } = useStore()
  const navigate = useNavigate()

  // 设置同意协议状态
  const handleChange = () => {
    setChecked(!checked)
  }
  // 登录信息校验成功
  const onFinish = async (values) => {
    const { mobile, code } = values
    try {
      // 调用获取token的方法
      await loginStore.getTokenRequest({ mobile, code })
      // 跳转到首页
      navigate('/', { replace: true })
      // 登录成功消息提示
      message.success('登录成功~', 1)
    } catch {
      // 登录失败消息提示
      message.error('手机号或验证码错误!')
      return false
    }
  }

  return (
    <div id="login">
      <div className="login-wrap">
        <div className="login-header">
          <img src={logo} alt="" />
          <h1>React CMS</h1>
        </div>
        <div className="login-body">
          <Form
            // 表单初始化的值
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            size="large"
            // 触发校验input的值的方式
            validateTrigger={['onBlur', 'onChange']}
          >
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: '请输入手机号!'
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号格式错误!',
                  // 指定在做完什么操作后触发校验
                  validateTrigger: 'onBlur'
                }
              ]}
            >
              <Input placeholder="手机号" />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!'
                },
                {
                  len: 6,
                  message: '请输入6位验证码!',
                  validateTrigger: 'onBlur'
                }
              ]}
            >
              <Input placeholder="验证码" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                checked={checked}
                onChange={handleChange}>我已阅读并同意「用户协议」和「隐私条款」
              </Checkbox>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={!checked ? true : false}>
              登录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login