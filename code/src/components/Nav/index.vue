<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white">
    <!-- pc menu -->
    <div class="nav-pc-box sm:hidden relative">
      <!-- list -->
      <div class="container">
        <ul class="menu-list flex justify-start text-15">
          <li class="item cursor-pointer" @mouseenter="showNavInfo = true">About CMI</li>
          <li class="item cursor-pointer">Global Resources</li>
          <li class="item cursor-pointer">iSolutions</li>
          <li class="item active cursor-pointer">iConnect</li>
          <li class="item cursor-pointer">hi-H Program</li>
          <li class="item cursor-pointer">CMLink</li>
          <li class="item cursor-pointer">JegoTrip</li>
        </ul>
      </div>
      <!-- content -->
      <transition  enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div class="content-box grid grid-cols-12 absolute bg-white z-10" v-if="showNavInfo">
          <div class="let-menu col-span-3">
            <ul class="text-15 font-medium">
              <li class="item flex justify-between active cursor-pointer">
                Why Us <span class="text-14 iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Promotion <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Products and Services <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Solutions <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Partners <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                News and Events <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Resource and Support <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                BSN <span class="iconfont iconarrow-right-bold"></span>
              </li>
              <li class="item flex justify-between cursor-pointer">
                Global Resources <span class="iconfont iconarrow-right-bold"></span>
              </li>
            </ul>
          </div>
          <div class="menu-info col-span-7 flex">
            <div class="info-panel flex">
              <div class="name">
                <p class="title text-primary">Why Us</p>
                <p class="text text-15">
                  One-stop infrastructure-based solutions, to expand your business globally.
                </p>
                <div class="to-more flex items-center text-15 text-primary cursor-pointer">
                  Learn More
                  <div class="out-box flex justify-center items-center">
                    <img src="../../assets/img/glyph-right@3x.png" />
                  </div>
                </div>
              </div>
              <!-- right -->
              <div class="right-content">
                <div class="right-info">
                  <img src="../../assets/img/block-img.png" alt="" class="block" />
                </div>
              </div>
            </div>
          </div>
          <!-- follow us -->
          <div class="right col-span-2 text-15 text-primary">
            <div class="follow-tem flex items-center cursor-pointer">
              <div class="icon rounded-full flex justify-center items-center">
                <img src="../../assets/img/glyph-virtual-meeting-room@3x.png" />
              </div>
              <p class="content">Virtual Meeting Room</p>
            </div>
            <div class="follow-tem flex items-center cursor-pointer">
              <div class="icon rounded-full flex justify-center items-center">
                <img src="../../assets/img/glyph-chat@3x.png" />
              </div>
              <p class="content">Contact Us</p>
            </div>
            <!-- icon group -->
            <p class="icon-title">Follow Us On</p>
            <div class="icon-group flex">
              <div class="item flex items-center justify-center cursor-pointer">
                <span class="iconfont iconinstagram"></span>
              </div>
              <div class="item flex items-center justify-center cursor-pointer">
                <span class="iconfont iconwechat"></span>
              </div>
              <div class="item flex items-center justify-center cursor-pointer">
                <span class="iconfont iconyoutube"></span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"
          >Dashboard</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
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
      showNavInfo: false, // 展示导航详情 
    }
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
@import '../../assets/style/base.scss';

nav{
  margin-bottom: 2px;
}
.nav-pc-box {
  .menu-list {
    height: 52px;
    line-height: 52px;
    .item {
      padding-right: 50px;
      color: #6b787f;
      &:hover {
        color: #000;
        &::after {
          display: block;
          content: '';
          height: 2px;
          width: 100%;
          background-color: #0085d0;
        }
      }
      &.active {
        color: #000;
        &::after {
          display: block;
          content: '';
          height: 2px;
          width: 100%;
          background-color: #0085d0;
        }
      }
    }
  }
  /* content-box */
  .content-box {
    border-top: 1px solid #dce1e4;
    top:54px;
    .let-menu {
      padding: 46px 35px 52px 50px;
      background-color: #f4f6f8;
      .item {
        line-height: 22px;
        padding-bottom: 18px;
        font-size: 15px;
        &:hover {
          color: #0085d0;
        }
        &.active {
          color: #0085d0;
        }
      }
    }
    /* menu-info */
    .menu-info {
      border-right: solid 1px #dce1e4;
      .info-panel {
        .name {
          font-size: 28px;
          line-height: 1.29;
          padding-left: 60px;
          padding-top: 80px;
          padding-right: 133px;
          flex: 0 0 475px;
          .title {
            margin-bottom: 14px;
          }
          .text {
            line-height: 22px;
          }
          .to-more {
            padding-top: 42px;
            .out-box {
              width: 30px;
              height: 30px;
              margin: 0 0 0 10px;
              padding: 8px 7px 7px 8px;
              border: solid 1px #dce1e4;
              border-radius: 50%;
              img {
                width: 15px;
                height: 15px;
              }
            }
          }
        }
        /* right-content */
        .right-content {
          .right-info {
            padding-top: 63px;
            padding-right: 107px;
            img {
              width: 256px;
              height: 256px;
            }
          }
        }
      }
    }
    /* right */
    .right {
      padding: 47px 0 0 39px;
      .follow-tem {
        padding-bottom: 30px;
        .icon {
          background-color: #0085d0;
          width: 40px;
          height: 40px;
          img {
            width: 24px;
            height: 24px;
          }
        }
        p.content {
          padding-left: 15px;
        }
      }
      /* icon-title */
      .icon-title {
        padding: 25px 0 15px 0;
        color: #000;
      }
      .icon-group {
        .item {
          width: 35px;
          height: 35px;
          border: solid 1px #dce1e4;
          color: #a2adb3;
          margin-right: 10px;
          span {
            font-size: 28px;
            color: #a2adb3;
          }
        }
      }
    }
  }
}
</style>
