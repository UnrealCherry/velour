<template>
  <div id="app">
    <div class="flow-wrap">
    <router-view/>
    </div>
    <comic-navbar :icons_data="icons_data" :color_group="color_group" ></comic-navbar><!--底部tab-->
  </div>
</template>

<script>
import ComicNavbar from '@/reuse-components/comic-navbar'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'App',
  created () {
  },
  computed: {
    ...mapGetters(['_gettersLocalStorage']),
    ...mapState(['vuex_localStorage'])
  },
  data () {
    return {
      color_group: ['#F9B3C9', '#EF8AAE', '#E20380', '#AF007B', '#6E097D', '#EB9D00', '#E95722', '#DB0129', '#019F61', '#02B1AF', '#4A1377'],
      icons_data: [ {name: '首页',
        url: '/',
        svgName: 'icon-shouye'
      }, {name: '书架',
        url: '/book',
        svgName: 'icon-bofang'
      }, {name: '贴吧',
        url: '/tieba',
        svgName: 'icon-quanping'
      }, {name: '聊天室',
        url: '/chatroom',
        svgName: 'icon-kefu'
      }, {name: '我的',
        url: '/user',
        svgName: 'icon-shenfenzheng'
      }
      ]
    }
  },
  methods: {

  },
  components: {
    ComicNavbar
  }
}
</script>

<style lang="less" scoped>
#app {
  .flow-wrap{
    margin-bottom: 100px;
  }
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga', 'kern';
  text-align: center;
  color: #2c3e50;
}
</style>
