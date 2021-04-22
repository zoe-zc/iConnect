// 跳转更多
<template>
  <div class="link-more" @click="$emit('linkTo')">
    <div class="link-text" :style="{color:textColor ? textColor :''}">{{ text }}</div>
    <div class="out-box"><span class="link-icon iconfont iconarrow-right"></span></div>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    text: {
      // 跳转左侧文字
      type: String,
      require: true,
      default: 'Link To'
    },
    textColor: {
      // 文字颜色
      type: String,
      default: ''
    },
    linkTo: {
      type: Function,
      default: () => { }
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
.link-more {
  display: flex;
  align-items: center;
  cursor: pointer;
  .out-box {
    border: solid 1px #dce1e4;
    border-radius: 50%;
    color: #0085d0;
    .link-icon {
      font-size: 15px;
    }
  }
}
/* mobile */
@media (max-width: 768px) {
  .link-more {
    .link-text {
      font-size: px2rem(13);
      line-height: px2rem(18);
      font-weight: 500;
    }
    .out-box {
      width: px2rem(25);
      height: px2rem(25);
      margin-left: px2rem(5);
      display: flex;
      align-items: center;
      justify-content: center;
      .link-icon {
        font-size: px2rem(12);
      }
    }
  }
}

/* pc */
@media (min-width: 769px) {
  .link-more {
    .link-text {
      font-size: px2rem(15);
      font-weight: 500;
      line-height: px2rem(22);
    }
    .out-box {
      width: px2rem(30);
      height: px2rem(30);
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
