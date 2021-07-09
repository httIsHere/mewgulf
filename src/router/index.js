/*
 * @Author: httishere
 * @Date: 2020-04-22 00:31:12
 * @LastEditTime: 2021-07-09 10:59:07
 * @LastEditors: Please set LastEditors
 * @Description: router entry file
 * @FilePath: /mewgulf/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfoDetail from '../views/InfoDetail.vue';
import NotFound from '../views/NotFound.vue';
import Comments from '../components/Comments.vue';
import Timeline from '../views/Line.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['../views/Home.vue'], resolve),
    meta: {
      title: 'MewGulf-httishere'
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'MewGulf-httishere'
    },
  },
  {
    path: '/info-detail',
    name: 'InfoDetail',
    component: InfoDetail,
    meta: {
      title: 'info-MewGulf'
    }
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments,
    meta: {
      title: 'Comments-MewGulf'
    }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline,
    meta: {
      title: 'Timeline-MewGulf'
    }
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
