<template>
 <basics-layout>
   <div slot="main">
      <router-view />
   </div>
   
 </basics-layout>
</template>
<script>

import BasicsLayout from '@/layouts/BasicsLayout.vue'

export default {
  name: '',
  mixins: [],
  components: {BasicsLayout},
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
  }
}
</script>
<style lang="scss" scoped>
// pc端
@media screen and (min-width: 992px) {
  /* .page-view {
    font-size: 28px;
  } */
}
// 移动端
@media screen and (max-width: 992px) {
  /* .page-view {
    font-size: 32px;
  } */
}
</style>
