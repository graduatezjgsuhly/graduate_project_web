import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../login/login.vue')
    },
    {
      path: '/main_page',
      name: 'main_page',
      component: () => import('../main_page/main_page.vue')
    },
    {
      path: '/introduce_main_page',
      name: 'introduce_main_page',
      component:() => import('../components/introduce_views/introduce_main.vue')
    },
    {
      path: '/community_catalogue',
      name: 'community_catalogue',
      component:() => import('../components/community_page/community_catalogue.vue')
    },
    {
      path : '/main_src_page',
      name : 'main_src_page',
      component:() => import('../main_src/main_src_page.vue')
    },
    {
      path: '/main_src_yongle',
      name: 'main_src_yongle',
      component:() => import('../main_src/main_src_yongle.vue')
    },
    {
      path: '/community_invitation',
      name: 'community_invitation',
      component:() => import('../components/community_page/community_invitation.vue')
    },
    {
      path: '/community_new',
      name: 'community_new',
      component:() => import('../components/community_page/community_new.vue')
    },
    {
      path: '/community_comment',
      name: 'community_comment',
      component:() => import('../components/community_page/community_comment.vue')
    },
    {
      path: '/introduce_baopu',
      name: 'introduce_baopu',
      component:() => import('../components/introduce_views/introduce_qingbaopu.vue')
    },
    {
      path: '/introduce_jinmen',
      name: 'introduce_jinmen',
      component:() => import('../components/introduce_views/introduce_jinmen.vue')
    },
    {
      path: '/introduce_baimei',
      name: 'introduce_baimei',
      component:() => import('../components/introduce_views/introduce_baimei.vue')
    },
    {
      path: '/introduce_busui',
      name: 'introduce_busui',
      component:() => import('../components/introduce_views/introduce_busui.vue')
    },
    {
      path: '/introduce_huiwen',
      name: 'introduce_huiwen',
      component:() => import('../components/introduce_views/introduce_huiwen.vue')
    },
    {
      path: '/qingdai',
      name:'qingdai',
      component:() => import('../components/src_page/qingdai.vue')
    },
    {
      path: '/mingdai',
      name:'q=mingdai',
      component:() => import('../components/src_page/mingdai.vue')
    },
    {
      path: '/pdf-show',
      name: 'pdf-view',
      component:() => import('../components/pdf-view/pdf-show.vue')
    },
  ]
})

export default router
