<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
    @titleClick='titleClick' ref="nav"></detail-nav-bar>
    <scroll class="content" 
    ref='scroll' 
    :pulling-up="true"
    @scroll="contentScroll"
    :probe-type='3'>
      <detail-swiper :top-images='topImages'></detail-swiper>
      <detail-baseinfo :goods='goods'></detail-baseinfo>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info  :detailInfo='detailInfo'
      @imageLoad = "imageLoad"></detail-goods-info>
      <detail-param-info ref="recparams" :paramInfo="itemParams"></detail-param-info>
      <detail-comment-info ref="reccomment" :commentInfo='commentInfo'></detail-comment-info>
      <goods-list ref="reccommend" :goods='recommends'></goods-list>
    </scroll>
    <detail-buttom-bar></detail-buttom-bar>
  </div>
</template>

<script>
// 子组件
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseinfo from './childComps/DetailBaseinfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailButtomBar from './childComps/DetailButtomBar.vue'
//工具
import {GetDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'
import Scroll from 'components/common/scroll/Scroll.vue'
import {debounce} from 'common/utils'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtomBar,

    Scroll,
    
  },
  data(){
    return{
      iid : null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[],
      itemImgListener:null,
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0
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
    //获取参数的信息
    this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    //取出评论信息
    if (data.rate.cRate !== 0) {
      this.commentInfo = data.rate.list[0]
    }
    // console.log(this.commentInfo);
  })

    //请求推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list
      // console.log(this.recommends);
    })

    this.getThemeTopY = debounce(()=>{
      // 点击导航栏应该移动的距离
       this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.recparams.$el.offsetTop);
      this.themeTopYs.push(this.$refs.reccomment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.reccommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    },300)
  },
   mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener = ()=>{
      newRefresh()
    }
    this.$bus.$on('imgaeLoad',this.itemImgListener)
  },
  destroyed(){
    this.$bus.$off('imgaeLoad',this.itemImgListener)
 
  
  
  
  
  
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()

      this.getThemeTopY()
    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    contentScroll(position){
      // 1.获取y值
      const positionY = -position.y
      // this.themeTopYs遍历值
      // console.log(positionY);
      let length = this.themeTopYs.length
      for (let i = 0;i < length;i++) {
        // console.log(i);
        if (this.currentIndex !== i &&((i < length-1 && positionY >= this.themeTopYs[i] 
        && positionY < this.themeTopYs[i+1]) || 
        (i === length-1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.nav.currenindex = this.currentIndex
        }
      }
    }
  },
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 99;
  height: 100vh;
  background-color: #fff;
}
.detail-nav{
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>