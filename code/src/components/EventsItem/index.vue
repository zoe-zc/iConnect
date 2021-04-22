<template>
  <div class="items flex sm:block">
    <img src="../../assets/img/news/evnets-cover.png" alt="" srcset="" class="events-cover">
    <div class="info flex-1">
      <p class="tag text-primary text-13">Upcoming Conference</p>
      <p class="title text-20">PTC 2021</p>
      <hr class="line">
      <div class="time-box flex text-13">
        <div class="time text-textTab"> <i class="el-icon-date"></i>2021.01.17</div>
        <div class="address text-textTab"> <i class="el-icon-location"></i>Online</div>
      </div>
      <!-- link -->
      <div class="link-box flex sm:block">
        <tLinkMore />
        <div class="empty"></div>
        <tLinkMore />
      </div>
    </div>
  </div>
</template>
<script>
import tLinkMore from "@/components/tLinkMore"
export default {
  name: '',
  mixins: [],
  components: { tLinkMore },
  // 数据部分
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {},
};
</script>
<style lang="scss" scoped>
.items {
  margin-bottom: 110px;
}
.events-cover {
  width: 407px;
  height: 229px;
  margin-right: 52px;
}
.info {
  .tag {
    margin-bottom: 9px;
  }
  .title {
    height: 55px;
    margin-bottom: 52px;
  }
  .line {
    margin-bottom: 20px;
  }
  .time-box {
    i {
      margin-right: 8px;
    }
    .time {
      margin-right: 35px;
    }
    .address {
    }
  }
  .link-box {
    padding-top: 22px;
    .empty {
      width: 40px;
    }
  }
}
// 移动端
@media screen and (max-width: 768px) {
  .items {
    margin-bottom: px2rem(52);
  }
  .events-cover {
    margin-bottom: px2rem(15);
    width: px2rem(280);
    height: px2rem(158);
  }
  .info {
    .tag {
      font-size: px2rem(11);
      margin-bottom: 9px;
    }
    .title {
      height: px2rem(22);
      margin-bottom: px2rem(15);
    }
    .line {
      margin-bottom: px2rem(15);
    }
    .time-box {
      i {
        margin-right: px2rem(12);
      }
      .time {
        margin-right: px2rem(40);
      }
      .address {
      }
    }
    .link-box {
      padding-top: px2rem(22);
      .empty {
        width: 40px;
        height: px2rem(16);
      }
    }
  }
}
</style>