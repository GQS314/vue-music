import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Discovering from '../components/discovering/discovering'
import Mymusic from '../components/mymusic/mymusic'
import Friend from '../components/friend/friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/discovering',
      children: [
        {
          path: '/discovering',
          name: 'Discovering',
          component: Discovering
        },
        {
          path: '/mymusic',
          name: 'Mymusic',
          component: Mymusic
        },
        {
          path: '/friend',
          name: 'Friend',
          component: Friend
        }
      ]
    }
  ]
})
