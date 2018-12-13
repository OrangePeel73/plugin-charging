<template>
  <div class="dao-table-page table-pagination" v-if="pagination.total">
    <div class="dao-btn-group">
      <button class="dao-btn dao-icon ghost" @click="prev" :disabled="pagination.page <= 1">
        <svg class="icon">
          <use xlink:href="#icon_caret-left"></use>
        </svg>
      </button>
      <button class="dao-btn dao-icon ghost" @click="next" :disabled="pagination.page === totalPage">
        <svg class="icon">
          <use xlink:href="#icon_caret-right"></use>
        </svg>
      </button>
    </div>
    <span class="dao-table-page-span">
    {{ startNum }}
      -
    {{ endNum }}
    ，共 {{ pagination.total }} {{unit}}{{name}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'TablePagination',
  props: {
    // 名称
    name: {
      type: String,
      required: true,
    },
    // 单位
    unit: {
      type: String,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },
  computed: {
    startNum() {
      return ((this.pagination.page - 1) * this.pagination.perPage) + 1;
    },
    totalPage() {
      return Math.ceil(this.pagination.total / this.pagination.perPage);
    },
    endNum() {
      // 还没翻到最后一页
      if (this.pagination.page < this.totalPage) {
        return this.pagination.page * this.pagination.perPage;
      }
      // 翻到最后一页
      return ((this.pagination.page - 1) * this.pagination.perPage) +
      (this.pagination.total % this.pagination.perPage);
    },
  },
  methods: {
    prev() {
      this.pagination.page -= 1;
      this.$emit('update:pagination', this.pagination);
      this.$emit('prev');
    },
    next() {
      this.pagination.page += 1;
      this.$emit('update:pagination', this.pagination);
      this.$emit('next');
    },
  },
};

</script>

<style lang="scss" scoped>
.table-pagination{
  user-select: none;
}
</style>

