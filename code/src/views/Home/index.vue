<template>
  <div class="page-view bg-red-400 border-green-500 rounded-2xl">
    <get-cookie />
    我是占位123323
  </div>
</template>
<script>
import GetCookie from "@/components/GetCookie"
export default {
  name: '',
  mixins: [],
  components: {GetCookie},
  // 页面数据部分
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 页面生命周期
  created() {},
  mounted() {},
  unmounted() {},
  // 页面内方法
  methods: {
    init() {
    }
  }
}
</script>
<style lang="scss" scoped>
// pc端
@media screen and (min-width: 992px) {
  .page-view {
    font-size: 28px;
  }
}
// 移动端
@media screen and (max-width: 992px) {
  .page-view {
    font-size: 32px;
  }
}
</style>
