<template>
	<div class="card_pagination">
		<div class="pagination_control">
			<ul class="pagination" v-if="data.length > 5 || currentPage > 1">
				<!-- <li class="pagination-item" title="Первая страница">
					<button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
						&laquo;&laquo;
					</button>
				</li> -->

				<li class="pagination-item" title="Предыдущая страница">
					<button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
						&laquo;
					</button>
				</li>

				<li class="pagination-item" v-for="(page, index) in pages" :key="index">
					<button
					type="button"
					@click="onClickPage(page.number)"
					:disabled="page.isDisabled"
					:class="{ active: isPageActive(page.number) }">
						{{ page.number }}
					</button>
				</li>

				<li class="pagination-item" title="Следующая страница">
					<button type="button" @click="onClickNextPage" :disabled="isInLastPage">
						&raquo;
					</button>
				</li>
				<!-- <li class="pagination-item" title="Последняя страница">
					<button type="button" @click="onClickLastPage" :disabled="isInLastPage">
						&raquo;&raquo;
					</button>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	name: 'transactions-paginated',
	props: {
		data: {
			type: Array,
			required: true
		},
		maxVisibleButtons: {
			type: Number,
			required: false,
			default: 3
		},
		totalPages: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: true
		},
		perPage: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		},
	},
	computed: {
		paginatedData(){
			let start = (this.currentPage - 1) * this.perPage; let end = start + this.perPage
			return this.data.slice(start, end)
		},
		startPage() {
			if (this.currentPage === 1) return 1
			if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons -1)
			return this.currentPage - 1
		},
		endPage() { return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages) },
		pages() {
			let range = []
			for (let i = this.startPage; i <= this.endPage; i+= 1) {
				range.push({
					number: i,
					isDisabled: i === this.currentPage
				});
			}
			return range
		},
		isInFirstPage() { return this.currentPage === 1 },
		isInLastPage() { return this.currentPage === this.totalPages },
	},
	methods: {
		onClickFirstPage() {
			this.$emit('pagechanged', 1)
		},
		onClickPreviousPage() {
			this.$emit('pagechanged', this.currentPage - 1)
		},
		onClickPage(page) {
			console.log('Changed forward');
			this.$emit('pagechanged', page)
		},
		onClickNextPage() {
			this.$emit('pagechanged', this.currentPage + 1)
		},
		onClickLastPage() {
			this.$emit('pagechanged', this.totalPages);
		},
		isPageActive(page) {
			return this.currentPage === page
		},
		onPageChange(page) {
			this.currentPage = page;
		}
	},
}
</script>