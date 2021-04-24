<template>
  <div class="grid grid-cols-2 gap-y-1.5 sm:grid-cols-1 sm:gap-y-0.5">
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
  .item-module {
    width: 286px;
    &:nth-of-type(2n-1) {
      margin-right: 67px;
    }
    p {
      margin-top: 35px;
      color: #6b787f;
    }
    /deep/ .out-box {
      
    }
  }
@media screen and (max-width: 768px) {
  .mo-hide {
    display: none;
  }

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
</style>