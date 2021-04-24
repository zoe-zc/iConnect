<template>
  <div class="sIconListContainer mobile">
    <div v-if="dataIconList.til" class="til">{{dataIconList.til}}</div>
    <div class="itemContainer">
      <div class="box" v-for="item in dataIconList.item" :key="item.id">
        <span class="icon-index" v-if="item.srcHas">
          <img :src="item.imgSrc" alt="">
          {{ item.id }}
        </span>
        <span class="textCon">
          <div class="sIns">{{item.title}}</div>
          <div class="sText">{{item.desc}}</div>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "iconList",
  props: {
    dataIconList: Object,
  },
  data() {
    return {
      deviceVal: true //true表示pc false表示mobile
    }
  },
  created() {
    //this.getDevice()
  },
  methods: {
    getDevice() {
      let val = sessionStorage.getItem('typeDevice');
      this.deviceVal = val.indexOf('pc') > -1 ? true : false;
    }
  }
}
</script>

<style scoped lang="scss">
.sIconListContainer {
  letter-spacing: normal;
  .til {
    font-weight: 600;
    letter-spacing: normal;
    color: #0085d0;
  }
  .box {
    display: flex;
    &:first-child {
      .textCon {
        padding-top: 0;
      } 
      .icon-index {
        margin-top: 0;
      }
    }

    span {
      display: block;
    }
    .icon-index {
      margin: 30px 24px 0 0;
      width: 28px;
      height: 28px;
      line-height: 28px;
      background: #8ec31e;
      border-radius: 50%;
      color: #fff;
      text-align: center;
    }
    .textCon {
      padding: 30px 0;
      border-bottom: 1px solid #dce1e4;
      flex: 1;
    }
    .sIns {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
    }
    .sText {
      font-size: 15px;
      font-weight: 500;
      color: #6b787f;
    }
  }
}

.mobile {
  .til {
    margin: 20px 0;
  }
  .box {
    .sIns {
      font-size: 15px;
    }
    .sText {
      font-size: 13px;
    }
  }
}

.pc {
  .itemContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .itemContainer > div {
    width: 50%;
  }
  .til {
    margin: 20px 0;
    font-size: 20px;
    width: 100%;
  }
  .box {
    display: flex;
    margin: 20px 0;
    background: white;
    .sIns {
      font-size: 15px;
    }
    .sText {
      font-size: 13px;
    }
  }
}
</style>
