<template>
  <div class="nav-menu flex justify-between">
    <div class="logo-box flex items-center">
      <img src="@/assets/img/elements-logo-cmi-color@3x.png" alt="" class="home-logo">
      <img src="@/assets/img/elements-logo-i-connect@3x.png" class="inline-block site-logo" alt="" srcset="">
    </div>
    <div class="header-right">
      <div class="text hover-pointer text-primary sm:hidden login-text">Customer Login</div>
      <div class="show-icon hover-pointer sm:hidden">
        <i class="iconfont iconuser"></i>
      </div>
      <van-dropdown-menu active-color="#0085d0" class="sm:hidden">
        <van-dropdown-item v-model="currentId" :options="option" />
      </van-dropdown-menu>
      <div class="show-later text-primary text-13">
        <div class="flex-module">
          <van-switch
            v-model="checked"
            size="12px"
            active-color="#0085d0"
            inactive-color="#2b8fda66"
            class="sm:hidden"
          />
          <span class="sm:hidden"> 3D</span>
          <i class="iconfont iconsearch text-primary text-30 cursor-pointer"></i>
          <img class="hover-pointer sm:inline-block" src="@/assets/img/glyph-menu@3x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zNavMenu',
  data() {
    return {
      currentId: 0,
      option: [
        { text: 'En', value: 0 },
        { text: '中文(简体)', value: 1 },
      ],
      checked: false,
    }
  },
  created() {

  },
}
</script>
<style lang="scss" scoped>
  @import "../../assets/style/base.scss";
  /deep/ .van-dropdown-menu__bar{
    box-shadow: none;
  }
  .site-logo{
    width: 104px;
    margin-left: 32px;
  }
  .hover-pointer {
    cursor: pointer;
  }
  .nav-menu {
    overflow: hidden;
    padding: 35px 46px 26px 50px;
    background: #ffffff;
    img.home-logo {
      float: left;
      width: 205px;
    }
    .header-right {
      float: right;
      font-size: 15px;
      font-weight: 500;
      &>div {
        display: inline-block;
      }
      .show-later {
        vertical-align: middle;
        margin-left: 18px;
        .flex-module {
          display: flex;
          align-items: center;
        }
        img {
          width: 30px;
        }
        span {
          font-size: 13px;
        }
        i {
          margin: 0 14px 0 20px;
          padding: 6px;
          font-size: 18px;
        }
      }

      /deep/ .van-ellipsis {
        color: #0085d0;
      }

      .text {
        margin-right: 22px;
      }
      
      .show-icon {
        display: none;
      }
    }
  }

  @media (max-width: 768px){
    .site-logo{
      width: px2rem(70);
      margin-left: px2rem(12);
    }
    .nav-menu {
      padding: px2rem(21) px2rem(23) px2rem(16) px2rem(20);
      img.home-logo {
        width: px2rem(115);
      }
      .header-right {
        >div.van-dropdown-menu, .login-text{
          display: none;
        }
        .show-icon {
          /* display: inline-block; */
          i {
            font-size: px2rem(17);
          }
        }
      }
    }
  }
</style>