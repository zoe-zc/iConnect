<template>
  <div class="page-view">
    <van-popup v-model="show" :style="{ height: '100%', width: '100%' }">
      <!-- logo and nav -->
      <LogoBar @colse="show = false"  @toSearch="toSearch"/>
      <div class="nav-list-box" v-for="(item, index) in navData" :key="index">
        <!-- title  -->
        <van-cell :title="item.title" :border="false" is-link center class="nav-title" />
        <!-- list child -->
        <van-cell-group title="" :border="false" v-for="(childItem, index) in item.children" :key="index">
          <van-cell :title="childItem.title" is-link center class="nav-item" />
        </van-cell-group>
      </div>
      <!-- follow us -->
      <div class="other-box">
        <FollowUs />
      </div>
      <!-- bottom bar -->
      <div class="toggle-bar text-primary flex items-center">
        <p class="title ">Customer Login</p>
        <div class="flex items-center lag-status">En<van-icon name="arrow" /></div>
        <div class="toggle-3d flex items-center"><van-switch v-model="checked" size="20px" /><span class="text">3D</span></div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import LogoBar from './LogoBar'
import FollowUs from './AdAndFollow'
export default {
  name: '',
  mixins: [],
  components: { LogoBar, FollowUs },
  // 数据部分
  props: {
    navData: {
      type: Array,
      default: () => [
        {
          title: 'About CMI',
          children: [
            { title: 'Corporate Information', children: [] },
            { title: 'News and Events', children: [] },
            { title: 'Global Resources', children: [] },
            { title: 'Movie Room', children: [] },
            { title: 'Company Procurement', children: [] },
            { title: 'Ad hoc Campaign', children: [] }
          ]
        }
      ]
    }
  },
  data() {
    return {
      show: true,
      checked:true
    }
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {},
  unmounted() {},
  // 方法
  methods: {
    toSearch(){
      console.log('tosearch')
    }
  }
}
</script>
<style lang="scss" scoped>
$rootMobileFontSize: 100;
@function px2rem($px) {
  @return $px / $rootMobileFontSize + rem;
}

/* mobile */
@media (max-width: 768px) {
  .other-box {
    padding: px2rem(50) 0 px2rem(50) px2rem(20);
  }
  .toggle-bar {
    font-size: px2rem(15);
    padding-left: px2rem(20);
    padding-bottom: px2rem(42);
    padding-top: px2rem(28);
    bottom: 0;
    .title {
      margin-right: px2rem(40);
    }
    .lag-status{
      margin-right: px2rem(40);
    }
    .toggle-3d{
      font-size: px2rem(11);
      span.text{
        padding-left: px2rem(5);
      }
    }
  }
  .nav-list-box {
    color: #000;
    font-weight: 500;
    /deep/ .van-cell {
      padding: px2rem(0) px2rem(20);
    }
    .van-cell__right-icon {
      color: #000;
      font-weight: bold;
    }
    .nav-title {
      height: px2rem(64);
      line-height: px2rem(64);
      font-size: px2rem(15);
      font-weight: 500;
      border-bottom: solid 1px #dce1e4;
    }
    .nav-item {
      line-height: px2rem(64);
      font-size: px2rem(15);
      font-weight: 500;
      line-height: 1.33;
      height: px2rem(20px);
      margin-top: px2rem(25);
    }
  }
}
</style>
