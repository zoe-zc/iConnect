<template>
  <div class="com-view" :class="{ 'is-couml': isCol }">
    <p class="icon-title">Follow Us On</p>
    <div class="icon-group flex">
      <div class="item flex items-center justify-center cursor-pointer">
        <span class="iconfont iconinstagram"></span>
      </div>
      <div class="item flex items-center justify-center cursor-pointer">
        <span class="iconfont iconwechat"></span>
      </div>
      <div class="item flex items-center justify-center cursor-pointer">
        <span class="iconfont iconyoutube"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    isCol: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>
$rootMobileFontSize: 100;
@function px2rem($px) {
  @return $px / $rootMobileFontSize + rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.com-view {
  display: flex;
  padding-top: 34px;
  align-items: center;
  &.is-couml {
    flex-direction: column;
    align-items: flex-start;
    .icon-title {
      font-size: px2rem(15);
      line-height: 1.33;
      margin-bottom: px2rem(14);
      font-weight: 500;
    }
    .icon-group {
      .item {
        width: px2rem(35);
        height: px2rem(35);
        span {
          font-size: px2rem(20);
        }
      }
    }
  }
  .icon-title {
    font-size: 15px;
    line-height: 22px;
    margin-right: 20px;
    font-weight: 500;
  }
  .icon-group {
    .item {
      width: 35px;
      height: 35px;
      cursor: pointer;
      margin-right: 10px;
      border: solid 1px #dce1e4;
      &:last-child {
        margin-right: 0;
      }
      span {
        font-size: 18px;
        color: #a2adb3;
      }
    }
  }
}
/* mobile */
@media (max-width: 768px) {
  .com-view {
    padding-top: px2rem(25);
    .icon-title {
      font-size: px2rem(13);
      line-height: px2rem(18);
      margin-right: px2rem(22);
      font-weight: 500;
    }
    .icon-group {
      .item {
        width: px2rem(35);
        height: px2rem(35);
        cursor: pointer;
        margin-right: px2rem(15);
        border: solid 1px #dce1e4;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
