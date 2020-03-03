import Vue from 'vue'
import Router from 'vue-router'
import Houtai from '../components/houtai.vue'
import Jiaose from '../components/jiaose.vue'
import Jiaoseb from '../components/jiaosebiao.vue'
import From from '../components/fromtianjia.vue'

Vue.use(Router)

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
            }]
          }
        ]
      }]
    }
  
  ]
})
