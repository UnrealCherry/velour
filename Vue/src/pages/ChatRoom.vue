<template>
    <div id="chat">
<!--<div class="nav">
  <span class="left"><i class="icon-user">  </i><span> 微信</span></span>
  <span class="username">Mengt.</span>
  <span class="right">adasd</span>
</div>-->
<div class="room">
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
</template>
<script>
export default {
  created () {
    console.log(this.$store.state.history)
  }
}
</script>
<style lang="scss" scoped>
#chat {
background: #F5F5F5;
color: #FEFEFE;
font-size: 30px;
.me {
margin-top: 500px;
  display: flex;
}
/*  .arrow{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #FAFAFA;
    transform: rotate(90deg) scale(0.5);
  }*/
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
    .left{
    margin-left: 20px;
    }
    .right{
      margin-right: 20px;
    }
    background: #0A0A0A;height: 80px;line-height: 80px;width: 100%}
  .room{
    padding: 0 20px;
    height: 10000px;
  }
}
</style>
