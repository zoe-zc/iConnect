<template>
  <div class="banner-box">
    <img :src="bannerInfo.img" alt="" srcset="">
    <div class="info-text text-white relative">
      <p class="text text-24">
        <span class="title text-48">{{bannerInfo.title}}</span><br />
        {{bannerInfo.tips}}
      </p>
      <div class="button bg-ispr text-13" v-if="bannerInfo.buttonText">{{bannerInfo.buttonText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {
    bannerInfo: {
      type: Object,
      default: () => ({
        img: require('../../assets/img/banner/elements-image-contact-us@3x.png'),
        title: 'Contact Us',
        tips: 'We provide guidance and assistance to meet your needs.',
        buttonText: 'Enquire Now'
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.banner-box {
  height: 497px;
  padding-top: 160px;
  padding-left: 245px;
  position: relative;
  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 497px;
    bottom: 0;
    object-fit: cover;
  }
  .info-text {
    z-index: 2;
    .title {
      margin-bottom: 12px;
    }
  }
  .button {
    margin-top: 38px;
    width: 130px;
    text-align: center;
    height: 42px;
    line-height: 42px;
  }
}

/* mobile */
@media (max-width: 768px) {
  .banner-box {
    height: px2rem(290);
    padding-top: px2rem(82);
    padding-left: px2rem(20);
    position: relative;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: px2rem(290);
      bottom: 0;
      object-fit: cover;
    }
    .info-text {
      z-index: 2;
      .title {
        margin-bottom: px2rem(5);
        font-size: px2rem(28);
      }
      .text {
        line-height: 1.29;
        font-size: px2rem(17);
      }
    }
    .button {
      width: auto;
      margin-top: px2rem(10);
      padding: 0 px2rem(14);
      text-align: center;
      height: px2rem(35);
      font-size: px2rem(11);
      line-height: px2rem(35);
      display: inline-block;
    }
  }
}
</style>