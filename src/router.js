import Vue from 'vue'
import Router from 'vue-router'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
import Page3 from './views/Page3.vue'
import Page4 from './views/Page4.vue'

import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import LoginSuccess from './views/LoginSuccess.vue'

import hobby1 from './views/hobby1.vue'
import hobby2 from './views/hobby2.vue'
import hobby3 from './views/hobby3.vue'
import hh from './views/hh.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/page1',
      name:'page1',
      component:Page1
    },
    {
      path:'/page2',
      name:'page2',
      component:Page2
    },
      {
          path:'/page3',
          name:'page3',
          component:Page3
      },
      {
          path:'/page4',
          name:'page4',
          component:Page4
      },
      {
          path:'/',
          name:'index',
          component:Index
      },
      {
          path:'/login',
          name:'login',
          component:Login
      },
      {
          path:'/register',
          name:'register',
          component:Register
      },
      {
          path:'/loginsuccess',
          name:'loginsuccess',
          component:LoginSuccess
      },
      {
          path:'/hobby1',
          name:'hobby1',
          component:hobby1
      },
      {
          path:'/hobby2',
          name:'hobby2',
          component:hobby2
      },
      {
          path:'/hobby3',
          name:'hobby3',
          component:hobby3
      },
      {
          path:'/hh',
          name:'hh',
          component:hh
      },
  ]
})
