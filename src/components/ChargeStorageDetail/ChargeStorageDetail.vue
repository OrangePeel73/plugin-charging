
<template>
  <div class="charge-storage-detail">
    <div class="dao-setting-layout">
      <div class="dao-setting-layout-title">
        <div class="dao-setting-title">
          {{ chargeStorage.title }}
        </div>
      </div>
      <div class="dao-setting-section">
        <div class="dao-setting-title">

          <div class="select-wrap">
            <!-- 集群下拉框 -->
            <dao-select
              class="select"
              v-model="selectedList.colony"
              placeholder="选择集群">
              <dao-option
                v-for="item in chargeStorage.colony"
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
                v-for="item in chargeStorage.tenants"
                :key="item.value"
                :value="item.value"
                :label="item.text">
              </dao-option>
            </dao-select>

            <!-- 应用下拉框 -->
            <dao-select
              class="select"
              v-model="selectedList.apps"
              placeholder="选择应用">
              <dao-option
                v-for="item in chargeStorage.apps"
                :key="item.value"
                :value="item.value"
                :label="item.text">
              </dao-option>
            </dao-select>
            

            <!-- 日期和时间选择器 -->
            <div class="block select">
              <el-date-picker
                v-model="selectedList.date"
                type="datetimerange"
                :picker-options="chargeStorage.dateList.pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <!-- { chargeStorage.dateList}} -->
          </div>

        </div>

        <div class="dao-setting-section">
          <div class="dao-setting-title">

            <!-- 搜索框 -->
            <div class="keyword">
              <dao-input
                v-model="selectedList.keyword"
                search
                show-helper-text
                placeholder="搜索">
              </dao-input>

              <!--所有消费 -->
              <button
                class="dao-btn"
                :disabled="true">
                所有消费
              </button>
            </div>
            
            <div class="tableList">
               <table class="dao-table flexrow">
                <thead>
                  <tr>
                    <th>存储名称</th>
                    <th>集群</th>
                    <th>租户</th>
                    <th>容量</th>
                    <th>支出</th>
                    <th>计费开始时间</th>
                    <th>计费结束时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in chargeStorage.tableList"
                    :key="row.storageName">
                    <td>{{ row.storageName }}</td>
                    <td>{{ row.colony }}</td>
                    <td>{{ row.tenant }}</td>
                    <td>{{ row.volume }}</td>
                    <td>￥{{ row.pay }}</td>
                    <td>{{ row.timeStart }}</td>
                    <td>{{ row.timeEnd }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>

export default {
  props: {
    chargeStorage: {type: Array, default: () => ({}) }
  },
  data () {
    return {
      // selected
      selectedList: {
        colony: 'all',
        tenants: 'allTenants',
        apps: 'allApps',
        data: '',
        keyword: ''
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.charge-app-detail {
  background-color: darkgoldenrod;
}

// 下拉框
.select-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;

  .select {
    margin: 0.5rem;
  }
}

// 搜索框keyword
.keyword {
  margin: 1rem 0;
}

// 去除daostyle默认的横线
.dao-setting-section>.dao-setting-title:after {
  height: 0;
}
</style>

