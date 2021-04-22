<template>
  <section>
    <Header />
    <breadcrumb />
    <slot name="main"></slot>
    <Footer />
  </section>
</template>
<script>
import Footer from './Footer.vue';
import Header from "./Header"
import breadcrumb from "@/components/Breadcrumb"
export default {
  name: '',
  mixins: [],
  components: { Footer, Header, breadcrumb },
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
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>