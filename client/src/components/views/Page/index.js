import { Icon, Layout, Menu } from 'antd';

import { Header } from '../../library';
import React from 'react';

const { Content, Footer, Sider } = Layout;

const Page = props => (
  <Layout style={{ fontFamily: 'Roboto, sans-serif' }}>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Rebelde</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header> Rebelde </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div
          style={{
            padding: 24,
            background: '#fff',
            textAlign: 'center',
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Starwars ©2019 Created by Hugo Fernandes
      </Footer>
    </Layout>
  </Layout>
);

export default Page;
