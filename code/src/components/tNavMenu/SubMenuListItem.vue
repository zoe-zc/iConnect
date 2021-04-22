<template>
  <div class="page-view items cursor-pointer">
    <p class="title text-15" @click="toUrl">{{listInfo.title}}</p>
    <p class="info text-13 text-textA">{{listInfo.info}}</p>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    listInfo: {
      type: Object,
      default: () => ({
        title: 'Cloud Connect',
        info: 'Empowering you with a stable and secure network'
      })
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {
    toUrl() {
      if (this.listInfo.path) {
        this.navTo({ url: this.listInfo.path || '' })
      }

    }
  },
};
</script>
<style lang="scss" scoped>
.items {
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}
.title {
  margin-bottom: 4px;
}
</style>