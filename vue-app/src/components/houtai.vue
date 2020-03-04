<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        mode="inline"
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <!-- 系统块 -->
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="bank" />系统
          </span>
          <a-menu-item key="1">
            <a-icon type="setting" />系统配置项
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="setting" />系统入口
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="bars" />菜单
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="solution" />审计日志
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="solution" />公告通知
          </a-menu-item>
        </a-sub-menu>

        <!-- 用户管理块 -->
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="user" />用户管理
          </span>
          <a-menu-item key="6">
            <a-icon type="apple" />组织机构
          </a-menu-item>
          <a-menu-item key="7">
            <router-link to="/Jiaose">
            <a-icon type="trademark" />角色
            </router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="user" />用户
          </a-menu-item>
          <a-menu-item key="9">
            <a-icon type="profile" />班组管理
          </a-menu-item>
        </a-sub-menu>

        <!-- 数据管理块 -->
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="wallet" />数据管理
          </span>
          <a-menu-item key="10">
            <a-icon type="appstore" />标签组管理
          </a-menu-item>
          <a-menu-item key="11">
            <a-icon type="hdd" />资源管理
          </a-menu-item>
          <a-menu-item key="12">
            <a-icon type="wallet" />技能管理
          </a-menu-item>
          <a-menu-item key="13">
            <a-icon type="wallet" />谜题等级管理
          </a-menu-item>
          <a-menu-item key="14">
            <a-icon type="wallet" />微型世界主题
          </a-menu-item>
          <a-menu-item key="15">
            <a-icon type="wallet" />学习资料
          </a-menu-item>
          <a-menu-item key="16">
            <a-icon type="wallet" />收藏品管理
          </a-menu-item>
          <a-menu-item key="17">
            <a-icon type="wallet" />题库管理
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />

        <!-- 切换主题块 -->
        <span class="fudong">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            切换主题
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

        <!-- 信息显示块 -->
        <span style="margin-right:24px">
          <a-badge :count="1" >
            <a-avatar shape="circle" icon="bell" />
          </a-badge>
        </span>

        <!-- 头像块 -->
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

        <!-- 个人中心块 -->
        <a-dropdown >
          <a class="ant-dropdown-link" href="#">
            Name
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        </span>
      </a-layout-header>

      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="user" />
          <span>Application List</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Application</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

/* 切换主题 信息 头像 个人中心 控制浮动 */
.fudong{
  float: right;
  margin-right: 40px
}
</style>