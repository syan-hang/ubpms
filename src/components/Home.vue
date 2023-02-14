<template>
  <div class="hello">
    <h1>hello syan!</h1>
    <el-button>hello</el-button>
    <el-button type="primary">syan!</el-button>
    <el-button type="info">syan!</el-button>
    <el-button type="danger">syan!</el-button>
    <el-button type="success">syan!</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
