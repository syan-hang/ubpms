<template>
	<div>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="sizes"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
		</el-pagination>
	</div>
</template>

<script>
export default {
	props: {
		total: Number,
		page: {
			type: Number,
			default: 1,
		},
		size: {
			type: Number,
			default: 10,
		},
		sizes: {
			type: Array,
			default: () => [5, 10, 20, 50, 100],
		},
	},
	data() {
		return {
			currentPage: this.page,
			pageSize: this.size,
		};
	},
	created() {
		this.$emit("page-change", this.requestData);
	},
	computed: {
		requestData() {
			return {
				page: this.currentPage,
				size: this.pageSize,
			};
		},
	},
	methods: {
		handleSizeChange(val) {
			this.currentPage = 1;
			this.pageSize = val;
			// this.$emit('page-size-change', this.pageSize);
			this.$emit("page-change", this.requestData);
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			// this.$emit('page-current-change', this.currentPage);
			this.$emit("page-change", this.requestData);
		},
	},
};
</script>
