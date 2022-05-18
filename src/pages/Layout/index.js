import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useStore } from "@/store"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Button, Layout, Menu, Popconfirm, Space, Avatar } from "antd"
import { AreaChartOutlined, FormOutlined, ReadOutlined } from '@ant-design/icons'
import logo from '@/assets/logo192.png'
import '@/pages/Layout/index.scss'
const { Header, Sider, Content } = Layout

const MyLayout = () => {

  // 获取当前的路由路径
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()
  const navigate = useNavigate()

  // 页面首次渲染调用接口
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore]) // 为了不让编译器报警告，依赖项还是填一下，没有什么影响

  // 导航点击时路由跳转
  // key是每个item设置的key
  const handleClick = value => {
    navigate(value.key)
  }

  // 确定退出
  const onConfirm = () => {
    // 删除token
    loginStore.loginOut()
    // 跳转登录页面
    // 注意：所有的hooks只可以在函数组件或者hooks函数中使用，其他地方不可以
    navigate('/login', { replace: true })
  }

  // 每个nav
  const items = [
    {
      key: '/layout/home',
      icon: <AreaChartOutlined />,
      label: '数据概括'
    },
    {
      key: '/layout/article',
      icon: <ReadOutlined />,
      label: '文章管理'
    },
    {
      key: '/layout/publish',
      icon: <FormOutlined />,
      label: '发布文章'
    },
  ]
  return (
    <div className="wrapper">
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>React CMS</h2>
        </div>
        <div className="user-info">
          <Space size={'middle'}>
            <Avatar src={userStore.userInfo.photo} />
            <span className="user-name">{userStore.userInfo.intro}</span>
            <span className="user-logout">
              <Popconfirm title="你确定要退出吗？" okText="确认" cancelText="取消" onConfirm={onConfirm}>
                <Button type="primary" danger>退出</Button>
              </Popconfirm>
            </span>
          </Space>
        </div>
      </Header>
      <Layout style={{ height: '100vh' }}>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            style={{ height: '100%' }}
            defaultSelectedKeys={[pathname]}
            items={items}
            onClick={handleClick}
          >
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: '#eee', padding: 24 }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#fff'
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

// 注意：每次刷新的时候，mobx中的用户信息是空的，所以视图并不能正常的渲染在视图上
// 使用observer将store和react连接
export default observer(MyLayout)