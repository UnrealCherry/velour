import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/pages/Home.vue'], resolve)
const Book = resolve => require(['@/pages/Book.vue'], resolve)
const NotFound = resolve => require(['@/pages/404.vue'], resolve)
const Search = resolve => require(['@/pages/search.vue'], resolve)
const Chatroom = resolve => require(['@/pages/ChatRoom.vue'], resolve)
const Catalog = resolve => require(['@/pages/Catalog.vue'], resolve)
const Tetris = resolve => require(['@/pages/Game/tetris.vue'], resolve)
const Child_Catalog_Directory = resolve => require(['@/pages/catalog-child/Directory.vue'], resolve)
const Child_Catalog_Detail = resolve => require(['@/pages/catalog-child/Detail.vue'], resolve)
const Reader_aesReader = resolve => require(['@/pages/Reader/aesReader.vue'], resolve)
Vue.use(Router)
//命名规范:path全小写 component 首字母大写
//XX的子目录为XX-child
//XX的子文件OOO为Child_XXX_OOO
const router = new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/game',
      name: 'game',
      component: Tetris
    },
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/search',
      name: '/',
      component: Search
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog,
      children: [
        {
          path: 'directory',
          component: Child_Catalog_Directory
        },
        {
          path: 'profile',
          component: Child_Catalog_Detail
        }
      ]
    },
    {
      path: '/reader',
      name: 'name',
      component: Reader_aesReader
    }
  ]
})
export default router
