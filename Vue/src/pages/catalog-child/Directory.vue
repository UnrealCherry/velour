<template>
    <div id="Diretory">
      <div class="synopsis">
      <b class="font25">作品简介:</b>
      <p>《航海王》是日本漫画家尾田荣一郎作画的少年漫画作品，在《周刊少年Jump》1997年34号开始连载。改编的电视动画《航海王》于1999年10月20日起在富士电视台首播。
        2012年5月11日，《航海王》获得第41回日本漫画家协会赏 [1]  。截至2015年6月15日，《航海王》以日本本土累计发行了3亿2086万6000本，被吉尼斯世界纪录官方认证为“世界上发行量最高的单一作者创作的系列漫画” [2]  。2017年7月21日，日本纪念日协会通过认证，将每年的7月22日设立为“ONE PIECE纪念日” [3]  。</p>
      </div>
      <div class="count">
        <div class="count-flex">
          <b class="font30">6.6亿</b>
          <div class="font15">人气值</div>
        </div>
        <div class="count-flex">
          <b class="font30">53万</b>
          <div class="font15">评论</div>
        </div>
        <div class="count-flex">
          <b class="font30">437张</b>
          <div class="font15">月票</div>
        </div>
      </div>
      <div class="comment" v-for="index in 10" :key="index">
        <div class="between">
          <b class="font40">精彩评论</b>
          <div class="opc">查看所有评论1000条</div>
        </div>
        <div class="surround">
          <div class="avatar"><img src="@/assets/covers/wxhead.jpg"/></div>
          <div class="name">如月</div>
        </div>
        <div class="content">当地时间4日,万玛才旦导演指导的新作《撞死了一只羊》在威尼斯电影节首映,这部影片由王家卫监制、泽东电影出品制作。 这部影片是改编自次仁罗布短篇... </div>
        <div class="bt">
          <div class="time">2018-06-10</div>
          <div class="time">
            <i class="icon-tablet"></i><span>10</span>
            <i class="icon-tablet"></i><span>50</span>
          </div>
        </div>
      </div>
      <!--comment组件-->
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
  #Diretory{
    text-align: left;
    padding: 20px;
    .font15{
      opacity: 0.5;
    }
    .count {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .count-flex{
    flex:1;
    text-align: center;
  }
}
    .comment{
      margin-top: 45px;
      padding: 0 10px;
      .bt{
        display: flex; justify-content: space-between;
        line-height: 50px;
        padding: 0 20px;
      }
      .content{
        padding: 10px 20px;
      }
      .surround{
        display: flex;
        .avatar{
          background: #94b2fb;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          overflow: hidden;
          object-fit: cover;
        }
        .name{
          line-height: 50px;
          margin-left: 20px;
        }
      }
      .between{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .opc{
          opacity: 0.65;
          line-height: 60px;
        }
      }
    }
  }
</style>
