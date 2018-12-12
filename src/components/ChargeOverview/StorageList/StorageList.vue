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
          v-for="item in storageList.selectList.colony"
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
          v-for="item in storageList.selectList.tenants"
          :key="item.value"
          :value="item.value"
          :label="item.text">
        </dao-option>
      </dao-select>

      <div class="total-pay select">
        <span>本期总费用: {{ storageList.totalPay }}元</span>
      </div>

    </div>
    
    <!-- table -->
    <div class="tabel-storage-list">
      <table class="dao-table flexrow">
        <thead>
          <tr>
            <th>存储卷</th>
            <th>集群</th>
            <th>租户</th>
            <th>容量</th>
            <th>使用时长</th>
            <th>本期费用</th>
            <th>创建时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in storageList.tableList" :key="row.name">
            <td>{{ row.pvc }}</td>
            <td>{{ row.colony }} </td>
            <td>{{ row.tenant }}</td>
            <td>{{ row.volume }}</td>
            <td>{{ row.time }}</td>
            <td>{{ row.pay }}</td>
            <td>{{ row.creatTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

  // select
  .select-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    .select {
      // #f5f7fa
      margin: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  // table
  .tabel-storage-list {
    margin: 1.5rem 0 0 0;
  }
}
</style>


