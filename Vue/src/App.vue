<template>
  <div id="app">
    <div>
    <div id="flow-wrap" :style="{'height':viewHeight}">
      <transition name="fade" >
        <keep-alive>
    <router-view />
        </keep-alive>
      </transition>
    </div>
      <transition name="fadeDown" >
    <comic-navbar :icons_data="icons_data" :color_group="color_group" :index="tabIndex" v-if="tabShow" ></comic-navbar><!--底部tab-->
      </transition>
    </div>
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
    this.betterScrollGolbalInit()
  },
  watch: {
    $route (to, from) {
      this.betterScrollGolbalInit()
      this.setTabShow(to)
      this.setTabIndex(to, this)
      console.log(to, '改变路由辣')
    }
  },
  computed: {
    ...mapGetters(['_gettersLocalStorage']),
    ...mapState(['vuex_localStorage', 'viewHeight'])
  },
  data () {
    return {
      BScroll: false,
      tabShow: true,
      tabIndex: 0,
      height: 0,
      navHeight: 0,
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
      ],
      showTabName: ['home', 'index']
    }
  },
  methods: {
    betterScrollGolbalInit () {
      let faceTransitionTime = 400, that = this, routerName = this.$route.name
      this.$nextTick(() => {
        setTimeout(function () {
          if (that.BScroll) {
            that.BScroll.destroy()
            that.BScroll = false
          }
          if (routerName === 'chatroom') {
            return false
          }
          that.BScroll = new BScroll('#flow-wrap', {
            click: false
          })
        }, faceTransitionTime) //使用tranistion时必须加上setTimeout才能重新安装一遍;
      })
    }, //全局安装better-scroll
    init () {
      let d = document
      let navbar = d.getElementById('ComicNavbar').offsetHeight
      let client = d.documentElement.clientHeight
      this.navHeight = navbar
      this.height = client - navbar
      this.$store.commit('setValue', { 'viewHeight': this.height + 'px' })
    },
    setTabShow (to) {
      /*是路由导航的时候隐藏并且设定高度*/
      for (let tabName of this.showTabName) {
        if (tabName === to.name) {
          this.tabShow = true
          this.$store.commit('setValue', { 'viewHeight': this.height + 'px' })
          return false
        }
      }
      this.tabShow = false; this.$store.commit('setValue', { 'viewHeight': this.height + this.navHeight + 'px' })
    },
    setTabIndex (to, that) {
      /*根据url和路由名字底部导航状态*/
      this.icons_data.forEach((x, i, a) => {
        let name = x.url.replace('/', '')
        if (name === to.name) {
          that.tabIndex = i
        }
      })
    }
  },
  components: {
    ComicNavbar
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 750px;
  margin: 0 auto;
  .fade-enter-active, .fade-leave-active {
    transition:  0.35s ;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(-100vw) ;
    opacity: 0;
  }
  .fadeDown-enter-active, .fadeDown-leave-active {
    transition:  0.35s ;
  }
  .fadeDown-enter, .fadeDown-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateY(10vw) ;
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
