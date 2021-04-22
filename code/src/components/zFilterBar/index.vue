<template>
  <div class="filter-bar">
    <!-- pc -->
    <div class="filter-module flex justify-between ">
      <div v-if="IsPC" class="left-filter flex-center">
        <span class="title">Filter by</span>
        <div class="dropdown-wrap" v-for="item in filterList" :key="item.id">
          <a class="dropdown-label" @click="dropdownHandle(item.id)">
            {{ item.label }}
            <i class="iconfont iconarrow-down-bold"></i>
          </a>
          <div :class="['ant-dropdown', { 'show': currentId==item.id && !isShow }]">
            <ul role="menu" tabindex="0" class="ant-dropdown-menu">
              <li class="ant-dropdown-menu-item" v-for="optionItem in item.options" :key="optionItem.id">
                {{ optionItem.label}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else class="left-filter-m" @click="opeaFilterHandle">
        <span class="title">Filter</span>
        <i class="iconfont iconarrow-right-bold"></i>
      </div>
      <div class="right-reset flex-center">
        <i class="iconfont iconglyph-refresh"></i>
        <span>Reset</span>
      </div>
    </div>
    <!-- mobile -->
    <van-popup v-model="visible" position="top" :style="{ height: '100%' }" @click-close-icon="closeHandle" closeable>
      <!-- <img class="logo" src="@/assets/logo.png" alt=""> -->
      <div class="content">
        <p class="title">Filter</p>
        <ul class="categary-list">
          <li v-for="item in categaryList" :key="item.id">
            <div class="header-bar">
              <p :class="['cate-title', {'active': currentCateId==item.id}]" @click="openCateHandle(item.id)">
                <span class="left-text">{{ item.label }}</span>
                <span class="right-icon">+</span>
              </p>
              <div :class="['categary-item', {'show': currentCateId==item.id}]">
                <van-radio-group v-model="radio">
                  <van-radio :name="cateItem.id" v-for="cateItem in item.list" :key="cateItem.id">
                    {{ cateItem.label }}
                  </van-radio>
                </van-radio-group>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer flex-center">
        <van-button class="show-later button-c" type="info">Register mCloud</van-button>
        <div class="text">
          <i class="iconfont iconglyph-refresh"></i>
          <span>Reset</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'zFilterBar',
  props: {
    filterList: {
      type: Array,
      default: () => ([
        { id: 1, label: '222' }
      ])
    }
  },
  data() {
    return {
      keyword: '',
      visible: false,
      IsPC: true,
      currentId: '',
      isShow: false,
      categaryList: [
        {
          id: 1,
          label: 'Category',
          list: [
            {
              id: 11,
              label: 'All Categories',
            },
            {
              id: 12,
              label: 'Insights',
            },
            {
              id: 13,
              label: 'Editorial',
            },
            {
              id: 14,
              label: 'Press Releases',
            }
          ]
        },
        {
          id: 2,
          label: 'Period',
          list: [
            {
              id: 21,
              label: 'one year',
            },
            {
              id: 22,
              label: 'one half of year',
            },
          ]
        },
        {
          id: 3,
          label: 'Year',
          list: [
            {
              id: 31,
              label: '2021',
            },
            {
              id: 32,
              label: '2020',
            },
            {
              id: 33,
              label: '2019',
            },
          ]
        },
      ],
      currentCateId: 1,
      radio: 11,
    }
  },
  created() {
    // this.IsPCHandle();
  },
  methods: {
    IsPCHandle() {
      var userAgentInfo = navigator.userAgent
      var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      this.IsPC = flag
    },
    dropdownHandle(id) {
      if (this.currentId == id) {
        this.isShow = !this.isShow;
      } else {
        this.isShow = false;
        this.currentId = id;
      }
    },
    opeaFilterHandle() {
      // 移动端过滤器展开
      this.visible = true;
    },
    closeHandle() {

    },
    openCateHandle(id) {
      this.currentCateId = id;
    }
  },
}
</script>
<style lang="scss" scoped>
.filter-bar {
  color: #000000;
  font-size: 15px;
  font-weight: 500;

  .filter-module {
    margin: 0 auto;
    box-sizing: border-box;
    padding: 23px 0;
    width: 950px;
    border-bottom: 1px solid #dce1e4;

    .flex-center {
      display: flex;
      align-items: center;
    }
    .left-filter {
      .title {
        color: #6b787f;
      }
      .dropdown-wrap {
        position: relative;
        margin-left: 35px;
        cursor: pointer;
        .iconarrow-down-bold {
          font-weight: 500;
          font-size: 10px;
        }
      }
    }

    .right-reset {
      font-size: 13px;
      font-weight: 500;
      color: #6b787f;
      cursor: pointer;
      i {
        margin-right: 4px;
        font-size: 22px;
      }
    }
  }
}
// 过滤样式
.ant-dropdown {
  display: none;
  position: absolute;
  top: 30px;
  z-index: 1050;
  &.show {
    display: block;
  }
  .ant-dropdown-menu {
    padding: 4px 0;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px #00000026;
    .ant-dropdown-menu-item {
      padding: 5px 12px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s;
    }
    .ant-dropdown-menu-item:hover {
      background-color: #e6f7ff;
    }
  }
}

@media (max-width: 768px) {
  .filter-bar {
    font-size: px2rem(13);
    .filter-module {
      padding: px2rem(15) px2rem(20);
      width: 100%;
      & > div {
        display: inline-block;
        vertical-align: middle;
      }
      .left-filter-m {
        width: px2rem(205);
        border-right: 1px solid #dce1e4;
        &::after {
          content: '';
          clear: both;
          display: block;
        }

        .title {
          float: left;
        }
        i {
          float: right;
          margin: px2rem(2) px2rem(20) 0 0;
        }
      }
      .right-reset {
        font-size: px2rem(11);
        i {
          margin-right: px2rem(10);
        }
      }
    }

    // 弹窗
    .logo {
      margin: px2rem(23) px2rem(17) px2rem(23) px2rem(20);
      width: px2rem(115);
    }
    .content {
      margin: px2rem(20) auto 0;
      width: px2rem(280);
      .title {
        color: #0085d0;
        font-size: px2rem(20);
        font-weight: 600;
      }
      .categary-list {
        li {
          padding: px2rem(22) 0;
          border-bottom: 1px solid #dce1e4;
          .cate-title {
            font-size: px2rem(15);
            font-weight: 500;
            &.active {
              color: #0085d0;
            }
            &::after {
              content: '';
              clear: both;
              display: block;
            }

            .left-text {
              float: left;
            }
            .right-icon {
              float: right;
            }
          }
          .categary-item {
            display: none;
            margin-top: px2rem(15);
            &.show {
              display: block;
            }

            /deep/ .van-radio {
              margin-top: px2rem(15);
              .van-radio__label {
                margin-left: px2rem(15);
                font-size: px2rem(13);
                font-weight: 500;
              }
            }
          }
        }
      }
    }
    .footer {
      position: absolute;
      left: px2rem(20);
      bottom: px2rem(61);
      margin: 0 auto;
      width: px2rem(280);
      &.flex-center {
        display: flex;
        align-items: center;
      }
      .text {
        margin-left: px2rem(31);
        color: #6b787f;
        font-size: px2rem(11);
        i {
          margin-right: px2rem(10);
        }
      }
    }
  }
}
</style>