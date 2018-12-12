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
            <th class="th-pvc"><span>存储卷</span></th>
            <th class="th-colony"><span>集群</span></th>
            <th class="th-tenant"><span>租户</span></th>
            <th class="th-volume"><span>容量</span></th>
            <th class="th-time"><span>使用时长</span></th>
            <th class="th-pay"><span>本期费用</span></th>
            <th class="th-createTime"><span>创建时间</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in storageList.tableList" :key="row.name">
            <!-- 存储名称 -->
            <td class="item-pvc">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.pvc">
                {{ row.pvc }}
              </div>
            </td>
            <!-- 集群 -->
            <td class="item-colony">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.colony">
                {{ row.colony }}
              </div>
            </td>
            <!-- 租户 -->
            <td class="item-tenant">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.tenant">
                {{ row.tenant }}
              </div>
            </td>
            <!-- 容量 -->
            <td class="item-volume">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.volume">
                {{ row.volume }}
              </div>
            </td>
            <!-- 使用时间 -->
            <td class="item-time">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.time">
                {{ row.time }}
              </div>
            </td>
            <!-- 本期费用 -->
            <td class="item-pay">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="'￥' + row.pay + '元'">
                ￥{{ row.pay }}元
              </div>
            </td>
            <!-- 创建时间 -->
            <td class="item-createTime">
              <div class="item-overview" v-dao-tooltip:top.ellipsis="row.createTime">
                {{ row.createTime }}
              </div>
            </td>
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
    padding: 1.5rem;
  }
}
</style>


