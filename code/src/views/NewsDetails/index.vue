<template>
  <div class="page-view relative">
    <div class="top-bg">
    </div>
    <!-- detail -->
    <div class="details relative">
      <!-- go back -->
      <el-button type="primary" class="go-back flex items-center justify-center sm:hidden" icon="el-icon-arrow-left" circle></el-button>
      <div class="time-info text-13">
        <span class="text-primary">Insights</span>
        <el-divider direction="vertical"></el-divider>
        <span class="time text-textTab">2021.01.17</span>
      </div>
      <p class="title text-28">China Mobile International's Go mCloud Carnival
        Accelerates Enterprise Cloud Adoption with Various Incentives</p>
      <div class="content text-15">
        <img src="../../assets/img/news/detail.png" alt="" srcset="">
        Celebrating its tenth year of operations in 2020, China Mobile International Limited (CMI) will launch its first Go mCloud Carnival, to help enterprise customers stay ahead of digital trends and embark on cloud transformation. The online campaign will showcase a variety of cost-effective cloud network solutions from CMI and its global partners, offering customers one-stop shopping experiences.

        The uncertainties brought by the COVID-19 pandemic have seen a surge in digital transformation as enterprises adopt cloud technologies to help them respond to market changes with agility. CMI's cloud-network integration platform mCloud provides customers with visible, accessible and manageable cloud-network solutions. Since its launch in May 2019, mCloud has helped more than 7,000 enterprise customers efficiently deploy and manage innovative cloud and network products.

        During the Go mCloud Carnival, customers can register on the mCloud website to trial the service and receive multiple gifts and discounts and access to free trials of other cloud services.
        Celebrating its tenth year of operations in 2020, China Mobile International Limited (CMI) will launch its first Go mCloud Carnival, to help enterprise customers stay ahead of digital trends and embark on cloud transformation. The online campaign will showcase a variety of cost-effective cloud network solutions from CMI and its global partners, offering customers one-stop shopping experiences.

        The uncertainties brought by the COVID-19 pandemic have seen a surge in digital transformation as enterprises adopt cloud technologies to help them respond to market changes with agility. CMI's cloud-network integration platform mCloud provides customers with visible, accessible and manageable cloud-network solutions. Since its launch in May 2019, mCloud has helped more than 7,000 enterprise customers efficiently deploy and manage innovative cloud and network products.

        During the Go mCloud Carnival, customers can register on the mCloud website to trial the service and receive multiple gifts and discounts and access to free trials of other cloud services.
      </div>
    </div>
    <!-- news-list -->
    <div class="news-content">
      <p class="title text-primary text-28">Related News</p>
      <div class="item-box row grid grid-cols-3 gap-1 sm:grid-cols-1 sm:gap-0">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
      <!-- <div class="more text-primary text-13 cursor-pointer">View All</div> -->
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import NewsItem from "@/components/NewsItem"
import EventsItem from "@/components/EventsItem"
export default {
  name: '',
  mixins: [],
  components: { Breadcrumb, NewsItem, EventsItem },
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
.page-view {
  margin-bottom: 110px;
}
.top-bg {
  background-color: #f4f6f8;
  height: 497px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
.go-back {
  background-color: #0085d0;
  position: absolute;
  left: -81px;
  top: 87px;
  width: 35px;
  height: 35px;
  &:active {
    outline: none;
    border: none;
  }
  &:focus {
    outline: none;
    border: none;
  }
}
.details {
  padding-top: 87px;
  width: 786px;
  margin: 0 auto;
  .time-info {
    margin-top: 5px;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 60px;
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
    margin-bottom: 0;
  }
  .top-bg {
    background-color: #f4f6f8;
    height: px2rem(259);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
  .go-back {
    background-color: #0085d0;
    position: absolute;
    left: -81px;
    top: 87px;
    width: 35px;
    height: 35px;
    &:active {
      outline: none;
      border: none;
    }
    &:focus {
      outline: none;
      border: none;
    }
  }
  .details {
    padding-top: px2rem(40);
    width: 100%;
    margin: 0 auto;
    .time-info {
      margin-top: 0;
    }
    .title {
      margin-top: px2rem(10);
      margin-bottom: px2rem(30);
      font-size: px2rem(17);
    }
  }

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