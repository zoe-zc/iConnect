<template>
    <transition name="custom-classes-transition" enter-active-class="animate__animated animate__slideInDown" leave-active-class="animate__animated animate__slideOutUp">
      <div  v-if="isShow" class="com-view bg-white cookie-box  items-center lg:flex lg:justify-between relative" :class="deviceType" >
        <div class="This-website-uses-co  msm:text-11 md:text-13" >
          This website uses cookies to provide you with the best experience. By continuing to use this website, you agree to
          its use of cookies.<router-link class="text-style-1" to="/home">Cookie Policy</router-link>
        </div>
        <div class="act-btn bg-ispr text-white text-11 cursor-pointer text-center" @click="isShow=false">Accept</div>
        <!-- close cookie popup -->
        <span class="close-btn absolute" @click="isShow=false"></span>
      </div>
    </transition>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {},
  data() {
    return {
      isShow:false
    }
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {
    setTimeout(() => {
      this.isShow = true
    }, 1500);
  },
  unmounted() {},
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>
.close-btn{
  width: 26px;
  height: 26px;
  background: url("../../assets/img/glyph-cancel@3x.png") center no-repeat;
  background-size: contain;
  top:20px;
  right: -201px;
}
.This-website-uses-co .text-style-1 {
  color: #0085d0;
  text-decoration: underline;
}
/* pc */
.pc {
  &.cookie-box {
    /* width: 948px; */
    max-width: calc(100vw - 492px);
    height: 100px;
    margin: 0 auto;
  }
  .This-website-uses-co {
    width: 512px;
    font-family: PingFangSC;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 18px;
    letter-spacing: normal;
    color: #6b787f;
  }

  .act-btn{
    width: 108px;
    height: 42px;
    line-height: 42px;
  }
}

/* mobile */
.mobile {
  &.cookie-box{
    padding:20px;
  }
  .close-btn{
    top:20px;
    right:14px ;
  }
  .act-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin-top: 12px;
  }
  .This-website-uses-co {
    width: 245px;
    font-family: PingFangSC;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 14px;
    letter-spacing: normal;
    color: #6b787f;
  }
}
</style>
