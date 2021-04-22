<template>
  <div class="logo-bar">
    <div class="logo-box">
      <img src="./img/elements-logo-cmi-color@3x.png" />
    </div>
    <div class="icon-box">
      <img src="./img/glyph-search@3x.png" alt="" class="search" @click="$emit('toSearch')">
      <img src="./img/glyph-cancel@3x.png" alt="" @click="$emit('colse')">
    </div>
  </div>
</template>
<script>
export default {
name:'',
mixins:[],
components:{},
// 数据部分
props:['toSearch','colse'],
data() {
 return {};
},
computed: {},
watch: {},
// 生命周期
created() {},
mounted() {},
unmounted() {},
// 方法
 methods:{},
}; 
</script>
<style lang="scss" scoped>

$rootMobileFontSize: 100;
@function px2rem($px) {
  @return $px / $rootMobileFontSize + rem;
}

/* mobile */
@media (max-width: 768px) {
  .logo-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: px2rem(19) px2rem(17)  0 px2rem(20);
    .logo-box{
      img{
        width: px2rem(115);
        height: px2rem(19);
        object-fit: contain;
      }
    }
    .icon-box{
      display: flex;
      align-items: center;
      img{
        width: px2rem(25);
        height: px2rem(25);
      }
      .search{
        margin-right: px2rem(10);
      }
    }
  }
}
</style>