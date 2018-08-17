<template>
  <div id="app">
    <div id="flow-wrap" :style="{'height':viewHeight+'px'}">
      <transition name="fade">
    <router-view/>
      </transition>
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
        url: '/home',
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
      this.BScroll = new BScroll('#flow-wrap', {
        click: false
      })
    }, //全局安装better-scroll
    init () {
      let navbar = document.getElementById('ComicNavbar').offsetHeight
      let client = document.documentElement.clientHeight
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
  .fade-enter-active, .fade-leave-active {
    transition:  0.35s ;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(-100vw) ;
    opacity: 0;
  }
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
