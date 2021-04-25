<template>
  <div class="select-box text-left" @click.stop="toThreeModel">
    <p class="all-title text-primary text-28">Global Resources</p>
    <div
      class="select-item flex items-center justify-between cursor-pointer"
      v-for="(item, index) in panelList"
      :key="index"
    >
      <div class="options">
        <p class="title text-18">{{ item.title }}</p>
        <ul>
          <li
            class="content-list text-textA text-15"
            v-for="(childItem, childIndex) in item.childList"
            :key="childIndex"
          >
            {{ childItem }}
          </li>
        </ul>
      </div>
      <div class="left-icon text-15 text-primary">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <!-- more -->
    <div class="view-more flex items-center text-primary  text-15">
      View More
      <div class="left-icon">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  mixins: [],
  components: {},
  // 数据部分
  props: {},
  data() {
    return {
      panelList: [
        {
          title: "Submarine Cable",
          childList: [
            "9 Self built Submarine Cable",
            "54 Submarine Cable Resources",
          ],
          contentList: [
            { text: "2Africa", tag: "Under Construction" },
            { text: "APG", tag: "" },
            { text: "CSCN", tag: "" },
            { text: "Faster", tag: "" },
            { text: "NCP", tag: "" },
            { text: "SJC", tag: "" },
            { text: "SJC2", tag: "Under Construction" },
            { text: "TSE-1", tag: "" },
          ],
        },
        {
          title: "Terrestrial Cable",
          childList: ["8 Terrestrial Cable Resources"],
          contentList: [
            { text: "DREAM", tag: "" },
            { text: "ERA", tag: "" },
            { text: "ERMC", tag: "" },
            { text: "Mekong River Region", tag: "" },
            { text: "Mongolia to Europe Region", tag: "" },
            { text: "REAL", tag: "" },
            { text: "TEA2-4", tag: "" },
            { text: "TEA3-4", tag: "" },
          ],
        },
        {
          title: "PoP",
          childList: ["170+ PoP"],
          contentList: [
            { text: "Botswana · Gaborone (1)", tag: "" },
            { text: "Congo · Kinshasa (1)", tag: "" },
            { text: "Congo · Lubumbashi (1)", tag: "" },
            { text: "Djibouti · Djibouti (1)", tag: "" },
            { text: "Kenya · Mombasa (1)", tag: "" },
            { text: "Kenya · Nairobi (1)", tag: "" },
            { text: "Lesotho · Maseru (1)", tag: "" },
            { text: "Mauritius · Ebene (1)", tag: "" },
            { text: "Mauritius · Port Louis (1)", tag: "" },
            { text: "Morocco · Dae El Beida (1)", tag: "" },
            { text: "Mozambique · Maputo (1)", tag: "" },
            { text: "Nigeria · Lagos (1)", tag: "" },
            { text: "Rwanda · Kigali (1)", tag: "" },
          ],
        },
        {
          title: "Data Center",
          childList: ["4 self-owned data centers"],
          contentList: [
            { text: "London Data Center", tag: "" },
            { text: "Singapore Data Center", tag: "" },
            { text: "Global Network Center (Hong Kong, China)", tag: "" },
            { text: "Frankfurt Data Center", tag: "" },
          ],
        },
        // {
        //   title: "Global Footprint",
        //   childList: ["36 Global Business Support"],
        //   ortherList: [
        //     {
        //       title: "Greater China (5)",
        //       list: [
        //         { text: "Beijing", value: 0 },
        //         { text: "Greater China", value: 0 },
        //         { text: "Hong Kong & Macau", value: 0 },
        //         { text: "Shanghai", value: 0 },
        //         { text: "Shenzhen", value: 0 },
        //       ],
        //     },
        //     {
        //       title: "Asia Pacific (14)",
        //       list: [
        //         { text: "Asia Pacific", value: 0 },
        //         { text: "Australia", value: 0 },
        //         { text: "Bangladesh", value: 0 },
        //         { text: "Shanghai", value: 0 },
        //         { text: "Cambodia", value: 0 },
        //       ],
        //     },
        //   ],
        // },
      ],
    };
  },
  computed: {},
  watch: {},
  // 生命周期
  created() {},
  mounted() {},
  unmounted() {},
  // 方法
  methods: {
      toThreeModel(){
          window.open('http://3d.btvs.cn/')
      }
  },
};
</script>
<style lang="scss" scoped>
.select-box {
  width: 362px;
  .all-title {
    margin-bottom: 20px;
  }
  .select-item {
    padding: 16px 0;
    border-bottom: solid 1px #dce1e4;
  }
}
.view-more {
    margin-top: 25px;
    cursor: pointer;
    .left-icon{
        margin-left:10px ;
    }
}
.left-icon {
  width: 30px;
  height: 30px;
  border: 1px solid #dce1e4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
