<template>
  <div id="app">
    <router-view/>
    <SwitchBar></SwitchBar><!--底部tab-->
  </div>
</template>

<script>
import SwitchBar from '@/reuse-components/SwitchBar'
export default {
  name: 'App',
  components: {
    SwitchBar
  }
}
</script>

<style lang="less" scoped>
#app {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga', 'kern';
  text-align: center;
  color: #2c3e50;
}
</style>
