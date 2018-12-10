import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charge from './views/index/index.vue'
import ChargeOverview from '@/components/ChargeOverview/ChargeOverview.vue'
import ChargeAppDetail from '@/components/ChargeAppDetail/ChargeAppDetail.vue'
import ChargeStorageDetail from '@/components/ChargeStorageDetail/ChargeStorageDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/charge',
      
    },
    {
      path: '/charge',
      name: 'charge',
      component: Charge,
      redirect: '/charge/overview',
      children: [
        { meta: { adminRequired: false }, path: 'overview', name: 'Overview', component: ChargeOverview },
        { meta: { adminRequired: false }, path: 'app-detail', component: ChargeAppDetail },
        { meta: { adminRequired: false }, path: 'storage-detail', component: ChargeStorageDetail },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
