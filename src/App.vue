<template>
	<div id="app">
		<!-- 路由出口-->
		<router-view></router-view>
	</div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
	name: "App",
	components: {
		// Home
	},
};
</script>

<style lang="scss">
@import url("./assets/css/reset.css");
html,
body {
	height: 100%;
	width: 100%;
}
#app {
	height: 100%;
	width: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
