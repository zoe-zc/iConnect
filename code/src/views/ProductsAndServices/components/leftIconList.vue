<template>
  <div class="left-icon-list-wrap">
    <div class="item-module flex" v-for="item in leftIconList" :key="item.id">
      <img :src="item.icon" alt="">
      <div class="text-con flex-1">
        <p class="text-18 text-black">{{ item.label }}</p>
        <p class="text-15">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leftIconList',
  props: {
    leftIconList: Array,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
.left-icon-list-wrap {
  overflow: hidden;
  .item-module {
    float: left;
    width: 408px;
    &:nth-of-type(2n-1) {
      margin-right: 133px;
    }
    &:nth-of-type(n+3) {
      margin-top: 36px;
    }
    img {
      margin-right: 36px;
      width: 45px;
      height: fit-content;
    }
    .text-con {
      p {
        font-weight: 500;
        &:last-child {
          margin-top: 12px;
          color: #6b787f;
        }
      }

    }
  }

}
</style>