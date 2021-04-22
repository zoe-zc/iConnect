<template>
  <div class="page-view flex justify-between items-center sm:block">
    <div class="logo-box flex items-center">
      <img src="@/assets/img/elements-logo-cmi-color@3x.png" alt="" class="home-logo" />
      <img src="@/assets/img/elements-logo-i-connect@3x.png" class="inline-block site-logo" alt="" srcset="" />
    </div>
    <div class="right-select text-16">
      <el-select v-model="value" placeholder="">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  mixins: [],
  components: {},
  // 数据部分
  props: {},
  data() {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: 'Content' }, { text: 'Content2' }, { text: 'Content3' }],
      options: [
        {
          value: 'iconect',
          label: 'iconect'
        },
        {
          value: '选项2',
          label: 'iconectw'
        },
        {
          value: '选项3',
          label: 'iconect2'
        },
        {
          value: '选项4',
          label: 'iconect4'
        },
        {
          value: '选项5',
          label: 'iconect1'
        }
      ],
      value: 'iconect'
    }
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {},
  unmounted() {},
  // 方法
  methods: {
    onSelect(v) {
      console.log(v)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-view {
  margin: 0 246px;
}
.logo-box {
  .home-logo {
    width: 205px;
    height: 34px;
    margin-right: 43px;
  }
  .site-logo {
    width: 110px;
    height: 18px;
  }
}
.right-select {
  /deep/ .el-input__inner {
    background-color: #f4f6f8;
  }
  /deep/ .el-select__caret {
    color: #000;
  }
}
@media (max-width: 768px) {
  .page-view {
    margin: 0 px2rem(20);
  }
  .logo-box {
    margin-bottom:px2rem(30);
    .home-logo {
      width: px2rem(150);
      height: px2rem(25);
      margin-right: px2rem(25);
    }
    .site-logo {
      width: px2rem(84);
      height: px2rem(14)
    }
  }
  .right-select {
    .el-select{
      width: 100%;
      height: px2rem(45);
      line-height: px2rem(45);
    }
    /deep/ .el-input__inner {
      background-color: #f4f6f8;
       height: px2rem(45);
      line-height: px2rem(45);
      font-size: px2rem(13);
      color: #000;
      font-weight: 500;
          border: none;
    }
    /deep/ .el-select__caret {
      color: #000;
    }
  }
}
</style>
