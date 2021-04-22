<template>
  <div class="page-view">
    <!-- Products & Services -->
    <div class="produts tab-item">
      <p class="title text-primary text-28">Products & Services</p>
      <p class="tips text-18 text-text0">
        CMI provides you a full range of international telecommunications services for carrier partners.
      </p>
      <div class="info-panel text-primary flex flex-wrap">
        <div class="product-item flex justify-between items-start pr">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect Data</p>
            <ul>
              <li>Data: Data Line & MPLS VPN</li>
              <li>Data: IP Transit & DIA</li>
              <li>Data: CDN</li>
              <li>Data: SD-WAN</li>
              <li>Data: Cloud Connect</li>
              <li>Data: IDC</li>
              <li>China Connect</li>
            </ul>
          </div>
          <img src="../../assets/img/product/product-lock.png" alt="" class="img-block" />
        </div>
        <hr class="line sm:visible md:hidden" />
        <div class="product-item flex justify-between items-start pl">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect Mobile</p>
            <ul>
              <li>Mobile: IPX</li>
              <li>Mobile: Signaling</li>
            </ul>
          </div>
          <img src="../../assets/img/product/product-lock.png" alt="" class="img-block" />
        </div>
        <hr class="line" />
        <!-- 3 -->
        <div class="product-item flex justify-between items-start pr">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect IoT</p>
            <ul>
              <li>IoT China SIM</li>
              <li>IoT Global SIM</li>
              <li>IoT CMPaaS</li>
              <li>IoT Roaming</li>
              <li>IoT Solutions</li>
            </ul>
          </div>
          <img src="../../assets/img/product/msg.png" alt="" class="img-block" />
        </div>
        <hr class="line sm:visible md:hidden" />
        <div class="product-item flex justify-between items-start pl">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect Pro</p>
            <ul>
              <li>VABusiness - Content</li>
              <li>VAEquipment - Device</li>
              <li>VAService - Clearing</li>
            </ul>
          </div>
          <img src="../../assets/img/product/file.png" alt="" class="img-block" />
        </div>
        <hr class="line" />
        <!-- 5 -->
        <div class="product-item flex justify-between items-start pr">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect SMS</p>
            <ul>
              <li>SMS: P2P</li>
              <li>SMS: A2P</li>
            </ul>
          </div>
          <img src="../../assets/img/product/file.png" alt="" class="img-block" />
        </div>
        <hr class="line sm:visible md:hidden" />
        <!-- 6 -->
        <div class="product-item flex justify-between items-start pl">
          <div class="left-list text-15">
            <p class="item-title text-20 text-black">iConnect Voice</p>
            <ul>
              <li>Voice</li>
              <li>Voice+</li>
              <li>Voice∞</li>
            </ul>
          </div>
          <img src="../../assets/img/product/file.png" alt="" class="img-block" />
        </div>
        <hr class="line" />
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
.page-view {
  padding: 0 245px;
  .info-panel {
    hr.line {
      margin: 52px auto;
      flex: 0 0 100%;
    }
    .product-item {
      float: left;
      width: 50%;
      &.pr {
        padding-right: 103px;
      }
      &.pl {
        padding-left: 66px;
      }
      .img-block {
        width: 120px;
        height: 120px;
        object-fit: contain;
      }
      .item-title {
        padding-bottom: 14px;
      }
      li {
        margin-bottom: 6px;
        font-size: px2rem(13);
      }
    }
  }
  .tips {
    margin-bottom: 45px;
    font-size: 18px;
  }
}
// 移动端
@media screen and (max-width: 768px) {
  .page-view {
    padding: 0 px2rem(20);
    .info-panel {
      hr.line {
        margin: px2rem(25) auto;
        flex: 0 0 100%;
      }
      .product-item {
        float: none;
        width: 100%;
        &.pr {
          padding-right: 0;
        }
        &.pl {
          padding-left: 0;
        }
        .img-block {
          width: px2rem(70);
          height: px2rem(70);
          object-fit: contain;
        }
        .item-title {
          padding-bottom: px2rem(14);
        }
        li {
          margin-bottom: 6px;
        }
      }
    }
    .tips {
      margin-bottom: px2rem(25);
      font-size: px2rem(15);
    }
  }
}
</style>

