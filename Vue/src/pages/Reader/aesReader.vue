<template>
    <div id="reader" @click="openOption($event)">
      <transition name="fade">
      <voption :catalog_data="catalog" :pages_data="pages" v-show=" $store.state.open_option"  @optionEvent="everyEv"/>
      </transition>
        <div class="swiper-container swiper-container-horizontal swiper-container-ios">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(imgs, index) in imagesArray" :key="index">
            <img :src="loading " v-insertImages  :index="index"  />
        </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-progressbar"><span class="swiper-pagination-progressbar-fill" ></span></div>
        <!-- Add Arrows -->
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import loading from '@/assets/loading.gif'
import mock from './page.js'
import catalog from './catalog.js'
import Voption from '@/reuse-components/option.vue'
export default {
  components: {
    Voption
  },
  directives: {
    insertImages: {
      // 指令的定义
      inserted: function (el, binding, vnode) {
        // 配合this.loadding和this.imagesArray
        let img = new Image()
        let src = vnode.context.imagesArray[el.getAttribute('index')] + '?r=' + Math.random()
        img.src = src
        img.onload = function () {
          el.src = src
          console.log('onload')
        }
        img.onerror = function () {
          el.style.display = 'none'
          let btn = document.createElement('button')
          btn.style.cssText = 'z-index: 99999;background: rgb(254, 254, 254);display: block;border: 1px #ccc solid;' +
            'padding: 10px;border-radius: 5px;'
          btn.innerHTML = '加载失败,需要重新加载啦'
          el.parentNode.appendChild(btn)
          function run (ev) {
            ev.target.style.display = 'none'
            el.style.display = 'block'
            el.src = vnode.context.loading
            setTimeout(function () {
              let img = new Image()
              let src = vnode.context.imagesArray[el.getAttribute('index')] + '?r=' + Math.random()
              img.src = src
              img.onload = function () {
                el.src = src
              }
              img.onerror = function () {
                ev.target.style.display = 'block'
                el.style.display = 'none'
                el.parentNode.appendChild(el.parentNode.childNodes[1])
              }
            }, 2000)
          }
          btn.addEventListener('click', run, false)
          console.log('error')
        }
      }
    }
  },
  methods: {
    openOption (ev) {
      this.$store.commit('setValue', {
        open_option: true
      })
    },
    everyEv (obj) {
      this.swiperInstance.slideTo(obj.jumpIndex, 500, false) //滚动条跳转
    }
  },
  created () {
    let that = this
    setTimeout(function () {
      that.imagesArray = []
      for (let w of mock.data.picture) {
        that.imagesArray.push(w.url)
      }
      that.pages.maxSize = that.imagesArray.length
    }, 0) //模拟ajax
    this.catalog = catalog
  },
  mounted () {
    let that = this
    this.$nextTick(function () {
      this.swiperInstance = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          progressbarOpposite: false
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        on: {
          slideChange: function () { that.pages.cunrrentIndex = this.activeIndex }
        }
      })
    })
  },
  data () {
    return {
      imagesArray: [ ],
      swiperInstance: null,
      loading: loading,
      catalog: catalog,
      pages: {
        maxSize: 0,
        cunrrentIndex: 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #reader {
    .fade-enter-active, .fade-leave-active {
      transition: 0.35s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100vh;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #353732;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img {
        height: calc(100% - (100px));
        object-fit: cover;
      }
    }
  }
</style>
