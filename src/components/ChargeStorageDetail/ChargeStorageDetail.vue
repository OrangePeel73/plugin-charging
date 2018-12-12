
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
                  <tr class="theader">
                    <th class="th-storageName">
                      <span> 存储名称 </span>
                    </th>
                    <th class="th-colony">
                      <span> 集群 </span>
                    </th>
                    <th class="th-tenant">
                      <span> 租户 </span>
                    </th>
                    <th class="th-volume">
                      <span> 容量 </span>
                    </th>
                    <th class="th-pay">
                      <span> 支出 </span>
                    </th>
                    <th class="th-timeStart">
                      <span> 计费开始时间 </span>
                    </th>
                    <th class="th-timeEnd">
                      <span> 计费结束时间 </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in chargeStorage.tableList"
                    :key="row.storageName">
                    <!-- 存储卷名称 -->
                    <td class="item-storage">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.storageName">
                        {{ row.storageName }}
                      </div>
                    </td>
                    <!-- 集群 -->
                    <td class="item-colony">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.colony">
                        {{ row.colony }}
                      </div>
                    </td>
                    <!-- 租户 -->
                    <td class="item-tenant">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.tenant">
                        {{ row.tenant }}
                      </div>
                    </td>
                    <!-- 容量 -->
                    <td class="item-volume">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.volume">
                        {{ row.volume }}
                      </div>
                    </td>
                    <!-- 支出 -->
                    <td class="item-pay">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="'￥'+row.pay + '元'">
                        ￥{{ row.pay }}
                      </div>
                    </td>
                    <!-- 计费开始时间 -->
                    <td class="item-timeStart">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.timeStart">
                        {{ row.timeStart }}
                      </div>
                    </td>
                    <!-- 计费结束时间 -->
                    <td class="item-timeEnd">
                      <div class="item-storageDetail" v-dao-tooltip:top.ellipsis="row.timeEnd">
                        {{ row.timeEnd }}
                      </div>
                    </td>
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
    // chargeStorage: {type: Object, default: () => ({}) }
  },
  data () {
    return {
      chargeStorage: {
        title: '存储消费详情',
        // 集群
        colony: [
          {
          value: 'all',
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
        // 应用
        apps: [
          {
                value: 'allApps',
                text: '所有应用'
              },
              {
                value: 'app1',
                text: 'APP1'
              },
              {
                value: 'app2',
                text: 'APP2'
              }
        ],
        dateList: {
          date: '',
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
        },
        tableList: [
          {
            storageName: 'storage1',
            colony: '集群1',
            tenant: 'default',
            volume: '10G',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          },
          {
            storageName: 'storage1',
            colony: '集群1',
            tenant: 'default',
            volume: '20G',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          },
          {
            storageName: 'storage1',
            colony: '集群1',
            tenant: 'testing',
            volume: '30G',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          }
        ]
      },
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

