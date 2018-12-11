<template>
  <div class="storage-list-wrap">
    <!-- 下拉框 -->
    <div class="select-wrap">
      <!-- 集群下拉框 -->
      <dao-select
        class="select"
        v-model="selectedList.colony"
        placeholder="选择集群">
        <dao-option
          v-for="item in storageList.colony"
          :key="item.value"
          :value="item.value"
          :label="item.text">
        </dao-option>
      </dao-select>

      <!-- 租户下拉框 -->
      <dao-select
        class="select"
        v-model="selectedList.tenants"
        placeholder="选择租户">
        <dao-option
          v-for="item in storageList.tenants"
          :key="item.value"
          :value="item.value"
          :label="item.text">
        </dao-option>
      </dao-select>

      <div class="total-pay">
        <span>本期总费用: {{ storageList.totalPay }}</span>
      </div>

    </div>
    
    <!-- table -->
    <div class="tabel-storage-list">select</div>
  </div>
</template>

<script>
export default {
  props: {
    storageList: {type: Object, default: () => ({}) }
  },
  data () {
    return {
      
      // selected
      selectedList: {
        colony: 'allColony',
        tenants: 'allTenants',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.storage-list-wrap {
  .selcet-wrap {

  }
}
</style>


