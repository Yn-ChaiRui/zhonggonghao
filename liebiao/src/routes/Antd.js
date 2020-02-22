import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar} from 'antd';
import { Link,Router, Route, Switch,withRouter } from 'dva/router';
import Yonghu from './Antdyonghu'
import Jiaose from './sss'
import Banzu from './banzu'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function Demo({ dispatch, flag }) {
  console.log(flag)
  return (
    <Layout>
      {/* <Router> */}
    <Header className="header" style={{background:'#fff',padding:'0'}}>
    <div className={styles.logo}></div>
    <div className={styles.shiliang}><Icon type="menu-fold" /></div>
    <div className={styles.youbox}>
    <Dropdown overlay={menu} className={styles.xiala}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      切换主题 <Icon type="down" />
    </a>
  </Dropdown>
  <div className={styles.shiliang}><Icon type="bell" className={styles.ziti}/></div>
  <div className={styles.touxiang}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
  <Dropdown overlay={menu} className={styles.xialab}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      名  字 <Icon type="down" />
    </a>
  </Dropdown>
    </div>
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
              <span className={styles.box1}>
                <Icon type="bank" />
                系统
              </span>
            }
          >
            <Menu.Item key="1" className={styles.biaoqian}><Icon type="setting" />系统配置项</Menu.Item>
            <Menu.Item key="2" className={styles.biaoqian}><Icon type="setting" />系统入口</Menu.Item>
            <Menu.Item key="3" className={styles.biaoqian}><Icon type="bars" />菜单</Menu.Item>
            <Menu.Item key="4" className={styles.biaoqian}><Icon type="solution" />审计日志</Menu.Item>
            <Menu.Item key="5" className={styles.biaoqian}><Icon type="solution" />公告通告</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span className={styles.box1}>
                <Icon type="user" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="6" className={styles.biaoqian}><Icon type="apple" />组织机构</Menu.Item>
            <Menu.Item key="7" className={styles.biaoqian}><Link to="/jiaose"><Icon type="trademark" />角色</Link></Menu.Item>
            <Menu.Item key="8" className={styles.biaoqian}><Link to="/yonghu"><Icon type="user" />用户</Link></Menu.Item>
            <Menu.Item key="9" className={styles.biaoqian}><Link to="/banzu"><Icon type="profile" />班组管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span className={styles.box1}>
                <Icon type="wallet" />
                数据管理
              </span>
            }
          >
            <Menu.Item key="10" className={styles.biaoqian}><Icon type="appstore" />标签组管理</Menu.Item>
            <Menu.Item key="11" className={styles.biaoqian}><Icon type="hdd" />资源管理</Menu.Item>
            <Menu.Item key="12" className={styles.biaoqian}><Icon type="wallet" />技能管理</Menu.Item>
            <Menu.Item key="13" className={styles.biaoqian}><Icon type="wallet" />谜题等级管理</Menu.Item>
            <Menu.Item key="14" className={styles.biaoqian}><Icon type="wallet" />微型世界主题</Menu.Item>
            <Menu.Item key="15" className={styles.biaoqian}><Icon type="wallet" />学习资料</Menu.Item>
            <Menu.Item key="16" className={styles.biaoqian}><Icon type="wallet" />收藏品管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span className={styles.box1}>
                <Icon type="notification" />
                世界运营
              </span>
            }
          >
              <Menu.Item key="17" className={styles.biaoqian}>学习资料</Menu.Item>
            <Menu.Item key="18" className={styles.biaoqian}>收藏品管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className={styles.youbian}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        > <Route path="/jiaose"   component={Jiaose} />
          <Route path="/yonghu"   component={Yonghu} />
          <Route path="/banzu"   component={Banzu} />

         
         
        </Content>
        </div>
      </Layout>
    </Layout>
    {/* </Router> */}
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
export default withRouter(Demo);