<template>
  <div class="page-view">
    <banner :bannerInfo="bannerInfo" />
    <div class="h-1"></div>
    <div class="main-box">
      <FilterBar />
      <div class="video-box flex flex-wrap justify-between">
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner"
import FilterBar from "@/components/zFilterBar"
import VideoItem from "@/components/VideoItem"
export default {
  name: '',
  mixins: [],
  components: { Banner, FilterBar, VideoItem },
  // 数据部分
  props: {},
  data() {
    return {
      bannerInfo: {
        img: require('../../assets/img/video/elements-image-video-center@2x.png'),
        title: 'Video Center',
        tips: 'Watch iSolutions corporate video.',
        buttonText: ''

      }
    }
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
.main-box {
  margin: 0 245px;
  .video-box {
    padding-top: 62px;
    .items {
      margin-bottom: 90px;
    }
  }
}

// 移动端
@media screen and (max-width: 768px) {
  .main-box {
    margin: 0;
  }
}
</style>