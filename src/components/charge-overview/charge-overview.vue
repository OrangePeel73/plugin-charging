<template>
  <div class="charge-overview">
    <div class="overview-wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="应用" name="first">
          <app-list :appList="appList"></app-list>
        </el-tab-pane>
        <el-tab-pane label="存储" name="second">
          <storage-list :storageList="storageList"></storage-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      appList: {
        // 下拉框
        selectList:{
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
        },
        // table
        tableList: [
          {
            appName: 'app1',
            colony: '集群1',
            tenant: 'default',
            CPU: '0.05核',
            memory: '50M',
            time: '10天4小时',
            pay: '200.10',
            createTime: '20天前',
          },
          {
            appName: 'app1',
            colony: '集群2',
            tenant: 'testing',
            CPU: '0.50核',
            memory: '50M',
            time: '10天4小时',
            pay: '200.10',
            createTime: '20天前',
          },
          {
            appName: 'app1',
            colony: '集群1',
            tenant: 'default',
            CPU: '0.05核',
            memory: '1G',
            time: '0天4小时',
            pay: '200.10',
            createTime: '1天前',
          },
        ], 
        totalPay: 1000.00     
      },
      storageList: {
        // 下拉框
        selectList:{
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
        },
        // table
        tableList: [
          {
            pvc: 'PVC1',
            colony: '集群1',
            tenant: 'default',
            volume: '10G',
            time: '10天4小时',
            pay: '200.10',
            createTime: '20天前',
          },
          {
            pvc: 'PVC2',
            colony: '集群2',
            tenant: 'testing',
            volume: '40G',
            time: '10天3小时',
            pay: '200.20',
            createTime: '10天前',
          },
          {
            pvc: 'PVC3',
            colony: '集群1',
            tenant: 'default',
            volume: '20G',
            time: '10天4小时',
            pay: '100.10',
            createTime: '20天前',
          },
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


<style lang="scss">
.charge-overview {
  background-color: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 4px 4px 0 0;

  .overview-wrap {
    
    .el-tabs {
      // tab —— header
      .el-tabs__header {
        .el-tabs__nav {
          margin-left: 1.5rem;
        .el-tabs__item {
          font-size: 18px;
          font-weight: 400 !important;
        }
      }
      }
    }
  }
}


</style>