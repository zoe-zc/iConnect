<template>
  <div class="page-view">
    <site-navigation />
    <zNavMenu />
  </div>
</template>
<script>
import SiteNavigation from '@/components/tSiteNavigation'
import NavMenu from '@/components/Nav'
import zNavMenu from "@/components/zNavMenu"
export default {
  name: '',
  mixins: [],
  components: { NavMenu, SiteNavigation, zNavMenu },
  // 数据部分
  props: {},
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
<style lang="scss" scoped></style>
