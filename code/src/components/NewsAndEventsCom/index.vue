<template>
  <div class="page-view">
    <!-- news-list -->
    <div class="news-content">
      <p class="title text-primary text-28">Latest News</p>
      <div class="item-box row grid grid-cols-3 gap-1 sm:grid-cols-1 sm:gap-0">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
      <div class="more text-primary text-13 cursor-pointer">View All</div>
    </div>
    <!-- events -->
    <div class="events-content">
      <p class="title text-primary text-28">Events</p>
      <div class="events-list">
        <EventsItem />
        <EventsItem />
        <EventsItem />
        <EventsItem />
      </div>
      <div class="more text-primary text-13 cursor-pointer">View All</div>
    </div>
  </div>
</template>
<script>
import NewsItem from "@/components/NewsItem"
import EventsItem from "@/components/EventsItem"
export default {
  name: '',
  mixins: [],
  components: { NewsItem, EventsItem },
  // 数据部分
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {}
}
</script>
<style lang="scss" scoped>
.banner-info {
  padding: 67px 245px 0;
  .img {
    width: 320px;
    height: 320px;
  }
}
.news-content,
.events-content {
  margin: 0 245px;
  .title {
    margin: 60px 0 40px 0;
  }
  .more {
    text-align: center;
    line-height: 42px;
    width: 122px;
    height: 42px;
    border: solid 1px #dce1e4;
    margin: 50px auto 100px;
  }
}
// 移动端
@media screen and (max-width: 768px) {
  .page-view {
    padding: 0 px2rem(20);
  }
  .banner-info {
    padding: px2rem(49) 0 0;
    text-align: left;
    .title {
      font-size: px2rem(28);
      margin-bottom: px2rem(5);
    }
    .info {
      font-size: px2rem(17);
      line-height: 1.29;
      font-weight: 600;
    }
    .img {
      width: px2rem(164);
      height: px2rem(164);
      margin-bottom: px2rem(30);
    }
  }

  .news-content,
  .events-content {
    margin: 0 auto;
    .title {
      margin: px2rem(50) 0 px2rem(20) 0;
    }
    .more {
      text-align: center;
      line-height: px2rem(35);
      width: px2rem(95);
      font-size: px2rem(11);
      height: px2rem(35);
      border: solid 1px #dce1e4;
      margin: px2rem(40) auto px2rem(30);
    }
  }
}
</style>
