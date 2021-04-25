// home 主体内容
<template>
  <div class="page-view">
    <nav-menu />
    <banner />
    <div class="h-1 sm:h2"></div>
    <product-services />
    <NewsAndEvents />
    <!-- <GlobalResourcesEarth /> -->
  </div>
</template>
<script>
import Banner from "@/components/tTopBanner"
import NavMenu from '@/components/tNavMenu'
import LinkMore from '@/components/tLinkMore'
import zNavMenu from "@/components/zNavMenu"
import MobileNavMenu from "@/components/tMobileNav"
import ProductServices from "@/components/ProductServices"
import NewsAndEvents from "@/components/NewsAndEventsCom"
import GlobalResourcesEarth from "@/components/GlobalResourcesEarth"

export default {
  name: '',
  mixins: [],
  components: {
    Banner,
    NavMenu,
    LinkMore,
    zNavMenu,
    MobileNavMenu,
    ProductServices,
    NewsAndEvents,
    GlobalResourcesEarth
  },
  // 数据部分
  props: {},
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
    myTest() {
      console.log(123)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>