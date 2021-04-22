<template>
  <div class="page-view relative">
    <div class="top-info flex">
      <div class="text-area">
        <p class="tag  text-primary text-13">Upcoming Conference</p>
        <div class="title text-28">Capacity Asia 2020</div>
        <div class="line"></div>
        <!-- time -->
        <div class="time-box flex text-13">
          <div class="time text-textTab"> <i class="el-icon-date"></i>2021.01.17</div>
          <div class="address text-textTab"> <i class="el-icon-location"></i>Online</div>
        </div>
      </div>
      <!-- cover-img -->
      <img src="../../assets/img/news/new-cover.png" alt="" class="cover-img" />
    </div>
    <!-- main -->
    <div class="main">
      <div class="detail-content flex">
        <div class="content text-18">
          A first-of-its-kind experience, PTC’s Annual Conference will embrace the opportunity for attendees and participants to gather as a virtual community, network, learn, and have fun.
        </div>
        <div class="right-ifno text-textTab text-15">
          <p><i class="el-icon-date"></i>Date</p>
          <p class="content text-text0">2021。01.17</p>
          <p><i class="el-icon-location"></i>Location</p>
          <p class="content text-text0">11:00 AM - 12:30 PM <br /> UTC+8:00</p>
          <p><i class="el-icon-location"></i>Event Website</p>
          <p class="content text-text0 underline">https://www.ptc.org/ptc21/</p>
          <div class="h1"></div>
          <link-more text="Sign Up Now" text-color="#0085d0" />
        </div>
      </div>
      <!-- news-list -->
      <div class="news-content">
        <p class="title text-primary text-28">More Events</p>
        <EventsItem />
        <EventsItem />

      </div>
    </div>

  </div>
</template>
<script>
import EventsItem from "@/components/EventsItem"
import LinkMore from "@/components/tLinkMore"
export default {
  name: '',
  mixins: [],
  components: { EventsItem, LinkMore },
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
.top-info {
  padding: 107px 244px 113px 249px;
  background-color: #f4f6f8;
  .text-area {
    .title {
      margin-top: 10px;
    }
    .line {
      margin-top: 114px;
      margin-bottom: 19px;
      width: 375px;
      height: 1px;
      background-color: #dce1e4;
    }
    .time-box {
      i {
        margin-right: 8px;
      }
      .time {
        margin-right: 35px;
      }
    }
  }
  /* cover-img */
  .cover-img {
    width: 492px;
    height: 277px;
    object-fit: cover;
    margin-left: 80px;
  }
}
.main {
  margin: 0 245px;
  .detail-content {
    padding-top: 90px;
    .content {
      padding-right: 80px;
    }
  }
  .right-ifno {
    flex: 0 0 306px;
    padding-left: 50px;
    border-left: 1px solid #dce1e4;
    p i {
      margin-right: 8px;
    }
    p.content {
      margin-bottom: 25px;
      padding-left: 28px;
    }
  }
}
.news-content {
  margin-top: 96px;
  .title {
    margin-bottom: 40px;
  }
}
// 移动端
@media screen and (max-width: 768px) {
}
</style>