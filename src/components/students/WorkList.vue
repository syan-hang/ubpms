<template>
	<div class="workList">
		<!-- 学生列表显示 -->
		<el-table :data="tableData" v-loading="loading" border style="width: 100%">
			<el-table-column prop="id" label="用户id" align="center"> </el-table-column>
			<el-table-column prop="userId" label="所属班级" align="center"> </el-table-column>
			<el-table-column prop="title" label="作业名称" align="center"> </el-table-column>
			<el-table-column prop="completed_text" label="完成情况" align="center"> </el-table-column>
		</el-table>
		<!-- 分页器  -->
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 20, 30, 50]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
		</el-pagination>
	</div>
</template>

<script>
import { getTableData } from "@/utils/table.js";
export default {
	data() {
		return {
			tableData: [],
			col_process: ["completed"],
			currentPage: 1,
			currentPage_bak: this.currentPage,
			pageSize: 10,
			total: 0,
			loading: true,
		};
	},
	created() {
		this.getData();
	},
	computed: {},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val;
			this.currentPage_bak = this.currentPage;
			this.currentPage = 1;
			this.loading = true;
			this.getData();
		},
		handleCurrentChange(val) {
			this.currentPage_bak = this.currentPage;
			this.currentPage = val;
			this.loading = true;
			this.getData();
		},
		getData() {
			getTableData(
				this,
				"/works",
				{ page: this.currentPage, size: this.pageSize },
				this.col_process
			).catch((err) => {
				this.$message("获取数据失败：" + err);
				this.loading = false;
				this.currentPage = this.currentPage_bak;
			});
		},
	},
};
</script>

<style lang="scss">
.workList {
	.el-pagination {
		text-align: center;
		margin-top: 10px;
	}
}
</style>
