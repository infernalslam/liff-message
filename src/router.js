import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game',
      component: () => import('./views/Game2')
    },
    {
      path: '/setting',
      name: 'setting',
      props: (route) => ({ token: route.query.token }),
      component: () => import('./views/Setting')
    }
    // {
    //   path: '/game',
    //   name: 'game',
    //   component: () => import('./views/Game')
    // }
  ]
})
