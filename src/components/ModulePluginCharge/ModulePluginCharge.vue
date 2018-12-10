<template>
  <div id="plugin-charge">plugin
    <div class="dao-view-sidebar">
      <ul  class="dao-list-group" v-for="(group, index) in menus" :key="index">
        <router-link
          v-for="menu in group"
          :key="menu.name"
          class="dao-list-item capitalize"
          tag="li"
          v-if="!(menu.adminRequired && !userInfo.isAdmin)"
          :to="menu.to">
          {{menu.name}}
          <span class="icon">
            <svg><use xlink:href="#icon_caret-right"></use></svg>
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#plugin-charge {
  width: 100%;
  height: 100%;
  background-color: wheat;
}
</style>


