<template>
  <div class="copyrightContainer">
    <div class="sSubsripeContainer" :class="deviceVal">
      <div class="contentCon text-13">
        <div>
          Resources Library丨Integrity Compliance Declaration丨
          Disclaimer丨Privacy Policy
        </div>
        <div>
          Privacy Statement for Recruitment & Human Resources Management丨 Terms & Conditions
        </div>
        <div class="copyright">©2021 China Mobile International Limited</div>
      </div>
      <!--智能-->
      <div class="subscribeCon">
        <span class="textCon">Subscribe Newletter</span>
        <span v-if="deviceVal=='mobile'" class="robotCon"><img src="../../assets/img/elements-icon-ai-robot.png" alt=""></span>
      </div>
    </div>
    <!--robot-->
    <div class="RobotContainer">
      <div class="msgCon" v-if="deviceVal=='pc'">
        <span><img src="../../assets/img/productService/glyph-chat.png" alt=""></span>
        <span><img src="../../assets/img/productService/glyph-virtual-meeting-room.png" alt=""></span>
        <span><img src="../../assets/img/productService/glyph-promotion.png" alt=""></span>
      </div>

      <div class="robotCon tr" :class="deviceVal">
        <span v-if="deviceVal=='pc'"><img src="../../assets/img/elements-icon-ai-robot@3x.png" alt=""></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index",
  props: {
    dataReady: Object,
    default: {}
  },
  data() {
    return {
      deviceVal: 'pc' //true表示pc false表示mobile
    }
  },
  created() {
    this.getDevice()
  },
  methods: {
    getDevice() {
      this.deviceVal = sessionStorage.getItem('typeDevice') ? sessionStorage.getItem('typeDevice') : 'pc';
    }
  }
}
</script>

<style scoped lang="scss">
/*默认pc*/
.copyrightContainer {
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*width: 100%;*/
  .sSubsripeContainer {
    padding: 42px 245px 0;
    background-color: #f4f6f8;
    font-family: PingFangSC;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 24px;
    letter-spacing: normal;
    color: #6b787f;
    display: flex;
    .copyright {
      margin: 13px 0;
    }
    .contentCon {
      flex: 1;
      div {
        margin: 8px 0;
      }
    }
    .subscribeCon {
      position: relative;
      span.textCon {
        display: block;
        height: 40px;
        line-height: 13px;
        padding: 12px;
        background-color: #0085d0;
        font-family: PingFangSC;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: white;
        margin-top: 20%;
      }
      .robotCon {
        display: none;
      }
    }
  }
  .RobotContainer {
    background-color: #f4f6f8;
    padding: 0 32px 0 50px;
    display: flex;
    .msgCon {
      display: block;
      flex: 1;
      span {
        display: inline-block;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: #0085d0;
        text-align: center;
        margin-right: 10px;
        img {
          width: 20px;
          margin: 10px auto;
        }
      }
    }
    .robotCon {
      flex: 1;
      span {
        img {
          display: inline;
        }
      }
    }
  }
}

/*移动端*/
@media screen and (max-width: 768px) {
  .copyrightContainer {
    /*width: 100%;*/
    .sSubsripeContainer {
      display: block;
      padding: px2rem(36) px2rem(21) px2rem(84);
      font-size: px2rem(11);
      .copyright {
        margin: px2rem(36) px2rem(21);
      }
      .subscribeCon {
        position: relative;
        span.textCon {
          width: px2rem(134);
          font-size: px2rem(11);
          display: block;
          padding: px2rem(12);
          height: px2rem(40);
          line-height: px2rem(13);
          margin-top: 20%;
        }
        .robotCon {
          display: block;
          position: absolute;
          right: px2rem(40);
          top: 0;
        }
      }
    }
    .RobotContainer {
      background-color: #f4f6f8;
      padding: px2rem(0) px2rem(32) px2rem(0) px2rem(50);
      .mobile {
        position: absolute;
        right: px2rem(21);
        bottom: 0;
      }
      .msgCon {
        display: none;
      }
      .robotCon {
        flex: 1;
      }
    }
  }
}
</style>