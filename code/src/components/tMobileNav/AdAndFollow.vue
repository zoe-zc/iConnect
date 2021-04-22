<template>
  <div class="page-view">
    <div class="follow-tem flex items-center cursor-pointer">
      <div class="icon rounded-full flex justify-center items-center">
        <img src="@/assets/img/glyph-virtual-meeting-room@3x.png" />
      </div>
      <p class="content">Virtual Meeting Room</p>
    </div>
    <div class="follow-tem flex items-center cursor-pointer">
      <div class="icon rounded-full flex justify-center items-center">
        <img src="@/assets/img/glyph-chat@3x.png" />
      </div>
      <p class="content">Contact Us</p>
    </div>
    <!-- icon group -->
    <FollowUs isCol />
  </div>
</template>
<script>
import FollowUs from "@/components/tGlobleFooter/subCom/FollowUs"
export default {
  name: '',
  mixins: [],
  components: {FollowUs},
  // 数据部分
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {},
  unmounted() {},
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>
$rootMobileFontSize: 100;
@function px2rem($px) {
  @return $px / $rootMobileFontSize + rem;
}

.follow-tem{
  margin-bottom: px2rem(15) ;
  .icon{
    width: px2rem(32);
    height: px2rem(32);
     background-color: #0085d0;
     margin: 0 px2rem(10) 0 0;
     img{
       width: px2rem(20);
       height: px2rem(20);
     }
  }
}
  p.content{
    font-size: px2rem(15);
    line-height: px2rem(20);
  }

</style>
