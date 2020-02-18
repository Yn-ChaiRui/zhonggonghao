import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Demo({ dispatch, flag }) {
  console.log(flag)
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="bank" />
                系统
              </span>
            }
          >
            <Menu.Item key="1"><Icon type="setting" />系统配置项</Menu.Item>
            <Menu.Item key="2"><Icon type="setting" />系统入口</Menu.Item>
            <Menu.Item key="3"><Icon type="bars" />菜单</Menu.Item>
            <Menu.Item key="4"><Icon type="solution" />审计日志</Menu.Item>
            <Menu.Item key="5"><Icon type="solution" />公告通告</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="6"><Icon type="apple" />组织机构</Menu.Item>
            <Menu.Item key="7"><Icon type="trademark" />角色</Menu.Item>
            <Menu.Item key="8"><Icon type="user" />用户</Menu.Item>
            <Menu.Item key="9"><Icon type="profile" />班组管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                数据管理
              </span>
            }
          >
            <Menu.Item key="10">标签组管理</Menu.Item>
            <Menu.Item key="11">资源管理</Menu.Item>
            <Menu.Item key="12">技能管理</Menu.Item>
            <Menu.Item key="13">谜题等级管理</Menu.Item>
            <Menu.Item key="14">微型世界主题</Menu.Item>
            <Menu.Item key="15">学习资料</Menu.Item>
            <Menu.Item key="16">收藏品管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="notification" />
                世界运营
              </span>
            }
          >
              <Menu.Item key="17">学习资料</Menu.Item>
            <Menu.Item key="18">收藏品管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
Demo = connect((state) => {
  return {
    ...state.demo
  };
})(Demo);
export default Demo;