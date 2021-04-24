<template>
  <div class="border-wrap grid grid-cols-2 gap-y-1.5 sm:grid-cols-1 sm:gap-y-0.5">
    <div class="item-module" v-for="item in linkList" :key="item.id">
      <link-more :text="item.title" @linkTo="goToLink(item.linkTo)"></link-more>
      <p :class="{'mo-hide': noDesc}">{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
import LinkMore from '@/components/tLinkMore'
export default {
  name: 'linkList',
  props: {
    linkList: Array,
    noDesc: Boolean,// 是否有说明文字
  },
  data() {
    return {

    }
  },
  components: {
    LinkMore,
  },
  methods: {
    goToLink(path) {
      this.$router.push({
        path: path,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .border-wrap {
    padding: 52px;
    box-sizing: border-box;
    border: 1px solid #dce1e4;
    width: 100%;
    .item-module {
      width: 357px;
      &:nth-of-type(2n-1) {
        margin-right: 132px;
      }
      &:nth-of-type(2n + 1) {
        margin-right: 132px;
      }
      p {
        margin-top: 12px;
        color: #6b787f;
      }
    }
  }
@media screen and (max-width: 768px) {
  .mo-hide {
    display: none;
  }

  .border-wrap {
    padding: px2rem(25) px2rem(20);
    .item-module {
      width: 100%;
      &:nth-of-type(2n-1) {
        margin-right: 0;
      }
      &:nth-of-type(2n + 1) {
        margin-right: 0;
      }
      /deep/ .link-more {
        justify-content: space-between;
      }
    }
  }
}
</style>