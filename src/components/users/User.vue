<template>
	<div>
		<el-tree :data="menus" show-checkbox node-key="id" :props="defaultProps" ref="tree"> </el-tree>
		<el-button @click="getCheckedNodes">通过node获取</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menus: [],
			defaultProps: {
				label: "name",
				children: "children",
			},
		};
	},
	created() {
		this.menus = [...this.$router.options.routes];
		// 实现动态路由的方法就是使用vue-router 中的addRoutes 方法
		// 思路：根据不同的用户登录上来，返回不同的路由权限菜单
		// 一般可以通过树形控件达到权限的精准控制，根据不同角色，勾选不同的菜单权限，将菜单数据提交给后端保存
		// 后端保存之后，在用户进行登录的时候就会查询该用户或该角色所拥有的菜单数据，最终进行动态的渲染展示。
		// 动态添加路由使用addRoutes方法
	},
	methods: {
		getCheckedNodes() {
			let arr = this.$refs.tree.getCheckedNodes();
			console.log(arr);
		},
	},
};
</script>
