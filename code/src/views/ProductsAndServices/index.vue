<template>
  <div class="">
    <!-- <NavMenu></NavMenu> -->
    <!--<Banner></Banner>-->
    <!--分块展示-->
    <div class="module">
      <van-index-bar :index-list="indexListTab">
        <div class="zvan-module">
          <img src="@/assets/img/block-img.png" alt="">
          <van-index-anchor index="iConnect Data"/>
          <div class="zvan-content">
            <p class="zvan-title">Products and Services</p>
            <p class="icon-subtitle">Watch Video <i class="iconfont iconplay-circle-fill"></i></p>
            <van-cell>
              <div class="content-text flex">
                <span class="text-28 text-primary weight-600">iConnect Data</span>
                <img src="img/elements-logo-i-connect@3x.eb86a07b.png" alt="">
                <div class="out-box"><span class="link-icon iconfont iconarrow-right"></span></div>
              </div>
              <link-list :linkList="linkListArr" :noDesc="true"></link-list>
            </van-cell>
          </div>
        </div>
        <van-index-anchor index="iConnect Mobile" />
          <van-cell>
            <div class="weight-500 text-18 text0">
              <p>Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.</p>
            </div>
          </van-cell>
        <van-index-anchor index="iConnect IoT" />
          <van-cell>
            <div class="weight-500 text-18 text0">
              <p>Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.</p>
            </div>
          </van-cell>
        <van-index-anchor index="iConnect Pro" />
          <van-cell>
            <div class="weight-500 text-18 text0">
              <p>Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.</p>
            </div>
          </van-cell>
        <van-index-anchor index="iConnect SMS" />
          <van-cell>
            <div class="weight-500 text-18 text0">
              <p>Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.</p>
            </div>
          </van-cell>
        <van-index-anchor index="iConnect Voice" />
          <van-cell>
            <div class="weight-500 text-18 text0">
              <p>Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.</p>
            </div>
          </van-cell>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import linkList from './components/dataLinkList'
// import sIconList from '../../../components/sIconList'
// import readyBar from '../../../components/readyBar/index'

import Banner from "@/components/tTopBanner"
// import NavMenu from '@/components/tNavMenu'
// import zNavMenu from "@/components/zNavMenu"
// import MobileNavMenu from "@/components/tMobileNav"

export default {
  name: "consultPartner",
  components: {
    linkList,
    // sIconList, readyBar,
     Banner,
      // NavMenu, zNavMenu, MobileNavMenu 
      },
  data() {
    return {
      deviceVal: 'pc',//true表示pc false表示mobile
      indexListTab: [
        'iConnect Data',
        'iConnect Mobile',
        'iConnect IoT',
        'iConnect Pro',
        'iConnect SMS',
        'iConnect Voice',
      ],
      linkListArr: [
        {
          id: 1,
          title: 'Data: Data Line & MPLS VPN',
          desc: `Connectivity with world-class quality`,
          linkTo: '',
        },
        {
          id: 2,
          title: 'Data: IP Transit & DIA',
          desc: 'Carrier-grade IP Transit service for global telecoms',
          linkTo: '',
        },
        {
          id: 3,
          title: 'Data: IDC',
          desc: `Swiftly create, deploy and manage multi-cloud services within costs`,
          linkTo: '',
        },
        {
          id: 4,
          title: 'Data: CDN',
          desc: 'Monetized your opportunities with CMI CDN',
          linkTo: '',
        },
        {
          id: 5,
          title: 'Data: SD-WAN',
          desc: 'Enable our carrier partners to capture market share by quick launching services and responding the customer needs.',
          linkTo: '',
        },
        {
          id: 6,
          title: 'Data: Cloud Connect',
          desc: 'A one-stop solution to provide a seamless transition to a cloud-based future.',
          linkTo: '',
        },
      ],
      dataIconList: {
        til: '',
        item: [
          {
            name: 'Agility',
            desc: 'Implement in second',
            srcHas: true, //true表示有图片 false表示无图片
            imgSrc: ''
          },
          {
            name: 'User Friendly',
            desc: 'Provision in 3 steps',
            srcHas: false, //true表示有图片 false表示无图片
            imgSrc: ''
          },
          {
            name: 'Agility',
            desc: 'Implement in second',
            srcHas: true, //true表示有图片 false表示无图片
            imgSrc: ''
          },
          {
            name: 'User Friendly',
            desc: 'Provision in 3 steps',
            srcHas: true, //true表示有图片 false表示无图片
            imgSrc: ''
          },
          {
            name: 'Agility',
            desc: 'Implement in second',
            srcHas: true, //true表示有图片 false表示无图片
            imgSrc: ''
          },
          {
            name: 'User Friendly',
            desc: 'Provision in 3 steps',
            srcHas: true, //true表示有图片 false表示无图片
            imgSrc: ''
          },
        ]
      },
      dataReady: {
        til: 'Ready to Get Started',
        desc: 'Join now and enjoy exclusive benefits.',
        itemLink: [
          {
            name: 'mCloud Portal',
            type: '',
            subItem: ['Register Now', ' Log In ']
          },
          {
            name: ' iSolutions Portal',
            type: '',
            subItem: ['Log In']
          },
        ]
      },
      tableData: [{
        date: 'Training Benefit',
        name: '',
        address: ''
      }, {
        date: 'Technical Support',
        name: '',
        address: ''
      }, {
        date: 'Partner Incentive Program',
        name: '',
        address: ''
      }, {
        date: 'Co-branding Marketing Assets',
        name: '',
        address: ''
      }, {
        date: 'Training Benefit',
        name: '',
        address: ''
      },]
    }
  },
  created() {
    this.getDevice()
  },
  methods: {
    getDevice() {
      this.deviceVal = sessionStorage.getItem('typeDevice') ? sessionStorage.getItem('typeDevice') : 'pc';
    },
    handleRoute() {
      this.$router.push({ path: '/Partner' })
    }
  }
}
</script>

<style scoped lang="scss">
.consultPartnerContainer {
  font-family: PingFangSC;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  .bannerContainer {
    margin: 67px auto 100px;
    display: flex;
    .imgBox {
      margin-left: 202px;
      img {
        width: 320px;
        height: auto;
        vertical-align: middle;
      }
    }
    .textContainer {
      flex: 1;
      padding: 52px 0 0 245px;
      .til {
        margin-bottom: 15px;
        font-size: 48px;
        font-weight: 600;
        line-height: 56px;
        color: #0085d0;
      }
      .ins {
        font-size: 24px;
        font-weight: 600;
        line-height: 30px;
        color: black;
      }
      .btn {
        margin-top: 40px;
        width: 130px;
        height: 42px;
        background-color: #0085d0;
        font-size: 13px;
        font-weight: 600;
        line-height: 42px;
        color: white;
        display: block;
      }
      .imgTil {
        margin: 58px 0 32px;
        font-size: 13px;
        img {
          display: inline-block;
          vertical-align: middle;
          width: 100px;
        }
      }
    }
  }
  .mobileContainer {
    display: none;
  }
  .pcContainer {
    display: block;
  }
  .partContainer {
    padding: 30px 50px 0 50px;
    /*分界线*/
    .casePartner {
      display: flex;
      flex-direction: row-reverse;
      .textCon {
        width: 62.5%;
        padding: 52px 132px 52px 52px;
        background-color: #f4f6f8;
        .texta {
          margin: 0 0 18px;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          color: black;
        }
        .textb {
          font-size: 15px;
          font-weight: 500;
          line-height: 22px;
          color: #6b787f;
        }
        .mb {
          margin-bottom: 20px;
        }
      }
      .imgCon {
        flex: 1;
        position: relative;
        img {
          width: 100%;
          height: auto;
          margin-top: 52px;
          position: absolute;
          left: -81px;
        }
      }
    }
    /*分界线*/
    .tabPartner {
      padding-left: 67px;
    }
    .til {
      font-size: 28px;
      font-weight: 600;
      line-height: 36px;
      color: #0085d0;
    }
    .topPartner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        width: 214px;
        height: 214px;
        margin: 45px 15px 0 0;
        padding: 50px 11px;
        border: solid 1px #dce1e4; /*no*/
      }
      div:nth-child(4n) {
        margin-right: 0;
      }
    }
    .moreContainer {
      margin-top: 60px;
      margin-bottom: 124px;
      span {
        display: block;
        width: 122px;
        height: 42px;
        margin: 0 auto;
        border: solid 1px #dce1e4;
        font-size: 13px;
        font-weight: 500;
        line-height: 42px;
        color: #0085d0;
      }
    }

    /*分界线*/
    .insContainer {
      display: flex;
      p {
        flex: 1;
      }
      p.desc {
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;
        color: #6b787f;
      }
    }
  }
}
  .module {
    margin: 65px auto;
    width: 950px;
  }

  .weight-500 {
    font-weight: 500;
  }
  .weight-600 {
    font-weight: 600;
  }

  .zvan-module {
    align-items: flex-start;
    overflow: hidden;
    color: #0085d0;
    img {
      margin-right: 86px;
      width: 375px;
      height: auto;
    }
    &>img,
    &>.zvan-content {
      float: left;
    }

    .zvan-title {
      margin-bottom: 15px;
      padding: 0;
      font-size: 48px;
      font-weight: 600;
    }
    .icon-subtitle {
      margin-bottom: 60px;
      &>i {
        margin-left: 10px;
        vertical-align: middle;
      }

      font-size: 15px;
    }
    .content-text {
      margin-bottom: 30px;
      align-items: center;
      img {
        margin: 0 20px;
        width: 100px;
        height: auto;
      }
    }
  }
  // 链接图标
  .out-box {
    width: 30px;
    height: 30px;
    line-height: 28px;
    border: 1px solid #dce1e4;
    border-radius: 50%;
    text-align: center;
    color: #0085d0;
    .link-icon {
      font-size: 15px;
    }
  }
  // 索引框样式
  .van-index-bar {
    position: relative;
    // margin-top: 90px;
    // 侧边栏
    /deep/ .van-index-bar__sidebar {
      position: absolute;
      left: -190px;
      top: 65px;
      right: unset;
      max-width: 140px;
      background: #fff;
      .van-index-bar__index {
        font-size: 13px;
        &:not(:first-child) {
          margin-top: 7px;
          color: #6b787f;
        }
      }
    }
    /deep/ .van-index-anchor {
      display: none;
    }
    .van-cell {
      margin-bottom: 90px;
      padding: 0;
      &:after {
        border: 0 none;
      }
    }

  }

@media screen and (max-width: 768px) {
  .consultPartnerContainer {
    padding: 0 px2rem(20);
    .mobileContainer {
      display: block;
    }
    .pcContainer {
      display: none;
    }
    .bannerContainer {
      margin: px2rem(35) auto px2rem(30);
      display: block;
      .imgBox {
        margin: 0 0 px2rem(25) 0;
        img {
          width: px2rem(164);
          height: px2rem(164);
          margin: 0 auto;
        }
      }
      .textContainer {
        flex: none;
        padding: 0;
        .til {
          margin-bottom: px2rem(10);
          font-size: px2rem(28);
          line-height: px2rem(32);
        }
        .ins {
          font-size: px2rem(17);
          line-height: px2rem(20);
        }
        .btn {
          margin: px2rem(20) 0 px2rem(30);
          width: 77px;
          height: 34px;
          font-size: px2rem(11);
          line-height: px2rem(14);
          display: block;
        }
      }
    }
    /*分界线*/
    .partContainer {
      padding: 0;
      .tabPartner {
        padding-left: 0;
      }
      .til {
        font-size: px2rem(20);
        font-weight: 600;
        line-height: px2rem(26);
        color: #0085d0;
      }
      .topPartner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          width: px2rem(133);
          height: px2rem(133);
          margin: px2rem(12) px2rem(14) 0 0;
        }
        div:nth-child(2n) {
          margin-right: 0;
        }
      }
      .moreContainer {
        margin-top: px2rem(40);
        margin-bottom: px2rem(40);
        span {
          width: px2rem(95);
          height: px2rem(35);
          font-size: px2rem(11);
          line-height: px2rem(35);
        }
      }

      /*分界线*/
      .insContainer {
        display: block;
        p {
          flex: none;
        }
        p.til {
          margin: px2rem(30) 0 px2rem(10);
        }
        p.desc {
          font-size: px2rem(13);
          line-height: px2rem(18);
        }
      }
    }
    /*分界线*/
    .partContainer {
      .tabPartner {
        padding-left: 0;
      }
      .casePartner {
        display: block;
        .imgCon {
          margin-bottom: px2rem(30);
          flex: none;
          position: relative;
          img {
            width: 100%;
            height: auto;
            margin-top: 0;
            position: relative;
            left: 0;
          }
        }
        .textCon {
          padding: px2rem(20);
          width: 100%;
          .texta {
            margin: 0 0 px2rem(18);
            font-size: px2rem(17);
          }
          .textb {
            font-size: px2rem(13);
          }
          .mb {
            margin-bottom: px2rem(15);
          }
        }
      }
    }
  }
}
</style>