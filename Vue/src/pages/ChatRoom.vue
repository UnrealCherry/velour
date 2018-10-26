<template>
<div id="chat">
<div class="nav" >
  <span class="left" ><i class="icon-user">  </i><span> </span></span>
  <span class="username">Mengt.</span>
  <span class="right"><input class="useridOfIndex" type="text" /></span>
</div>
<div class="chat-better-scroll" :style="{'height':(parseInt($store.state.viewHeight)-50)+'px'}">
<div class="room"  >
  <div class="html" v-for="(talker, index) in  conversition" :key="index">
<div class="time">{{talker.time}}</div>
    <!--对方对话框-->
<div :class="talker.isMe?'she':'me'">
    <div class="wxhead ">
      <img :src="talker.avtar" class="img"/>
    </div>
  <div class="wx-content ">
    <div class="left">
      <p class="talk-p">{{talker.msg}}</p>
    </div>
  </div>
  </div>
  </div>
</div>
</div>
<input style="height: 50px;width: 100%" type="text" @keyup.enter="goChat($event)" placeholder=""/>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import io from 'socket.io-client'
import { server } from '../../_globalOptions.js'
export default {
  created () {
    this.betterScrollGolbalInit()
    this.socket = io(server)
    this.socketIoInit(this.socket)
  },
  data () {
    return {
      BScroll: false,
      conversition: [ ],
      socket: null,
      userId: null
    }
  },
  updated () {
    // 输入信息自动滑动
    let d = document
    let room = d.getElementsByClassName('room')[0]
    let lastdIS = room.offsetHeight - d.getElementsByClassName('chat-better-scroll ')[0].offsetHeight
    if (lastdIS > 0) {
      this.BScroll.scrollTo(0, -lastdIS - 100, 300)
      this.BScroll.startY = -lastdIS - 100
      this.BScroll.refresh()
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
    }, //全局安装better-scroll
    renderMeOrHe (myid) {
      for (let i = 0; i < this.conversition.length; i++) { if (this.conversition[i].userId === myid) { this.$set(this.conversition[i], 'isME', true) } }
    },
    goChat (ev) {
      let msg = ev.target.value
      let u = document.getElementsByClassName('useridOfIndex')[0]
      this.userId = u.value
      this.socket.emit('receive _client_chat_data', {userId: this.userId, userName: 'A', msg: msg, avtar: './static/img/wxhead.8052ae7.jpg', isMe: false, timer: (new Date()).toLocaleString()})
      ev.target.value = ''
    },
    socketIoInit (scoket) {
      //监听服务器传过来的数据
      let that = this
      scoket.on('receive _server_chat_data', function (data) {
        console.log(data, that.userId)
        if (data.userId !== that.userId) {
          data.isMe = true
        }
        that.conversition.push(data)
        console.log(data, '服务器传过来的数据')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#chat {
color: #FEFEFE;
font-size: 30px;
background: #F5F5F5;
.she {
  display: flex;
  margin-top: 20px;
  .wxhead {
    width:80px;
    height:80px;
    background: #a7a7a7;
  }
  .wx-content {
    width: 600px;
    margin-left: 30px;
    .left{
      min-height: 40px;
      position: relative;
      display: table;
      text-align: center;
      border-radius: 5px;
      background-color: #9EEA6A;
    }
    .right{      /*使左右的对话框分开*/
      margin-right: 20px;
    }
    .left > p{    /*使内容居中*/
      display: table-cell;
      vertical-align: middle;
      padding: 20px;
    }
    .left:before{   /*用伪类写出小三角形*/
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      position: absolute;
      top: 11px;
    }
    /*分别给左右两边的小三角形定位*/
    .left:before{
      border-right: 8px solid #9EEA6A;
      left: -16px;
    }
  }
}
.me{
    display: flex;
    margin-top: 20px;
    flex-direction:  row-reverse ;
    .wxhead {
      width:80px;
      height:80px;
      background: #a7a7a7;
    }
    .wx-content {
      width: 600px;
      margin-left: 30px;
      display: flex;
      justify-content: flex-end;
      .left{
        min-height: 40px;
        position: relative;
        display: table;
        text-align: center;
        border-radius: 5px;
        background-color: #9EEA6A;
      }
      .left{      /*使左右的对话框分开*/
        margin-right: 20px;
      }
      .left > p{    /*使内容居中*/
        display: table-cell;
        vertical-align: middle;
        padding: 20px;
      }
      .left:after{   /*用伪类写出小三角形*/
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        position: absolute;
        top: 11px;
      }
      /*分别给左右两边的小三角形定位*/
      .left:after{
        border-left: 8px solid #9EEA6A;
        right: -16px;
      }

    }
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
  .room{
    padding: 0 20px;
    padding-top: 80px;
    background: #F5F5F5;
    color: #1b1b2a;
    transition: 1s;
  }
}
</style>
