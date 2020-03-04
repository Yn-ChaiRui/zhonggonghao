import Vue from 'vue'
import Router from 'vue-router'
import Houtai from '../components/houtai.vue'//后台总组件
import Jiaose from '../components/jiaose.vue'//角色组件
import Jiaoseb from '../components/jiaosebiao.vue'//角色组件的 添加角色
import From from '../components/fromtianjia.vue'//添加组件里 控制添加组件
import Biao from '../components/tlabiao.vue' //table组件


Vue.use(Router)

//这些组件 按照我的解释是 
//先通过APP.vue 添加了Houtai.vue 组件 
//Houtai.vue 组件里 单独跳转角色组件
//角色组件{
//   全为单独组件拼接
//   Jiaose.vue 角色组件{有input  分割线 }
//   Jiaoseb.vue 添加角色
//   Fromtianjia.vue 这个导入了添加角色里面

// }

// tlabiao.vue Table 表单  占位之后  不显示
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Houtai',
      component: Houtai,
      children:[
        {
          path: '/Jiaose',
        name: 'Jiaose',
        component: Jiaose,
        children:[
          {
            path: '/Jiaose',
            name: 'Jiaoseb',
            component: Jiaoseb,
            children:[{
              path: '/Jiaose',
            name: 'From',
            component: From,
            children:[{
              path: '/Jiaose',
              name: 'Biao',
              component: Biao,
            }]
            }]
          }
        ]
      }]
    }
  
  ]
})
