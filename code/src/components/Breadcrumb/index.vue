<template>
  <!-- <div class="breadcrumb text-15 sm:text-11">
    <ul class="flex items-center">
      <li>iConnect</li>
      <li class="text-black">
        <span class="text-black iconfont iconarrow-right text-12 sm:text-4"></span>
      </li>
      <li class="text-black active">Why us</li>
    </ul>
  </div> -->
  <div class="breadcrumb text-15 sm:text-11" v-if="name !=='iSolutions'">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to=" item.name != name ? { path: item.path || '/' } : null ">
        <span class="text-black">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {},
  data() {
    return {
      name: "",
      breadList: []
    };
  },
  computed: {},
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  // 生命周期
  created() {
    this.getBreadcrumb()
  },
  mounted() {
    // console.log(this)
  },
  unmounted() { },
  // 方法
  methods: {
    getBreadcrumb() {

      this.breadList = []
      // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

      this.name = this.$route.name
      this.$route.matched.forEach((item) => {
        // item.name !== 'index' && this.breadList.push(item)
        this.breadList.push(item)
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.el-breadcrumb__inner.is-link {
  .text-black {
    color: #6b787f;
    font-weight: 500;
    font-size: 15px;
  }
}
/* pc */
.breadcrumb {
  padding-left: 52px;
  height: 40px;
  border-bottom: solid 1px #dce1e4;
}
li {
  color: #6b787f;
  padding-right: 12px;
  &.active {
    color: #000;
  }
}

/* 移动端 */
.mobile {
  &.breadcrumb {
    min-height: px2rem(30);
    padding-left: px2rem(20);
    li {
      padding-right: px2rem(2);
    }
  }
}
</style>