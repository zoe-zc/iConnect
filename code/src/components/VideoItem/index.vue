// video center item
<template>
  <div class="items relative text-13">
    <div class="cover relative">
      <img src="../../assets/img/news/new-cover.png" alt="" class="cover-img" />
      <div class="icon rounded-full absolute bg-ispr text-20 text-white flex items-center justify-center">
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <p class="title text-primary">CMI Corporate Video</p>
    <div class="exta text-18">China Mobile Global Partners Conference 2019 Opening Video</div>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    list: {
      type: Array,
      default: () => ([
        { text: 'mCloud User Manual' }
      ])
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.items {
  width: 460px;
  .cover {
    .cover-img {
      height: 266px;
      object-fit: cover;
    }
    .icon {
      right: 20px;
      bottom: 20px;
      width: 45px;
      height: 45px;
    }
  }
  .tilte {
    margin: 20px 0 8px;
  }
}

// 移动端
@media screen and (max-width: 768px) {
  .items {
    width: px2rem(280);
    .cover {
      .cover-img {
        height: px2rem(162);
        object-fit: cover;
      }
      .icon {
        right: px2rem(14);
        bottom: px2rem(14);
        width: px2rem(25);
        height: px2rem(25);
      }
    }
    .tilte {
      margin: px2rem(15) 0 px2rem(5);
    }
  }
}
</style>