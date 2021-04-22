<template>
  <div class="page-view">
    <div class="top-banner flex justify-between sm:flex-col-reverse">
      <div class="text-info">
        <img src="../../assets/img/elements-logo-i-connect-short@3x.png" alt="" srcset="" class="logo" />
        <p class="title text-48 sm:text-28 text-primary">Why iConnect</p>
        <p class="text text-text0 text-24">Leading International Carrier</p>
      </div>
      <div class="img-box">
        <img src="../../assets/img/block-img.png" alt="" srcset="" />
      </div>
    </div>

    <div class="content flex">
      <!-- tab -->
      <div class="left">
        <ul class="text-textTab text-13">
          <li class="active">Overview</li>
          <li>Corporate Culture</li>
          <li>Organization</li>
          <li>History</li>
          <li>Recognition</li>
        </ul>
      </div>
      <!-- content -->
      <div class="right-content">
        <!-- over view -->
        <div class="over-view tab-item">
          <p class="title text-primary text-28">Overview</p>
          <div class="info flex items-start">
            <div class="img-box">
              <img src="../../assets/img/whyus/elements-image-why-i-connect-overview@3x.png" alt="" />
            </div>
            <div class="right-text">
              <div class="text-item">
                <span class="name text-text0 ">Leading International Carrier</span>
                <p class="exta text-15 text-textTab">
                  Among global telecoms operators, China Mobile has the largest and most technologically sophisticated
                  network, which has enabled us to penetrate deeply into every mobile market. Our advanced network
                  allows us to provide a wide spectrum of comprehensive, high quality and reliable international
                  telecommunications services to the world's largest mobile service subscriber base to date.
                </p>
              </div>
              <!-- item -->
              <div class="text-item">
                <span class="name text-text0">Evolve Together</span>
                <p class="exta text-15 text-textTab">
                  While consolidating our global role in the roaming market, CMI continues to strengthen its suite of
                  capabilities for all kinds of carrier solutions. Second to none, we are committed to taking our
                  carrier service to the next level and pursuing our goal of delivering even better services, as well as
                  convenience, to our many partners around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <!--  -->
        <section class="get-start flex sm:block text-white">
          <div class="start">
            <p class="top-title text-28">Ready to Get Started</p>
            <p class="exta-info text-18">
              Join now and enjoy exclusive benefits.
            </p>
            <div class="line"></div>
          </div>
          <div class="need">
            <p class="need-title text-18 text-black">Need More Assistance?</p>
            <LinkMore text="Online Enquiry" text-color="#0085d0" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import LinkMore from "@/components/tLinkMore"
export default {
  name: '',
  mixins: [],
  components: { Breadcrumb, LinkMore },
  // 页面数据部分
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 页面生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 页面内方法
  methods: {}
}
</script>
<style lang="scss" scoped>
.get-start {
  margin-bottom: 96px;
  .start {
    flex: 0 0 540px;
    height: 302px;
    background: linear-gradient(to left, #00bbea, #0085d0 0%);
    padding: 70px 0 0 80px;
    .exta-info {
      margin-top: 8px;
    }
    .line {
      width: 40px;
      height: 3px;
      background-color: #7dc700;
      margin-top: 40px;
    }
  }
  .need {
    flex: 1;
    background-color: #f4f6f8;
    padding: 70px 0 0 80px;
    font-weight: 500;
  }
}
.over-view {
  margin-bottom: 60px;
}
.top-banner {
  padding-left: 245px;
  margin-bottom: 110px;
  .text-info {
    padding-top: 146px;
  }
  .logo {
    width: 62px;
    height: 30px;
    margin-bottom: 32px;
  }
  .img-box {
    padding-right: 202px;
    padding-top: 67px;
    img {
      width: 320px;
      height: 320px;
    }
  }
}
.content {
  .left {
    width: 245px;
    padding-left: 45px;
    padding-right: 95px;
    ul {
      border-left: 1px solid #6b787f;
      padding-top: 10px;
      li {
        padding-left: 19px;
        line-height: 1.38;
        padding-bottom: 18px;
        &.active {
          color: #000;
        }
      }
    }
  }
  .right-content {
    padding-right: 247px;
    .title {
      padding-bottom: 30px;
    }
    .tab-item {
      padding-bottom: 38px;
    }
    .info {
      .img-box {
        padding-right: 83px;
        flex: 0 0 489px;
        height: 534px;
        width: 489px;
        img {
          width: 489px;
          height: 100%;
          object-fit: cover;
        }
      }
      /* right-text */
      .right-text {
        padding-top: 23px;
        .text-item {
          .exta {
            font-size: 15px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.47;
          }
          &:first-child {
            margin-bottom: 30px;
          }
          .name {
            font-size: 20px;
            padding-bottom: 15px;
            display: block;
          }
        }
      }
    }
  }
}
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
    }
  }
}
.tips {
  margin-bottom: 45px;
  font-size: 18px;
}

// 移动端
@media screen and (max-width: 768px) {
  .page-view {
    font-size: 32px;
  }
}
</style>
