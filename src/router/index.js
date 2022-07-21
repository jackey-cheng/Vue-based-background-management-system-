

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main-one',
    component: () => import('../views/mainOne.vue'),
    children:[
       {
        path: 'user',
        name: 'user-one',
        component: () => import('../views/user/index.vue')
      },
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'mall',
        name: 'mall-one',
        component: () => import('../views/mall/index.vue')
      },
      {
        path: 'others',
        name: 'other',
        //component: ()=> import('../views/others/page1.vue'),
        component: () => import('../views/others/index.vue'),
        children:[
          {
            path: '/page1',
            name: 'page1-one',
            component: ()=> import('../views/others/page1.vue')
          },
          {
            path: '/page2',
            name: 'page2-one',
            component: () => import('../views/others/page2.vue')
          }
        ]
      }, 
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
