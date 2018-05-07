import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Setting from '../components/setting/setting'
import Listening from '../components/listening/listening'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/setting',
          name: 'Setting',
          component: Setting
        },
        {
          path: '/listening',
          name: 'Listening',
          component: Listening
        }
      ]
    }
  ]
})
