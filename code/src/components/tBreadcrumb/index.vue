<template>
  <div class="breadcrumb text-15 sm:text-11" :class="deviceType">
    <ul class="flex items-center">
      <li>iConnect</li>
      <li class="text-black">
        <span class="text-black iconfont iconarrow-right text-12 sm:text-4"></span>
      </li>
      <li class="text-black active">Why us</li>
    </ul>
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
    return {}
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {
    console.log(this)
  },
  unmounted() {},
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>
$rootMobileFontSize: 100;
@function px2rem($px) {
  @return $px / $rootMobileFontSize + rem;
}

.text-black {
  color: #000;
}
.text-12 {
  font-size: 12px;
}
.flex {
  display: flex;
  align-items: center;
}

/* pc */
@media (min-width: 769px) {
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
}

/* mobile */
@media (max-width: 768px) {
  .breadcrumb {
    font-size: px2rem(11);
    min-height: px2rem(30);
    padding-left: px2rem(20);
    li {
      padding-right: px2rem(2);
      span.iconfont {
        font-size: px2rem(4);
      }
    }
  }
}
</style>
