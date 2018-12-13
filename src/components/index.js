import Vue from 'vue';

import ChargeAppDetail from './ChargeAppDetail/ChargeAppDetail.vue';
import ChargeStorageDetail from './ChargeStorageDetail/ChargeStorageDetail.vue';
import ChargeOverview from './ChargeOverview/ChargeOverview.vue';
import AppList from './ChargeOverview/AppList/AppList.vue';
import StorageList from './ChargeOverview/StorageList/StorageList.vue';

const _components = {
  // 按照字典顺序排序
  AppList,
  ChargeAppDetail,
  ChargeOverview,
  ChargeStorageDetail,
  StorageList
};

const components = {};

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key]);
})

export default components;