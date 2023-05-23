<template>
	<div>
		<h1>工业看板</h1>
		<div class="row">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">日常生产计划</div>
					<div class="card-body">
						<ul>
							<li v-for="plan in plans" :key="plan.id">
								{{ plan.name }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">指令</div>
					<div class="card-body">
						<ul>
							<li v-for="directive in directives" :key="directive.id">
								{{ directive.name }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">异常</div>
					<div class="card-body">
						<ul>
							<li v-for="exception in exceptions" :key="exception.id">
								{{ exception.name }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			plans: [
				{ id: 1, name: "生产计划A" },
				{ id: 2, name: "生产计划B" },
				{ id: 3, name: "生产计划C" },
			],
			directives: [
				{ id: 1, name: "指令A" },
				{ id: 2, name: "指令B" },
				{ id: 3, name: "指令C" },
			],
			exceptions: [
				{ id: 1, name: "异常A" },
				{ id: 2, name: "异常B" },
				{ id: 3, name: "异常C" },
			],
		};
	},
};
</script>
