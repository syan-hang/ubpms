<template>
	<div class="studentList">
		<!-- 查询姓名表单  -->
		<el-form :inline="true" :model="formInquire" class="form-inquire" size="small">
			<el-form-item label="姓名">
				<el-input v-model="formInquire.name" placeholder="请输入姓名查询"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="stuInqureByName">查询</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="stuReset">重置</el-button>
			</el-form-item>
		</el-form>
		<!-- 学生列表显示 -->
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
				<template slot-scope="scope">
					<el-button
						type="danger"
						size="mini"
						icon="el-icon-delete"
						@click="del(scope.row)"></el-button>
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
import { getStudentList, delStudentById } from "@/api/api.js";
export default {
	data() {
		return {
			tableData: [],
			currentPage: 1, // 当前页数
			pageSize: 10, // 每页条数
			total: 0, // 总数据条数
			formInquire: {
				name: "",
			},
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
					this.total = res.data.data.length;
					this.tableData.forEach((item) => {
						// 加字段而不是修改原数据
						item.sex_text = item.sex === 1 ? "男" : "女";
						item.state_text =
							item.state === "1" ? "已入学" : item.state === "2" ? "未入学" : "休学中";
					});
				}
			});
		},
		del(scope) {
			// console.log(scope);
			this.$confirm("此操作将删除该数据, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					delStudentById(scope.id).then((res) => {
						// console.log(res);
						if (res.data.status === 200) {
							this.$message({ message: "数据删除成功", type: "success" });
							this.getData();
						}
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		stuInqureByName() {
			// console.log(this.formInquire.studentName);
			this.getData(this.formInquire);
		},
		stuReset() {
			this.formInquire.name = "";
			this.getData();
		},
	},
};
</script>

<style lang="scss">
.studentList {
	.form-inquire {
		text-align: left;
		margin: 5px, 0;
	}
	.el-pagination {
		margin-top: 20px;
	}
}
</style>
