<template>
  <div id="Home" >
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="(imgObj,index) in swiper_images" :key="index">
      <img :src="imgObj.url">
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div><!--轮播 end-->
  <div class="icon-list-wrapper"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperInstance: null,
      swiper_images: [{
        name: 'bleach',
        url: require('@/assets/animeWallpaper/bleach.jpg')
      }, {
        name: 'naruto',
        url: require('@/assets/animeWallpaper/naruto.jpg')
      }, {
        name: 'onepiece',
        url: require('@/assets/animeWallpaper/onepiece.jpg')
      }, {
        name: 'onepunchman',
        url: require('@/assets/animeWallpaper/onepunchman.jpg')
      }]
    }
  },
  mounted () {
    this.$store.commit('increment')
    console.log(this.$store.state.count) // -> 1
    this.$nextTick(function () {
      this.swiperInstance = null
      this.swiperInstance = new Swiper('#Home .swiper-container', {

        spaceBetween: 0,
        pagination: {
          el: '#Home .swiper-pagination',
          clickable: true
        }
      })
    })
  }
}
</script>
<style scoped  lang="scss" >
#Home .swiper-pagination-bullets span{
    width: 20px;
    height: 20px;
    background: white;
    opacity: 1;
  }
#Home .swiper-pagination-bullet-active {
    background: #f0be41;
    opacity: 1;
  }
#Home{
  .swiper-container {
    width: 750px;
    height: 470px;
    background: yellow;
    .swiper-slide {
      width: 750px;
      height: 470px;
      text-align: center;
      font-size: 18px;
      background: #cccccc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
  .icon-list-wrapper{
    width: 750px;
    height: 150px;
    @include cement(1)
  }
}
</style>
<style lang="scss"> //修改swiper.css部分内容\
  #Home .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background: white;
    opacity: 1;
    margin-left: 15px;
  }
  #Home .swiper-pagination-bullet-active {
    background: #f0be41!important;
    opacity: 1;
  }
  #Home .swiper-pagination-bullets{
    text-align: right;
    padding-right: 20px;
  }
</style>
