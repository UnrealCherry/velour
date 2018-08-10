<template>
  <div id="Home" >
    <div class="swiper-wrapper">
  <simpleSwiper :swiper_images="swiper_images"></simpleSwiper>
    </div>
    <!--wrapper end-->
      <div class="icon-list-wrapper">
        <div class="icon-single" v-for="(iconCat, index) in news" :key="iconCat+index" @click="goToRouter(iconCat.url)">
          <div class="icon-pack"></div>
          <div class="icon-content">{{iconCat.name}}</div>
        </div>
      </div>
    <!--rank end-->
    <books></books>
  </div>
</template>

<script>
import Swiper from 'swiper'
import simpleSwiper from '@/reuse-components/simple-swiper'
import books from '@/reuse-components/book-wrapper'
export default {
  components: {
    simpleSwiper,
    books
  },
  data () {
    return {
      swiperInstance: null,
      news: [{name: '最近更新', url: '/water'}, {name: '精品推荐', url: '/water'}, {name: '排行榜', url: '/water'}, {name: '土豪榜', url: '/water'}],
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
  methods: {
    goToRouter (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped  lang="scss" >
#Home{
  .icon-list-wrapper{
    width: 750px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    @include  cement(1);
    .icon-single{
      width: 150px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @include  cement(2);
      .icon-pack{
        width:80px;
        height: 80px;
        margin-bottom:5px;
        border-radius: 50%;
        overflow: hidden;
        @include  cement(3);
      }
      .icon-content{
        width:100%;
        text-align: center;
        @include  cement(5);
      }
    }
  }
}
</style>
