<template>
  <div id="plugin-charge-home">
    <div class="charge-sidebar">

      <ul class="dao-list-group">
         <router-link
          v-for="i in menus"
          :key="i.name"
          :to="i.to">
          <li
            :class="['dao-list-item', {active: item === i.active}]"
            @click="item = i.active">
            {{i.name}}
            <span class="icon">
              <svg>
                <use xlink:href="#icon_caret-right"></use>
              </svg>
            </span>
          </li>
        </router-link>
      </ul>

      <!-- <ul class="dao-list-group">
        <li v-for="i in menus"
          :class="['dao-list-item', {active: item === i.active}]"
          :key="i.name"
          @click="item = i.active">
          {{i.name}}
          <span class="icon">
            <svg>
              <use xlink:href="#icon_caret-right"></use>
            </svg>
          </span>
        </li>
      </ul> -->
    </div>


    <div class="content-view">
      <!-- <charge-overview v-if="item === 1"></charge-overview>
      <charge-app-detail v-else-if="item === 2" :chargeApps="chargeApps"></charge-app-detail>
      <charge-storage-detail v-else-if="item ===3" :chargeStorage="chargeStorage"></charge-storage-detail> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ChargeOverview from '@/components/ChargeOverview/ChargeOverview.vue'
import ChargeAppDetail from '@/components/ChargeAppDetail/ChargeAppDetail.vue'
import ChargeStorageDetail from '@/components/ChargeStorageDetail/ChargeStorageDetail.vue'
export default {
  props: {
  },
  components: {
    ChargeOverview,
    ChargeAppDetail,
    ChargeStorageDetail
  },
  data () {
    return {
      item: 1,
      // items: [1,2,3],
      menus: [{
          active: 1,
          name: '计费概览',
          to: '/charge/overview',
        }, {
          active: 2,
          // name: this.$t('page.security.keyManagement'),
          name: '应用消费详情',
          to: '/charge/app-detail',
        },
        {
          active: 3,
          name: '存储消费详情',
          // adminRequired: true,
          to: '/charge/storage-detail',
        }
      ],
      chargeApps: {
        title: '应用消费详情',
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
            appName: 'app1',
            colony: '集群1',
            tenant: 'default',
            operation: '创建',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          },
          {
            appName: 'app2',
            colony: '集群1',
            tenant: 'default',
            operation: '更新配置',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          },
          {
            appName: 'app3',
            colony: '集群1',
            tenant: 'testing',
            operation: '创建',
            pay: '0.06',
            timeStart: '2018-09-04 11:00:05',
            timeEnd: '2018-09-08 11:00:05'
          }
        ]
      },
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
    }
  },
  computed: {
    // menus () {
    //   return [
        
    //   ]
    // }
  }
}
</script>

<style lang="scss" scoped>
#plugin-charge-home {
  width: 100%;
  height: 100%;
  background-color: #f1f3f6;
  display: flex;
  justify-content: space-around;
  // margin-top: 1rem;

  .charge-sidebar {
    width: 10rem;
    max-width: 12.5rem;
    margin-top: 1rem;

  }
  .content-view {
    margin-top: 1rem;
    width: calc(100% - 12.5rem);
  }
}
</style>


