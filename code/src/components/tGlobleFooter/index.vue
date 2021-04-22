// 公共底部
<template>
  <div class="footer">
    <LinkList :linkInfo="linkMenu[0]" />
    <LinkList :linkInfo="linkMenu[1]" />
    <!-- link and floowus -->
    <div class="third-info">
      <p class="title">General Enquiry <span class="down-icon iconfont iconarrow-down-bold"></span></p>
      <div class="tel-box">
        <p>Tel: +852 3975 6688</p>
        <p>Tel: +852 3975 6666 (Non-office hours)</p>
        <p>Email: info@cmi.chinamobile.com</p>
      </div>
      <LinkMore text="Contact Us" />
      <div class="block"></div>
      <LinkMore text="Online Enquiry Us" />
      <FollowUs />
    </div>
  </div>
</template>
<script>
import FollowUs from './subCom/FollowUs'
import LinkList from './subCom/LinkList'
import LinkMore from '@/components/tLinkMore'
export default {
  name: '',
  mixins: [],
  components: { LinkMore, LinkList, FollowUs },
  // 数据部分
  props: {},
  data() {
    return {
      linkMenu: [
        {
          title: 'About CMI iConnect',
          list: [
            { name: 'Why Us', to: '/whyus' },
            { name: 'Products and Services', to: '/whyus' },
            { name: 'Global Resources', to: '/whyus' },
            { name: 'News and Events', to: '/whyus' },
            { name: 'Movie Room', to: '/whyus' },
            { name: 'hi-H Program', to: '/whyus' }
          ]
        },
        // 第二列跳转menu list
        {
          title: 'Products and Services',
          list: [
            { name: 'iConnect Data', to: '/whyus' },
            { name: 'iConnect Mobile', to: '/whyus' },
            { name: 'iConnect IoT', to: '/whyus' },
            { name: 'iConnect Pro', to: '/whyus' },
            { name: 'iConnect SMS', to: '/whyus' },
            { name: 'iConnect Voice', to: '/whyus' }
          ]
        }
      ]
    }
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
.footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 95px;
  padding-top: 42px;
}
/* mobile */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding-bottom: px2rem(50);
    padding-top: px2rem(32);
    padding-left: px2rem(20);
    .third-info {
      .title {
        font-size: px2rem(15);
        font-weight: 500;
        line-height: px2rem(20);
        position: relative;
        margin-bottom: px2rem(11);
        .down-icon {
          font-size: px2rem(5);
          position: relative;
          top: 0px;
          font-weight: bold;
        }
      }
      .tel-box {
        font-size: px2rem(13);
        line-height: px2rem(18);
        color: #6b787f;
        margin-bottom: px2rem(12);
        p {
          margin-bottom: px2rem(5);
        }
      }
    }
  }
}

/* pc */
@media (min-width: 769px) {
  .footer {
    /* width: calc(100vw - 490px); */
    /* max-width: 1154px; */
    margin: 0 246px;
    .third-info {
      .title {
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        position: relative;
        margin-bottom: 14px;
        .down-icon {
          font-size: 12px;
          position: relative;
          top: -4px;
          font-weight: bold;
        }
      }
      /* tel-box */
      .tel-box {
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;
        padding-bottom: 24px;
      }
      .block {
        height: 10px;
      }
    }
  }
}
</style>
