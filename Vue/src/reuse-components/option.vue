<template>
    <div id="reader-option">
      <div class="container">
        <!--标题-->
        <div class="top">1</div>
        <!--中间部分-->
        <div class="middle" @click.stop="middleControl($event)">
          <transition name="fadeLeft" >
          <div class="catalog" v-show="show_catalog">
            <mt-button v-for=" (c, index) in catalog" :key="index" class="page">{{c.chapter}}</mt-button>
         <!--   <mt-button class="close"><i class="fa fa-times">关闭</i></mt-button>-->
          </div>
          </transition>
        </div>
        <!--设置选项-->
        <transition name="fadeDown" >
        <div class="bottom" v-show="show_buttom">
          <div @click="openCatalog"><i class=" fa fa-book"></i><span>目录</span></div>
          <div @click="collect"><i class=" fa fa-heart-o"></i><span>收藏</span></div>
          <div @click="progress_s($event)"><i class=" fa fa-circle-o-notch"></i><span>进度条</span></div>
          <div ><i class=" fa fa-download"></i><span>下载</span></div>
          <div ><i class=" fa fa-cog"></i><span>设置</span></div>
        </div>
        </transition>
        <!--进度条-->
        <transition name="fadeUp" >
          <div class="range" v-show="!show_buttom">
            <mt-range v-model="rangeValue" style="width: 100%">
              <div slot="start">0</div>
              <div slot="end">100</div>
            </mt-range>
          </div>
        </transition>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    catalog_data: {
      type: Object
    }

  },
  mounted () {
    this.catalog = this.catalog_data.data.chapterList
    console.log(this.catalog_data)
  },
  data () {
    return {
      catalog: [],
      show_catalog: false,
      rangeValue:1,
      show_buttom:true
    }
  },
  methods: {
    middleControl (ev) {
      if (ev.target.className === 'middle') {
        if (this.show_catalog) { this.show_catalog = false; return false } //开关目录
        if (!this.show_buttom) { this.show_buttom = true; return false } //开关进度条
        this.show_buttom = true
        this.$store.commit('setValue', {
          open_option: false
        })
      }
    },
    openCatalog () {
      this.show_catalog = !this.show_catalog
    },
    collect (){

    },
    progress_s (ev) { this.show_buttom = !this.show_buttom }
  }
}
</script>
<style lang="scss" scoped>
#reader-option{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  .fadeLeft-enter-active, .fadeLeft-leave-active {
    transition:  0.35s ;
  }
  .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(-10vw) scale(0.5);
    opacity: 0;
  }

  .fadeDown-enter-active, .fadeDown-leave-active {
    transition:  0.35s ;
  }
  .fadeDown-enter, .fadeDown-leave-to /* .fade-leave-active below version 2.1.8 */ {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
    text-decoration: none;
  }

  .fadeUp-enter-active, .fadeUp-leave-active {
    transition:  0.35s ;
  }
  .fadeUp-enter, .fadeUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
  }


  .range{
    height: 150px;
    line-height: 150px;
    padding: 20px;
    background: #1d0037;
    display: flex;
    align-items: center;
  }
 .container{
   display: flex;
   width: 100vw;
   height: 100vh;
   color: white;
   flex-direction:column;
   justify-content:space-between;
   .top{
     height:50px ;
     line-height: 50px;
   }
   .middle{
     flex: 1;
/*     background: rgba(65, 105, 225, 0.21);*/
     .catalog{
       width: 80vw;
       height: 85vh;
       overflow-y: scroll;
       background: #fefffe;
       .close{
         width: 100%;
         height: 60px;
         font-size: 50px;
         color: #ff4e4e;
         margin: 50px 0;
         background: #f7ffbb;
       }
       .page{
         width: 100px;
         text-overflow: ellipsis;
         overflow-y: hidden;
         display: inline-flex;
         justify-content: center;
         align-items: center;
         background: #ededed;
         color: #363636;
         padding: 20px;
         height: 50px;
         border: 1px solid #fff;
         border-radius: 5px;
         margin: 10px;
       }
     }
   }
   .bottom{
     height: 150px;
     line-height: 100px;
     display: flex;
     justify-content:center;
     background: #18081e;
     div{
       width: 150px;
       height: 150px;
       text-align: center;
       line-height: 150px;
       padding: 10px;
       padding-top: 20px;
       display: flex;
       flex-direction: column;
       align-content: center;
       justify-content: center;
       i {
         font-size: 40px;
         padding: 0;
       }
       span{
         font-size: 20px;
         height: 60px;
         line-height: 60px;
       }
     }
   }
 }

}
</style>
