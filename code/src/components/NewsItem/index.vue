<template>
  <div class="news-items">
    <img src="../../assets/img/news/new-cover.png" alt="" class="block news-cover cursor-pointer">
    <div class="time-info text-13">
      <span class="text-primary">Insights</span>
      <el-divider direction="vertical"></el-divider>
      <span class="time text-textTab">2021.01.17</span>
    </div>
    <p class="text text-15 cursor-pointer">
      China Mobile International's Go mCloud Carnival Accelerates Enterprise Cloud Adoption with Various Incentives
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
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
.news-cover {
  margin-bottom: 20px;
  width: 296px;
  height: 167px;
  object-fit: cover;
}
.text {
  padding-top: 10px;
}

// 移动端
@media screen and (max-width: 768px) {
  .news-items {
    margin-bottom: px2rem(40);
  }
  .news-cover {
    margin-bottom: px2rem(15);
    width: px2rem(280);
    height: px2rem(159);
    object-fit: cover;
  }
  .time-info {
    font-size: px2rem(11);
  }
  .text {
    padding-top: px2rem(8);
    font-size: px2rem(13);
  }
}
</style>