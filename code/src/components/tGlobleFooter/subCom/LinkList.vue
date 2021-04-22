// 跳转列表
<template>
  <div class="list">
    <p class="title">{{ linkInfo.title }}</p>
    <p class="link-text" @click="toLink" v-for="(item, index) in linkInfo.list" :key="index">
      {{item.name}}
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    linkInfo: {
      type: Object,
      default: () => ({ title: 'About CMI iConnect', list: [] })
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
  methods: {
    toLink() { }
  }
}
</script>
<style lang="scss" scoped>
.list {
  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 14px;
  }
  .link-text {
    font-size: 15px;
    line-height: 22px;
    color: #6b787f;
    margin-bottom: 5px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/* mobile */
@media (max-width: 768px) {
  .list {
    margin-bottom: px2rem(25);
    .title {
      font-size: px2rem(12);
      font-weight: 500;
      line-height: px2rem(20);
      margin-bottom: px2rem(11);
    }
    .link-text {
      font-size: px2rem(13);
      line-height: px2rem(18);
    }
  }
}
</style>
