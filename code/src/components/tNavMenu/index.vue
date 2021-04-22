// 公共导航菜单
<template>
  <nav class="bg-white">
    <!-- pc menu -->
    <div class="nav-pc-box sm:hidden relative">
      <!-- list -->
      <div class="container pc-nav-content">
        <ul class="menu-list flex justify-start text-15">
          <li class="item cursor-pointer" @mouseenter="showNavInfo = true">{{$t('menu.aboutcmi')}}</li>
          <li class="item cursor-pointer">{{$t('menu.globalresources')}}</li>
          <li class="item cursor-pointer active" @mouseenter="showNavInfo = true">iSolutions</li>
          <li class="item cursor-pointer ">iConnect</li>
          <li class="item cursor-pointer">hi-H Program</li>
          <li class="item cursor-pointer" @click.stop="navToOther('https://www.cmlink.com/')">CMLink</li>
          <li class="item cursor-pointer" @click="navToOther('https://www.jegotrip.cn/#/')">JegoTrip</li>
        </ul>
      </div>
      <!-- content -->
      <!-- @mouseleave="showNavInfo = false" -->
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div @mouseleave="showNavInfo = false" class="content-box grid grid-cols-12 absolute bg-white z-10" v-if="showNavInfo">
          <!-- left menu -->
          <div class="let-menu col-span-3">
            <ul class="text-15 font-medium">
              <li class="item flex justify-between cursor-pointer" @mouseenter="activeLeftMenuIndex = index" :class="{'active':activeLeftMenuIndex === index}" v-for="(item,index) in menuData.iSolutions" :key="index+'1'">
                {{item.name}} <span class="text-14 iconfont iconarrow-right-bold"></span>
              </li>
            </ul>
          </div>
          <!-- menu -->
          <div class="menu-info col-span-7 flex">
            <div class="info-panel flex">
              <template v-if="activeLeftMenuIndex === 0">
                <!-- why us -->
                <div class="name">
                  <p class="title text-primary">Why Us</p>
                  <p class="text text-15">
                    One-stop infrastructure-based solutions, to expand your business globally.
                  </p>
                  <div class="to-more flex items-center text-15 text-primary cursor-pointer" @click.stop="navTo">
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
              </template>
              <!-- Promotion -->
              <template v-if="activeLeftMenuIndex === 1">
                <!-- Promotion -->
                <div class="name">
                  <p class="title text-primary"> Promotion </p>
                  <!-- <p class="text text-15">
                    One-stop infrastructure-based solutions, to expand your business globally.
                  </p> -->
                  <div class="to-more flex items-center text-15 text-primary cursor-pointer" @click.stop="navTo({url:''})">
                    Learn More
                    <div class="out-box flex justify-center items-center">
                      <img src="../../assets/img/glyph-right@3x.png" />
                    </div>
                  </div>
                </div>
                <!-- right -->
                <div class="right-content ">
                  <div class="right-info ">
                    <img src="../../assets/img/block-img.png" alt="" class="block" />
                  </div>
                </div>
              </template>
              <!-- Products and Services -->
              <template v-if="activeLeftMenuIndex === 2 || activeLeftMenuIndex === 4  || activeLeftMenuIndex === 3">
                <sub-menu-panel :list="menuData.iSolutions[activeLeftMenuIndex].subMenu" :subToPath="menuData.iSolutions[activeLeftMenuIndex].path || null" />
              </template>
              <!-- resource Support -->
              <template v-if="activeLeftMenuIndex === 6">
                <div class="name">
                  <p class="title text-primary">Resource & Support</p>
                  <!-- <p class="text text-15">
                    One-stop infrastructure-based solutions, to expand your business globally.
                  </p> -->
                  <div class="to-more flex items-center text-15 text-primary cursor-pointer" @click.stop="navTo({url:'/resourceAndSupport'})">
                    View All
                    <div class="out-box flex justify-center items-center">
                      <img src="../../assets/img/glyph-right@3x.png" />
                    </div>
                  </div>
                </div>
                <!-- right -->
                <div class="right-content ">
                  <div class="right-info ">
                    <img src="../../assets/img/block-img.png" alt="" class="block" />
                  </div>
                </div>
              </template>
              <!-- bsn -->
              <template v-if="activeLeftMenuIndex === 7 || activeLeftMenuIndex === 8 ">
                <div class="name">
                  <p class="title text-primary">{{activeLeftMenuIndex === 7 ? 'BSN' : 'Global Resources'}}</p>
                  <p class="text text-15" v-if="activeLeftMenuIndex === 8">
                    We have a wealth of network resources globally.
                  </p>
                  <div class="to-more flex items-center text-15 text-primary cursor-pointer" @click.stop="toBsnAndG(activeLeftMenuIndex)">
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
              </template>
              <!-- news -->
              <template v-if="activeLeftMenuIndex === 5 ">
                <div class="name">
                  <p class="title text-primary">News and Events</p>
                  <p class="text text-15">
                    Learn about the latest news of China Mobile International.
                  </p>
                  <div class="to-more flex items-center text-15 text-primary cursor-pointer" @click.stop="navTo">
                    Learn More
                    <div class="out-box flex justify-center items-center">
                      <img src="../../assets/img/glyph-right@3x.png" />
                    </div>
                  </div>
                </div>
                <!-- right -->
                <div class="right-content">
                  <div class="right-info">
                    <sub-menu-list-item v-for="(subItem,index) in menuData.iSolutions[activeLeftMenuIndex].subMenu.list" :key="index" :listInfo="subItem" />
                  </div>
                </div>
              </template>
            </div>
          </div>
          <!-- follow us -->
          <div class="right col-span-2 text-15 text-primary">
            <div class="follow-tem flex items-center cursor-pointer">
              <div class="icon rounded-full flex justify-center items-center">
                <img src="./img/glyph-virtual-meeting-room@3x.png" />
              </div>
              <p class="content">Virtual Meeting Room</p>
            </div>
            <div class="follow-tem flex items-center cursor-pointer">
              <div class="icon rounded-full flex justify-center items-center">
                <img src="./img/glyph-chat@3x.png" />
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
  </nav>
</template>
<script>
import menuListData from "@/dictionary/menuData.js"
import SubMenuPanel from './SubMenuPanel.vue'
import SubMenuListItem from './SubMenuListItem.vue';
console.log(menuListData.iSolutions)
export default {
  name: '',
  mixins: [],
  components: { SubMenuPanel, SubMenuListItem },
  // 数据部分
  props: {},
  data() {
    return {
      showNavInfo: false, // 展示导航详情 
      activeLeftMenuIndex: 0,
      menuData: menuListData
    }
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {
    toBsnAndG(index) {
      console.log(index)
      if (index === 7) {
        this.navTo({ url: '/bsn' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.text-15 {
  font-size: 15px;
}
.text-primary {
  color: #0085d0;
}
.z-10 {
  z-index: 10;
}
.grid {
  display: grid;
}
.bg-white {
  background-color: #ffffff;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.col-span-7 {
  grid-column: span 7 / span 7;
}
.cursor-pointer {
  cursor: pointer;
}
.flex {
  display: flex;
}
.justify-start {
  justify-content: flex-start;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.rounded-full {
  border-radius: 50%;
}

nav {
  margin-bottom: 2px;
}
.nav-pc-box {
  .pc-nav-content {
    padding-left: 50px;
    max-width: none;
  }
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
    top: 54px;
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
        flex: 1;
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
