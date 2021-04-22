// 三级菜单面板信息
<template>
  <div class="page-view flex text-15 flex-1">
    <div class="left-menu-list felx flex-col relative">
      <ul>
        <li class="item flex justify-between cursor-pointer" :class="{'active':activeMenuIndex === index}" @mouseenter="activeMenuIndex = index" v-for="(item,index) in list" :key="index">{{item.title}} <span class="text-14 iconfont iconarrow-right-bold"></span></li>
      </ul>
      <div class="full-btn text-white absolute" @click="navTo({url:subToPath})">
        <p class="item flex justify-between cursor-pointer">{{ list[activeMenuIndex].subMenu ? 'View all Products' : 'View All'}}<span class="text-14 iconfont iconarrow-right-bold"></span></p>
      </div>
    </div>
    <!-- right scorll content -->
    <transition v-if="list[activeMenuIndex].subMenu">
      <div class="submenu-list">
        <p class="title text-20">{{list[activeMenuIndex].subMenu.title}}</p>
        <div class="detail-list">
          <sub-menu-list-item v-for="(subItem,index) in list[activeMenuIndex].subMenu.list" :key="index" :listInfo="subItem" />
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
import SubMenuListItem from './SubMenuListItem.vue';
export default {
  name: '',
  mixins: [],
  components: { SubMenuListItem },
  // 数据部分
  props: ['list', 'subToPath'],
  data() {
    return {
      activeMenuIndex: 0,
    };
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {},
};
</script>
<style lang="scss" scoped>
.left-menu-list {
  padding: 50px 35px 0;
  flex: 0 0 291px;
  align-items: stretch;
  border-right: solid 1px #dce1e4;
  ul > li {
    width: 100%;
    margin-bottom: 20px;
    font-weight: 500;
    flex: 1;
    &.active {
      color: #0085d0;
    }
    /* &:hover {
      color: #0085d0;
    } */
  }
  .full-btn {
    width: 291px;
    height: 66px;
    line-height: 66px;
    background-color: #0085d0;
    margin: 0 -35px;
    padding: 0 35px;
    bottom: 0;
  }
}
/* submenu-list */
.submenu-list {
  flex: 1;
  padding: 45px 34px 10px;
  max-height: 450px;
  overflow-y: auto;
  .title {
    padding-bottom: 17px;
    border-bottom: 1px solid #dce1e4;
    margin-bottom: 19px;
  }
}
</style>