<template>
  <div class="charge-overview">
    <div class="overview-wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="应用" name="first">
          <app-list></app-list>
        </el-tab-pane>
        <el-tab-pane label="存储" name="second">
          <storage-list :storageList="storageList"></storage-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import AppList from '@/components/ChargeOverview/AppList/AppList.vue'
import StorageList from '@/components/ChargeOverview/StorageList/StorageList.vue'
export default {
  components: {
    AppList,
    StorageList
  },
  data () {
    return {
      activeName: 'first',
      storageList: {
        // 集群
        colony: [
          {
          value: 'allColony',
          text: '所有集群'
          },
          {
            value: 'first',
            text: '集群一'
          },
          {
            value: 'two',
            text: '集群二'
          }
        ], 
        // 租户
        tenants: [
          {
            value: 'allTenants',
            text: '所有租户'
          },
          {
            value: 'default',
            text: 'default'
          },
          {
            value: 'testing',
            text: 'testing'
          }
        ],
        totalPay: 300.30     
      },
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>


<style lang="scss" scoped>
.charge-overview {
  background-color: darkgoldenrod;

  .overview-wrap {
    
    .el-tabs {
      // tab —— header
      .el-tabs__header {

      }
    }
  }
}


</style>