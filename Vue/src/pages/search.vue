<template>
<div id="search">
  <div class="search">
  </div>
  <div class="wrapper">
    <div class="rise-gray">
      <div class="font25" style="margin: 0;border: none">热门搜索</div>
   <mt-button type="default"  class="gray-icon font27"  :key="result.name"  v-for="result in hot_search"> {{result.name}}</mt-button>
    </div>
    <div class="rise-gray" style="padding: 0">
      <div class="font25">最近搜索<span class="float-right  icon-table"></span></div>
      <div class="font25"><b>蝴蝶</b><span class="float-right  icon-team"></span></div>
      <div class="font25"><b>昆虫</b><span class="float-right  icon-team"></span></div>
      <div class="font25"><b>小狗</b><span class="float-right  icon-team"></span></div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      hot_search: [{
        name: '我的1/4男友',
        url: 'www.123.com'
      }, {
        name: '金秘书怎么突然这样',
        url: 'www.123.com'
      }, {
        name: '中国经期先生',
        url: 'www.123.comasdas'
      }, {
        name: '接摸人',
        url: 'www.123.comasdas'
      }, {
        name: '女主播攻略1',
        url: 'www.123.comasdas'
      }, {
        name: '斗罗大陆',
        url: 'www.123.comasdas'
      }, {
        name: '猫妖的诱惑',
        url: 'www.123.comasdas'
      }, {
        name: '白领杀手',
        url: 'www.123.comasdas'
      }, {
        name: '应声入网!',
        url: 'www.123.comasdas'
      }, {
        name: '丑女的后宫法则',
        url: 'www.123.comasdas'
      }, {
        name: '恋恋不舍',
        url: 'www.123.comasdas'
      }, {
        name: '女主播攻略',
        url: 'www.123.comasdas'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  #search {
    .history-span{
      height: 100px;
      line-height: 100px;
      padding: 0 20px;
      padding-left: 30px;
      .float-right {
        margin-top: 20px;
      }
    }
    .rise-gray{
      text-align: left;
      margin-top: 10px;
      font-size: 30px;
      padding: 30px;
      .font25 {
        margin: 20px;
        padding: 10px;
        margin-bottom: 0;
        opacity: 0.8;
        border-bottom:1px #ccc solid ;
        padding-bottom: 30px;
      }
      .gray-icon {
        display: inline-block;
        height: 70px;
        text-align: center;
        flex: 1;
        color: #3e3e3e;
        margin-left: 20px;
        margin-top: 10px;
        background: #f4f4f4;
        line-height: 70px;
        .gray {
        }
      }
    }
  }
</style>
