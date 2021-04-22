<template>
  <div>
    <FooterLogo />
    <GlobleFooter />
    <sSubscribe />
  </div>
</template>
<script>
import FooterLogo from '@/components/tFooterLogo'
import GlobleFooter from '@/components/tGlobleFooter'
import sSubscribe from "@/components/sSubscribe"
export default {
  name: '',
  mixins: [],
  components: { GlobleFooter, FooterLogo, sSubscribe },
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
