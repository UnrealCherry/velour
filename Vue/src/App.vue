<template>
  <div id="app">
    <div id="flow-wrap" :style="{'height':viewHeight+'px'}">
    <router-view/>
    </div>
    <comic-navbar :icons_data="icons_data" :color_group="color_group" ></comic-navbar><!--底部tab-->
  </div>
</template>

<script>
import ComicNavbar from '@/reuse-components/comic-navbar'
import { mapGetters, mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'App',
  created () {
  },
  mounted () {
    this.init()
    this.$nextTick(() => {
      this.betterScrollGolbalInit()
    })
  },
  watch: {
    $route (to, from) {
      console.log('改变路由辣')
      this.$nextTick(() => {
        this.betterScrollGolbalInit()
      })
    }
  },
  computed: {
    ...mapGetters(['_gettersLocalStorage']),
    ...mapState(['vuex_localStorage', 'viewHeight'])
  },
  data () {
    return {
      BScroll: 'better-scroll',
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
    betterScrollGolbalInit () {
      this.BScroll = null
      this.BScroll = new BScroll('#flow-wrap')
    }, //全局安装better-scroll
    init () {
      let navbar = document.getElementById('ComicNavbar').offsetHeight
      let client = document.body.scrollHeight
      this.$store.commit('setValue', {key: 'viewHeight', val: client - navbar})
    }
  },
  components: {
    ComicNavbar
  }
}
</script>

<style lang="less" scoped>
#app {
  #flow-wrap{
    overflow: hidden;
  }
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga', 'kern';
  text-align: center;
  color: #2c3e50;
}
</style>
