<template>
  <div class="vicon">
<div v-for="(icon, index) in icons_data" :key="index" :class="{'vicon-wrapper-active':iconRouter_index==index}" class="vicon-wrapper" @click="goRouter(icon.url,index)">
<div class="icon-f" :class="'icon-'+icon.svgName" ></div>
<div>{{icon.name}}</div>
</div>
    </div>
</template>
<script>
export default {
  name: 'icon',
  data () {
    return {
      iconRouter_index: 0,
      icons_data: [ {name: '首页',
        url: '/',
        svgName: 'read'
      }, {name: '书架',
        url: '/book',
        svgName: 'solution'
      }, {name: '贴吧',
        url: '/tieba',
        svgName: 'tablet'
      }, {name: '聊天室',
        url: '/chatroom',
        svgName: 'team'
      }, {name: '我的',
        url: '/user',
        svgName: 'user'
      }
      ]
    }
  },
  methods: {
    goRouter (IconUrl, index) {
      this.iconRouter_index = index
      this.$router.push(IconUrl)
    }
  }
}
</script>
<style lang="scss"  scoped>
  .vicon{
    .vicon-wrapper-active{
    color: white;
    background: #ccc;
    }
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    .vicon-wrapper{
      font-size: 20px;
      .icon-f{
        margin: 0 auto;
      }
        flex: 1;
    }
  }
</style>
