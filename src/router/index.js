import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [ //const <- 타입 routes = (배열로 받아야 하고 오프젝트에 패스 컨퍼넌트를 찾아 제공하단다.) <- 변수 명 = 값을 넣음
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting - 라우트 레벨에서 코드를 분할하는 방법입니다.
    // this generates a separate chunk (about.[hash].js) for this route - 이 라우트에 대한 chunk 파일이 분리되어 생성됩니다.
    // which is lazy-loaded when the route is visited. - 이 라우트에 방문했을 때 lazy-load(지연 로드)됩니다.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => import(/* webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/pearl',
    name: 'pearl',
    component: () => import(/* webpackPrefetch: true */ '../views/PearlView.vue')
  },
  {
    path: '/databinding',
    name: 'dataBinding',
    component: () => import(/* webpackPrefetch: true */ '../views/DataBinding.vue')
  },
  {
    path: '/databinding02',
    name: 'databinding02',
    component: () => import(/* webpackPrefetch: true */ '../views/DataBinding02.vue')
  },
  {
    path: '/v-for',
    name: 'v-for',
    component: () => import(/* webpackPrefetch: true */ '../views/v-for.vue')
  },
  {
    path: '/StoreAccess',
    name: 'v-StoreAccess',
    component: () => import(/* webpackPrefetch: true */ '../views/StoreAccess.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
