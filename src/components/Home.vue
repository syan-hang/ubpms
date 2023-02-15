<template>
  <div class="hello">
    <h1>hello syan!</h1>
    <el-button>hello</el-button>
    <el-button type="primary">syan!</el-button>
    <el-button type="info">syan!</el-button>
    <el-button type="danger">syan!</el-button>
    <el-button type="success">syan!</el-button>
    <i class="fa fa-user"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style lang="scss">
.hello{
  background: yellow;
  .el-button{
    background: red;
  }
}
</style>
