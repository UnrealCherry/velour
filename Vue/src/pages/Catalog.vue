<template>
<div id="catalog">
<div class="preview">
<img src="@/assets/animeWallpaper/onepiece.jpg" class="img">
<div class="describe">
<div>
  <div style="text-align: left">海贼王</div>
  <div>作者:<span>尾田荣一郎</span></div>
</div>
  <div class="label" >
<span>搞笑</span><span>青春</span><span>热血</span>
  </div>
</div>
</div>
<div>
  <div class="slider">
    <span class="news-slider" ></span>
    <ul style="display: flex">
      <li class="left"   @click="sliderTo($event,log.path,index)" v-for="(log, index) in catelog" :key="log.path">
        <span :class="{'left-active':leftActive_index==index}">{{log.name}}</span>
      </li>
    </ul>
  </div> <!--滑块-->
</div>
  <transition name="fade" >
  <router-view />
  </transition>
</div>
</template>
<script>
import simpleSwiper from '@/reuse-components/simple-swiper'
export default {
  components: {simpleSwiper},
  data () {
    return {
      leftActive_index: 0,
      catelog: [{name: '详情', path: '/directory'}, {name: '目录', path: '/profile'}]
    }
  },
  methods: {
    sliderTo (ev, path, index) {
      let el = document.getElementsByClassName('news-slider')[0]
      let targetEl = document.getElementsByClassName('left')[index]
      let width = parseInt(this.$getStyle(targetEl, 'width')) - 40 + 'px'
      let fontSize = parseInt(this.$getStyle(targetEl, 'fontSize')) + 10
      el.style.position = 'absolute'
      el.style.width = width
      el.style.left = targetEl.offsetLeft + 20 + 'px'
      el.style.top = targetEl.offsetTop + fontSize + 'px'
      el.style.background = this.$randomColor(true, {b: 225}) //不改变色相
      this.leftActive_index = index
      this.$router.push('/catalog' + path)
    } //滑动特效
  }
}
</script>
<style lang="scss" scoped>
  #catalog{
    .fade-enter-active, .fade-leave-active {
      transition:  0.35s ;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .preview{
      width: 750px;
      height: 400px;
      background: #1b1b2a;
      color: #f5f5f5;
      display: flex;
      flex-direction:column-reverse;
      .img{
        position: absolute;
        z-index: 1;
        width: 100%;
        object-fit: cover;
      }
    }
    .describe{
      display: flex;
      justify-content:space-between;
      padding:0 30px ;
      position: absolute;
      z-index: 2;
      width: 100%;
      .label{
        line-height: 1rem;
        span {
          margin-right: 20px;
          border: 2px #ccc solid;
          padding: 0 3px;
          border-radius: 3px;
        }
      }
    }
    .slider{
      height: 75px;
      font-size: 30px;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      .news-slider{
        top: 0.5rem;
        left: 1.5rem;
/*        transition: 0.3s cubic-bezier(.28,1.73,1,-0.52) ;*/
        transition:0.3s ease-in;
        background: #4adfff;
        width: 30px;
        height: 5px;
        position: relative;
      }
      .bloke{
        width: 100px;
        height: 2px;
        background: yellow;
      }
      .left-active{
        color: rgb(240, 21, 109);
        font-weight: 800;
      }
      .left{
        width: 100px;
        text-align: center;
        margin-left: 50px;
        color: #a7a7a7;
        :before{
          content: '';
          display: block;
          width: 0;
          height: 0;
          clear: both;
        }
      }
    }
  }

</style>
