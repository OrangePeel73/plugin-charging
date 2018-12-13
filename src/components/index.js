import Vue from 'vue';

import AppList from './charge-overview/app-list/app-list.vue';
import ChargeAppDetail from './charge-app-detail/charge-app-detail.vue';
import ChargeStorageDetail from './charge-storage-detail/charge-storage-detail.vue';
import ChargeOverview from './charge-overview/charge-overview.vue';
import DaoPagination from './dao-pagination/dao-pagination.vue';
import ElePagination from './ele-pagination/ele-pagination.vue';
import ModulePluginCharge from './module-plugin-charge/module-plugin-charge.vue';
import StorageList from './charge-overview/storage-list/storage-list.vue';

const _components = {
  // 按照字典顺序排序
  AppList,
  ChargeAppDetail,
  ChargeOverview,
  ChargeStorageDetail,
  DaoPagination,
  ElePagination,
  ModulePluginCharge,
  StorageList,
};

const components = {};

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key]);
})

export default components;