<template>
  <div>
    <a-button type="primary" @click="showModal">添加角色</a-button>
    <a-modal title="Modal" v-model="visible" @ok="hideModal" okText="确认" cancelText="取消">
      <p>
          <!-- 切换添加 -->
          <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="角色属性" key="1">
          <!-- Form表单 -->
          <router-view></router-view>
      </a-tab-pane>
      <a-tab-pane tab="操作权限" key="2">Content of Tab Pane 2</a-tab-pane>
    </a-tabs>
      </p>
     
    </a-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>