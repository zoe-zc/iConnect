<template>
  <div class="login-text-con flex flex-row">
    <div class="left-module flex flex-col">
      <span class="text">Get Started on Finance</span>
      <span class="bottom-bar"></span>
    </div>
    <div class="right-module flex-1 flex flex-col justify-top items-left">
      <div class="textOne">Need More Assistance?</div>
      <div class="textTwo">Online Enquiry <span class="circle tc">＞</span></div>
    </div>
  </div>
</template>
<script>
  
</script>
<style lang="scss" scoped>
  // PC
  .login-text-con {
    .left-module {
      padding: 71px 82px 111px 81px;
      width: 541px;
      background-image: linear-gradient(to left, #00bbea, #0085d0 0%);
      font-size: 28px;
      font-weight: 600;
      color: #ffffff;
      .bottom-bar {
        width: 40px;
        height: 1px;
        margin: 41px 338px 0 0;
        border: solid 1px #7dc700;
      }
    }
    .right-module {
      padding: 72px 0 0 82px;
      background: #f4f6f8;
    }

    .textOne {
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: normal;
      color: #000000;
      margin-bottom: 12px;
    }
    .textTwo {
      margin: 4px 5px 13px 0;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: normal;
      color: #0085d0;
      span {
        display: inline-block;
      }
    }
    .btnCon {
      margin-top: 30px;
    }
  }

  // mobile
  @media (max-width: 768px) {
    .login-text-con {
      // margin: 50px auto;
      // width: 87.5%;
      flex-direction: column;
      background-color: #f4f6f8;
      .left-module,
      .right-module {
        padding: 25px 30px;
        margin: 0 auto;
        width: 100%;
        font-size: 20px;
        font-weight: 600;
      }
      .textOne {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 12px;
      }
      .textTwo {
        margin: 4px 5px 13px 0;
        font-size: 13px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: normal;
        color: #0085d0;
      }
    }
  }
</style>