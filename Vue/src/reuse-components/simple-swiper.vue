<template>
  <div class="swiper-find-one">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(imgObj,index) in swiper_images" :key="index">
        <img :src="imgObj.url">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div><!--轮播 end-->
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  props: {
    swiper_images: {type: Array, require: true}
  },
  data () {
    return {
      swiperInstance: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.swiperInstance = null
      this.swiperInstance = new Swiper('.swiper-find-one .swiper-container', {
        spaceBetween: 0,
        pagination: {
          el: '.swiper-find-one .swiper-pagination',
          clickable: true
        }
      })
    })
  }

}
</script>
<style scoped  lang="scss" >
  .swiper-find-one .swiper-pagination-bullets span{
    width: 20px;
    height: 20px;
    background: white;
    opacity: 1;
  }
  .swiper-find-one .swiper-pagination-bullet-active {
    background: #f0be41;
    opacity: 1;
  }
  .swiper-find-one{
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
    }
  }
</style>
<style lang="scss"> //修改swiper.css部分内容\
.swiper-find-one .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background: white;
  opacity: 1;
  margin-left: 15px;
}
.swiper-find-one .swiper-pagination-bullet-active {
  background: #f0be41!important;
  opacity: 1;
}
.swiper-find-one .swiper-pagination-bullets{
  text-align: right;
  padding-right: 20px;
}
</style>
