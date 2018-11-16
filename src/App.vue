<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  html,body,#app{
    height: 100%;
    width: 100%;
  }
  .login-wrapper{
    .el-input__inner{
      border: none !important;
    }
  }
</style>
