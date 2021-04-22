// 所有新闻列表
<template>
  <div class="page-view">
    <!-- banner -->
    <Banner :bannerInfo="bannerInfo" />
    <!-- news-list -->
    <div class="news-content">
      <div class="filter sm:hidden"></div>
      <div class="item-box row grid grid-cols-3 gap-1 sm:grid-cols-1 sm:gap-0">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
      <!-- pag -->
      <div class="pag-box">
        <el-pagination class="sm:hidden" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
        <van-pagination class="md:hidden" v-model="currentPage" :total-items="50" :show-page-size="5">
          <template #prev-text>
            <van-icon name="arrow-left" />
          </template>
          <template #next-text>
            <van-icon name="arrow" />
          </template>
          <template #page="{ text }">{{ text }}</template>
        </van-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner"
import Breadcrumb from '@/components/Breadcrumb'
import NewsItem from "@/components/NewsItem"
import EventsItem from "@/components/EventsItem"
export default {
  name: '',
  mixins: [],
  components: { Breadcrumb, NewsItem, EventsItem, Banner },
  // 数据部分
  props: {},
  data() {
    return {
      currentPage: 5,
      bannerInfo: {
        img: require('../../assets/img/banner/elements-image-contact-us@3x.png'),
        title: 'News',
        tips: 'Learn about the latest news of China Mobile International.',
      }
    };
  },
  computed: {},
  watch: {},
  // 生命周期
  created() { },
  mounted() { },
  unmounted() { },
  // 方法
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
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
  .pag-box {
    height: 30px;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 90px;
  }
  .filter {
    height: 68px;
    margin-bottom: 72px;
  }
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
    .pag-box {
      height: px2rem(25);
      text-align: center;
      margin-top: px2rem(50);
      margin-bottom: px2rem(26);
    }
    padding: 0 px2rem(20);
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
