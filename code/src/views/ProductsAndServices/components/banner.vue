<template>
  <div class="banner-box">
    <img :src="imgUrl" alt="" srcset="" />
    <div class="info-text text-white relative flex flex-wrap md:flex-nowrap md:block">
      <p class="text">
        <span class="sub-title text-13">{{ subTitle }}</span>
        <span class="title text-48">{{ title }}</span>
        <span class="content text-15">{{ content }}</span>
      </p>
      <div class="btn-group">
        <span class="button bg-ispr text-13">Enquire Now</span>
        <span v-if="secondBtn" class="button bg-isWhite text-13 text-primary">{{ secondBtn }}</span>
      </div>
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
    imgUrl: {
      type: String,
      default: require('@/assets/img/banner/elements-image-contact-us@3x.png')
    },
    title: {
      type: String,
      default: 'Finance',
    },
    content: {
      type: String,
      // default: 'We provide guidance and assistance to meet your needs.',
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    secondBtn: {
      type: String,
      default: '',
    }
  },
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
<style lang="scss" scoped>
.text-white {
  color: #ffffff;
}
.relative {
  position: relative;
}
.text-13 {
  font-size: 13px;
}
.text-15 {
  font-size: 15px;
}
.text-48 {
  font-size: 48px;
}

.banner-box {
  padding: 131px 0 131px 245px;
  position: relative;
  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    bottom: 0;
  }
  .info-text {
    z-index: 2;
    .text {
      max-width: 786px;
      &>span {
        display: block;
      }
      .sub-title {
        margin-bottom: 12px;
      }
      .content {
        margin-top: 12px;
        max-width: 541px;
      } 
    }
  }
  .button {
    // margin-top: 38px;
    display: inline-block;
    width: 130px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-weight: 600;
    &:nth-of-type(n+2) {
      margin-left: 20px;
    }
  }
}
/* mobile */
@media (max-width: 768px) {
  .banner-box {
    padding: px2rem(63) px2rem(20);
    position: relative;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .info-text {
      z-index: 2;
      .sub-title {
        font-size: px2rem(11);
      }
      .title {
        margin-bottom: px2rem(5);
        font-size: px2rem(28);
      }
      .text {
        font-size: px2rem(13);
      }
    }
    .button {
      width: auto;
      // margin-top: px2rem(20);
      padding: 0 px2rem(14);
      text-align: center;
      height: px2rem(34); 
      font-size: px2rem(11);
      line-height: px2rem(35);
      display: inline-block;
    }
  }
}
</style>
