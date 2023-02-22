<template>
	<div class="studentList">
		<el-table :data="compTable" border style="width: 100%">
			<el-table-column prop="name" label="姓名" align="center"> </el-table-column>
			<el-table-column prop="age" label="年龄" align="center"> </el-table-column>
			<el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
			<el-table-column prop="number" label="学号" align="center"> </el-table-column>
			<el-table-column prop="class" label="班级" align="center"> </el-table-column>
			<el-table-column prop="state_text" label="状态" align="center"> </el-table-column>
			<el-table-column prop="address" label="地址" align="center"> </el-table-column>
			<el-table-column prop="phone" label="手机号码" align="center"> </el-table-column>
			<el-table-column label="操作" align="center">
				<template>
					<el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
				</template>
			</el-table-column>
		</el-table>
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
import { getStudentList } from "@/api/api.js";
export default {
	data() {
		return {
			tableData: [],
			currentPage: 1, // 当前页数
			pageSize: 10, // 每页条数
			total: 0, // 总数据条数
		};
	},
	computed: {
		compTable() {
			return this.tableData.slice(
				(this.currentPage - 1) * this.pageSize,
				this.currentPage * this.pageSize
			);
		},
	},
	created() {
		this.getData();
	},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val;
			this.currentPage = 1;
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		getData(params) {
			getStudentList(params).then((res) => {
				console.log(res);
				if (res.status === 200) {
					this.tableData = res.data.data;
					this.total = res.data.total;
					this.tableData.forEach((item) => {
						// 加字段而不是修改原数据
						item.sex_text = item.sex === 1 ? "男" : "女";
						item.state_text =
							item.state === "1" ? "已入学" : item.state === "2" ? "未入学" : "休学中";
					});
				}
			});
		},
	},
};
</script>

<style lang="scss">
.studentList {
	.el-pagination {
		margin-top: 20px;
	}
}
</style>
