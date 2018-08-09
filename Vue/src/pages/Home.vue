<template>
  <div id="Home" >
    <div class="swiper-wrapper">
  <simpleSwiper :swiper_images="swiper_images"></simpleSwiper>
    </div>
      <div class="icon-list-wrapper"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import simpleSwiper from '@/reuse-components/simple-swiper'
export default {
  data () {
    return {
      swiperInstance: null,
      swiper_images: [{
        name: 'bleach',
        url: require('@/assets/animeWallpaper/timg (4).jpg')
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
  },
  components: {
    simpleSwiper
  }
}
</script>
<style scoped  lang="scss" >
#Home{
  .icon-list-wrapper{
    width: 750px;
    height: 150px;
    @include  cement(1)
  }
}
</style>
