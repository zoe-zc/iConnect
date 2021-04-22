// 顶部站点导航
<template>
  <div class="site-navigation  hidden md:block text-left text-white text-12" :class="deviceType">
    <div class="active-name">
      <nav class="menu-info  container flex">
        CMI | Carrier
        <span
          @click.self="showMenu = !showMenu"
          class="icon iconfont iconarrow-down-filling transition transform"
          :class="{ 'show-list': showMenu }"
        >
        </span>
      </nav>
    </div>
    <!-- menu list -->
    <div class="down-list" :class="{ show: showMenu }">
      <div class="container flex text-16">
        <div class="items ">
          <h3 class="title text-white">Corporate Website</h3>
          <div class="info text-14 text-textA">
            China Mobile International provides a full range of international telecommunications services and industry
            solutions for global carriers, enterprises and mobile users.
          </div>
        </div>
        <div class="items ">
          <h3 class="title active">Carrier</h3>
          <div class="info text-14 text-textA">
            An all-encompassing new solution to provide carrier partners with one-stop-shop Voice, SMS, Roaming, Data,
            China Access, and Professional services.
          </div>
        </div>
        <div class="items ">
          <h3 class="title active">
            Enterprise
          </h3>
          <div class="info text-14 text-textA">
            A suite of flexible and agile enterprise solutions including Connectivity service, Cloud business, IDC
            service, IOT service and ICT solutions.
          </div>
        </div>
        <div class="items ">
          <h3 class="title active">
            Mobile User
          </h3>
          <div class="info text-14 text-textA">
            China Mobile International provides a full range of international telecommunications services and industry
            solutions for global carriers, enterprises and mobile users.
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
  created() {},
  mounted() {},
  unmounted() {},
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>

.show-list {
  transform: rotate(-180deg);
}

/* pc */
.pc {
  &.site-navigation {
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
      .container {
        padding: 28px 0 30px 0;
        .items{
          padding-right: 60px;
        }
      }

      .title {
        margin-bottom: 10px;
      }
      .active {
        color: #0bf474;
      }
    }
  }
}
</style>
