// 顶部站点导航-移动端不展示
<template>
  <div class="site-navigation  sm:hidden text-left text-white text-12">
    <div class="active-name">
      <nav class="menu-info  site-nav-container flex">
        CMI | Enterprise
        <span @click.self="showMenu = !showMenu" class="icon iconfont iconarrow-down-filling transition transform" :class="{ 'show-list': showMenu }">
        </span>
      </nav>
    </div>
    <!-- menu list -->
    <div class="down-list" :class="{ show: showMenu }">
      <div class="site-nav-container grid grid-cols-4 text-16">
        <div class="items active">
          <h3 class="title cursor-pointer" @click.stop="navToOther('https://isolutions.cmi.chinamobile.com/')">
            Enterprise
          </h3>
          <div class="info text-14 text-textA cursor-pointer" @click.stop="navToOther('https://isolutions.cmi.chinamobile.com/')">
            A suite of flexible and agile enterprise solutions including Connectivity service, Cloud business, IDC
            service, IOT service and ICT solutions.
          </div>
        </div>
        <div class="items">
          <h3 class="title text-white cursor-pointer" @click.stop="navToOther('https://cmi.chinamobile.com/')">Corporate</h3>
          <div class="info text-14 text-textA cursor-pointer" @click.stop="navToOther('https://cmi.chinamobile.com/')">
            China Mobile International provides a full range of international telecommunications services and industry
            solutions for global carriers, enterprises and mobile users.
          </div>
        </div>
        <div class="items">
          <h3 class="title  cursor-pointer" @click.stop="navToOther('https://iconnect.cmi.chinamobile.com/')">Carrier</h3>
          <div class="info text-14 text-textA cursor-pointer" @click.stop="navToOther('https://iconnect.cmi.chinamobile.com/')">
            An all-encompassing new solution to provide carrier partners with one-stop-shop Voice, SMS, Roaming, Data,
            China Access, and Professional services.
          </div>
        </div>
        <div class="items ">
          <h3 class="title cursor-pointer">
            Mobile User
          </h3>
          <div class="info text-14 text-textA cursor-pointer">
            <p class="to-link" @click.stop="navToOther('https://www.cmlink.com/')">CMLink</p>
            <p class="to-link" @click.stop="navToOther('https://www.jegotrip.cn/#/')">JegoTrip</p>
          </div>
        </div>
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
  props: {},
  data() {
    return {
      showMenu: false
    }
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
.site-nav-container {
  /* width: 1440px; */
  margin-left: 50px;
  /* margin: 0 auto; */
}
.text-left {
  text-align: left;
}
.text-12 {
  font-size: 12px;
}

.text-16 {
  font-size: 16px;
}

.text-14 {
  font-size: 14px;
}

.text-white {
  color: #ffffff;
}

.text-textA {
  color: #aaaaaa;
}

/* mobile */
@media (max-width: 768px) {
  .site-navigation {
    display: none;
  }
}

/* pc */
@media (min-width: 769px) {
  .site-navigation {
    .active-name {
      background-color: #1d1d1d;
      height: 30px;
      line-height: 30px;
    }
    .menu-info {
      .icon {
        transition: all 0.5s;
        font-size: 12px;
        margin-left: 6px;
      }
    }
    /* down-list */
    .down-list {
      max-height: 0;
      background-color: #333;
      transition: all 0.5s ease;
      overflow: hidden;
      visibility: hidden;
      &.show {
        visibility: visible;
        max-height: 500px;
        overflow: hidden;
      }
      .site-nav-container {
        padding: 28px 0 30px 0;
        .items {
          padding-right: 60px;
          &:hover {
            color: #0bf474;
          }
        }
      }

      .title {
        margin-bottom: 10px;
      }
      .items {
        &:hover {
          color: #0bf474;
        }
        .title {
          &:hover {
            color: #0bf474;
          }
        }
      }
      .active {
        color: #0bf474;
      }
    }
  }
}

.show-list {
  transform: rotate(-180deg);
}
</style>
