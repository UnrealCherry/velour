import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Book from '@/pages/Book'
import notFound from '@/pages/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: notFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    }
  ]
})
