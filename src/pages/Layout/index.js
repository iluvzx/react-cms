import React, { useState } from "react";
import { Layout, Menu, Space } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import logo from '@/assets/logo192.png'
import '@/pages/Layout/index.scss'

const { Header, Sider, Content } = Layout


//首页页面

const MyLayout = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  return (
    <>
      <Layout hasSider={true} className="body">
        <Sider collapsible collapsed={isCollapsed}>
          <div className="logo">
            <img src={logo} alt="" />
            <h2>React CMS</h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              // onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>

  )
}

export default MyLayout