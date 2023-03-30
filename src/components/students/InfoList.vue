<template>
	<div class="infoList">
		<!-- 按钮表单  -->
		<el-form :inline="true" class="btnForm" size="small">
			<!-- 新增按钮 -->
			<el-form-item>
				<el-button type="primary" size="small" @click="addStudentInfo()"> 新增 </el-button>
			</el-form-item>
			<!-- 刷新按钮 -->
			<el-form-item>
				<el-button type="primary" size="small" @click="refresh">刷新</el-button>
			</el-form-item>
		</el-form>

		<!-- 信息列表 -->
		<el-table :data="compTable" border style="width: 100%">
			<el-table-column prop="name" label="姓名" align="center"> </el-table-column>
			<el-table-column prop="age" label="年龄" align="center"> </el-table-column>
			<el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
			<el-table-column prop="father" label="父亲姓名" align="center"> </el-table-column>
			<el-table-column prop="mather" label="母亲姓名" align="center"> </el-table-column>
			<el-table-column prop="time" label="入校时间" align="center"> </el-table-column>
			<el-table-column prop="address" label="家庭地址" align="center"> </el-table-column>
			<el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button
						type="warning"
						size="mini"
						icon="el-icon-edit"
						@click="edit(scope.row)"></el-button>
					<el-button
						type="danger"
						size="mini"
						icon="el-icon-delete"
						@click="del(scope.row)"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 添加学生信息的对话框  -->
		<el-dialog
			:title="dialogState === 1 ? '添加学生信息' : '修改学生信息'"
			:visible.sync="dialogFormVisible"
			width="500px">
			<el-form :model="dialogForm" :rules="rules" ref="dialogForm">
				<el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
					<el-input v-model="dialogForm.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
					<el-radio v-model="dialogForm.sex" label="1">男</el-radio>
					<el-radio v-model="dialogForm.sex" label="2">女</el-radio>
				</el-form-item>
				<el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
					<el-input v-model="dialogForm.age" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
					<el-input v-model="dialogForm.father" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mather">
					<el-input v-model="dialogForm.mather" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
					<el-date-picker
						v-model="dialogForm.time"
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						type="date"
						placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="家庭地址" :label-width="formLabelWidth" prop="address">
					<el-input v-model="dialogForm.address" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
					<el-input v-model="dialogForm.phone" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="closeDialogInfo('dialogForm')">取 消</el-button>
				<el-button type="primary" @click="submitForm('dialogForm')">确 定</el-button>
			</div>
		</el-dialog>
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
import { getInfoList, delInfoByid, addInfo, fixInfo } from "@/api/api.js";
import { realNameRule, ageRule, optRealNameRule, phoneRule } from "@/utils/validate.js";
export default {
	data() {
		return {
			tableData: [],
			currentPage: 1,
			pageSize: 10,
			total: 0,
			dialogFormVisible: false,
			formLabelWidth: "80px",
			dialogForm: {
				name: "",
				sex: "1",
				age: "",
				father: "",
				mather: "",
				time: "",
				address: "",
				phone: "",
			},
			rules: {
				name: [{ required: true, validator: realNameRule, trigger: "blur" }],
				sex: [{ required: true }],
				age: [{ required: true, validator: ageRule, trigger: "blur" }],
				father: [{ validator: optRealNameRule, trigger: "blur" }],
				mather: [{ validator: optRealNameRule, trigger: "blur" }],
				time: [{ required: true, message: "请选择时间" }],
				address: [{ required: true, message: "请输入地址" }],
				phone: [{ validator: phoneRule, trigger: "blur" }],
			},
			dialogState: 1, // 1-> add , 2->fix
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
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		getData(params) {
			getInfoList(params).then((res) => {
				if (res.data.status === 200) {
					console.log(res);
					this.tableData = res.data.data;
					this.total = this.tableData.length;
					this.tableData.forEach((item) => {
						item.sex_text = item.sex === "1" ? "男" : "女";
					});
				}
			});
		},
		addStudentInfo() {
			this.dialogState = 1;
			this.$nextTick(() => {
				this.dialogForm = {
					name: "",
					sex: "1",
					age: "",
					father: "",
					mather: "",
					time: "",
					address: "",
					phone: "",
				};
			});
			this.dialogFormVisible = true;
		},
		del(scope) {
			// console.log(scope);
			this.$confirm("此操作将删除该数据, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					delInfoByid(scope.id).then((res) => {
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
		edit(scope) {
			this.dialogState = 2;
			this.$nextTick(() => {
				this.dialogForm = { ...scope };
			});
			this.dialogFormVisible = true;
		},
		closeDialogInfo(form) {
			this.dialogFormVisible = false;
			this.$refs[form].resetFields();
		},
		submitForm(form) {
			this.$refs[form].validate((valid) => {
				if (valid) {
					// console.log(this.dialogForm);
					if (this.dialogState === 1) {
						// 添加
						addInfo(this.dialogForm).then((res) => {
							// console.log(res);
							if (res.data.status === 200) {
								this.$message({ message: "添加学生信息成功！", type: "success" });
								this.getData();
								this.$refs[form].resetFields(); //清除校验信息，下次打开表单不会一开始就提示错误信息
							} else {
								this.$message({ message: "添加失败", type: "warning" });
							}
						});
					} else {
						// 修改
						fixInfo(this.dialogForm).then((res) => {
							if (res.data.status === 200) {
								this.$message({ message: "修改学生信息成功！", type: "success" });
								this.getData();
								this.$refs[form].resetFields(); //清除校验信息，下次打开表单不会一开始就提示错误信息
							} else {
								this.$message({ message: "修改失败", type: "warning" });
							}
						});
					}
					this.dialogFormVisible = false;
				}
			});
		},
		refresh() {
			this.getData();
			this.currentPage = 1;
			this.$message({ message: "刷新操作已执行", type: "success" });
		},
	},
};
</script>

<style lang="scss">
.infoList {
	.btnForm {
		text-align: left;
		.el-button {
			margin-bottom: 10px;
		}
	}
	.el-dialog {
		.el-form-item {
			text-align: left;
		}
	}
}
</style>
