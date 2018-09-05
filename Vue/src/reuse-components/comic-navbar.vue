<template>
<div id="ComicNavbar" ref="comic-slider-parent">
<div class="slider"></div>
<div v-for="(icon, index) in icons_data" :key="index" class="vicon-wrapper" @click="goRouter(icon.url,index)">
<div class="icon-f iconfont" :class="icon.svgName" ></div>
<div>{{icon.name}}</div>
</div>
    </div>
</template>
<script>
export default {
  props: {
    icons_data: {type: Array, require: true},
    duration: {type: String, require: false, default: '0.3s cubic-bezier(1,.73,.31,1.36) '},
    color_group: {type: Array, require: false},
    index: { type: Number, require: false, default: 0 }
  },
  data () {
    return {
      slider: 'element',
      tabnav: {
        w: 0,
        h: 0
      },
      iconRouter_index: 0
    }
  },
  watch: {
    index () { this.copySliderRun(this.index, this) }
  },
  mounted () {
    this.$nextTick(() => {
      this.slider = this.$refs['comic-slider-parent'].getElementsByClassName('slider')[0]
      let elesSelect = this.$refs['comic-slider-parent'].getElementsByClassName('vicon-wrapper')[0]
      let webkit = ['transition', '-moz-transition', '-webkit-transition', '-o-transition']
      for (let CssName of webkit) {
        this.slider.style[CssName] = this.duration
      }
      this.tabnav.w = elesSelect.offsetWidth
      this.tabnav.h = elesSelect.offsetHeight
      this.slider.style.width = this.tabnav.w + 'px'
      this.slider.style.height = this.tabnav.h + 'px'
      this.copySliderRun(this.index, this)
    })
  },
  methods: {
    goRouter (IconUrl, index) {
      let that = this
      setTimeout(() => {
        that.copySliderRun(index, that)
      }, 200)
      this.iconRouter_index = index
      this.$router.push(IconUrl)
    },
    copySliderRun (index, that) {
      if (!that.slider) {
        return false
      }
      that.slider.style.left = (this.tabnav.w * index) + 'px'
      that.slider.innerHTML = `<div  class="vicon-wrapper vicon-wrapper-active x-vion">
                                        <div class="icon-f  iconfont  ${that.icons_data[index].svgName}"></div>
                                         <div >${that.icons_data[index].name}</div></div>`
      let vionActive = that.slider.getElementsByClassName('vicon-wrapper-active')[0]
      if (that.color_group) {
        if (that.$typeOf(that.color_group) === 'array') {
          vionActive.style.background = that.color_group[parseInt(Math.random() * that.color_group.length)]
        }
      } else {
        vionActive.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16)
      }
    }
  }
}
</script>
<style lang="scss"  >
  #ComicNavbar{
    background: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items:center;/*垂直居中*/
    justify-content: center;/*水平居中*/
    .x-vion{
      font-size: 38px;
    }
    .slider {
      position: absolute;
      z-index: 2;
      display: flex;
      align-items:center;/*垂直居中*/
      justify-content: center;/*水平居中*/
    }
    .vicon-wrapper-active{
    font-size: 25px;
    color: white;
    background: #ccc;
    }
    .vicon-wrapper{
      font-size: 20px;
      height: 100px;
      .icon-f{
        margin: 0 auto;
        font-size: 30px;
        line-height: 50px;
      }
        flex: 1;
    }
  }
</style>
