/***
 * vuex的全局mixin,免去在组件或页面中从vuex中引入 mapState和mapMutations
 * 在页面或组件中修改store的状态时，调用方法 eg：
 *  this.$vuex('key', value);
 *  this.$vuex('key.name', value);
 ***/

 import { mapState, mapMutations } from "vuex";
 import store from "@/store";
 
 let $vuexStoreKey = [];
 try {
   $vuexStoreKey = store.state ? Object.keys(store.state) : [];
 } catch (error) {}
 

const commonMixin = {
   // 创建时将更新状态方法挂载在$vuex中
   /**
    * @param name - 修改state的key值
    * @param value - 要修改的值
    * */
 
   created() {
   },
   computed: {
     ...mapState($vuexStoreKey),
     deviceType () {
      if (this.screenWidth < 1024) {
        return 'mobile'
      } else {
        return 'pc'
      }
    }
   },
   methods: {
    ...mapMutations(['setWidth', 'setHeight'])
   },
 };
 
 export default commonMixin