<template>
	<!--作业管理，主要用于分页器的封装学习-->
	<div class="workMent">
		<!-- 学生列表显示 -->
		<el-table :data="tableData" v-loading="loading" border style="width: 100%">
			<el-table-column prop="id" label="用户id" align="center"> </el-table-column>
			<el-table-column prop="userId" label="所属班级" align="center"> </el-table-column>
			<el-table-column prop="title" label="作业名称" align="center"> </el-table-column>
			<el-table-column prop="completed_text" label="完成情况" align="center"> </el-table-column>
		</el-table>
		<!-- 分页器  -->
		<Pageing :total="total" @page-change="handlePageChange" />
	</div>
</template>

<script>
import { getTableData } from "@/utils/table.js";
import Pageing from "../common/Pageing.vue";
export default {
	data() {
		return {
			tableData: [],
			total: 0,
			loading: true,
			col_process: ["completed"],
		};
	},
	components: {
		Pageing,
	},
	created() {},
	computed: {},
	methods: {
		handlePageChange(requestData) {
			this.currentPage_bak = requestData.page;
			this.loading = true;
			getTableData(this, "/works", requestData, this.col_process)
				.then(() => {
					this.loading = false;
				})
				.catch((err) => {
					this.$message("获取数据失败：" + err);
					this.loading = false;
				});
		},
	},
};
</script>

<style lang="scss">
.workMent {
	.el-pagination {
		text-align: center;
		margin-top: 10px;
	}
}
</style>
