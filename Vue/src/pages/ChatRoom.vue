<template>
<div id="chat">
<div class="nav" >
  <span class="left"><i class="icon-user">  </i><span> 微信</span></span>
  <span class="username">Mengt.</span>
  <span class="right">adasd</span>
</div>
<div class="chat-better-scroll" :style="{'height':$store.state.viewHeight}">
<div class="room"  >
<div class="me">
    <div class="wxhead ">
      <img src="../assets/covers/wxhead.jpg" class="img"/>
    </div>
    <div class="arrow"></div>
   <p></p>

  </div>
<div>
   <span>asdad</span>
    <span>dad</span>
    <DIV>NIMEN</DIV>
    <DIV>X</DIV>
 <div></div>
  </div>
</div>
</div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  created () {
    this.betterScrollGolbalInit()
  },
  data () {
    return {
      BScroll: false
    }
  },
  methods: {
    betterScrollGolbalInit () {
      let faceTransitionTime = 400, that = this
      this.$nextTick(() => {
        setTimeout(function () {
          if (that.BScroll) {
            that.BScroll.destroy()
            that.BScroll = false
          }
          that.BScroll = new BScroll('.chat-better-scroll', {
            click: false
          })
        }, faceTransitionTime) //使用tranistion时必须加上setTimeout才能重新安装一遍;
      })
    } //全局安装better-scroll
  }
}
</script>
<style lang="scss" scoped>
#chat {
color: #FEFEFE;
font-size: 30px;
  background: white;
.me {
  display: flex;
}
.wxhead {
  width:80px;
  height:80px;
  background: #a7a7a7;
}
  .nav{
    display: flex;
    justify-content:space-between;
    position: absolute;
    top:0;
    z-index: 999;
    .left{
    margin-left: 20px;
    }
    .right{
      margin-right: 20px;
    }
    background: #0A0A0A;height: 80px;line-height: 80px;width: 100%}
  .chat-better-scroll{

  }
  .room{
    padding: 0 20px;
    height: 5000px;
    padding-top: 80px;
    background: #F5F5F5;
    color: #1b1b2a;
  }
}
</style>
