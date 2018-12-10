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
      <charge-overview v-if="item === 1"></charge-overview>
      <charge-app-detail v-else-if="item === 2"></charge-app-detail>
      <charge-storage-detail v-else-if="item ===3"></charge-storage-detail>
      <!-- <router-view></router-view> -->
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
      items: [1,2,3],
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
        }],
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
  background-color: wheat;
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


