<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref='scroll' :pulling-up="true">
      <detail-swiper :top-images='topImages'></detail-swiper>
      <detail-baseinfo :goods='goods'></detail-baseinfo>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info  :detailInfo='detailInfo'
      @imageLoad = "imageLoad"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
// 子组件
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseinfo from './childComps/DetailBaseinfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
//工具
import {GetDetail,Goods,Shop} from 'network/detail.js'
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopInfo,
    DetailGoodsInfo,

    Scroll,
    
  },
  data(){
    return{
      iid : null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{}
    }
  },
  created(){
    //1.保存iid
    this.iid = this.$route.params.iid
    //2.根据iid获取数据
    GetDetail(this.iid).then(res => {
      // 顶部轮播图数据
      // console.log(res);
    const data = res.result;
    this.topImages = data.itemInfo.topImages
    //获取商品信息
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    // console.log(this.goods);
    //获取商家（店铺）信息
    this.shop = new Shop(data.shopInfo)
    //获取商品详细信息
    this.detailInfo = data.detailInfo
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>