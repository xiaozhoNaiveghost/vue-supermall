<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <scroll class="content"
    ref="scroll" :probe-type=3 
    @scroll=contentScroll :pulling-up=true
    @pullingUp=loadMore>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control class="tab-control" 
      :titles="['流行','新款','精选']"
      @tabClick='tabClick'></tab-control>
      <goods-list :goods="showGoods"></goods-list>
   </scroll>
   <back-top @click.native="backClick" v-show=isshow></back-top>
  </div>
</template>

<script>
// 公共
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
//子组件
import HomeSwiper from './chlidComps/HomeSwiper.vue'
import HomeRecommendView from './chlidComps/HomeRecommendView.vue';
import HomeFeatureView from './chlidComps/HomeFeatureView.vue';


import {getHomeMultidata,getHomeGoods} from 'network/home'

//插件
export default {
  name:"Home",
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,

  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodskey:'pop',
      // showGoods,
      isshow:false
    } 
  },
  computed:{
    showGoods(){
      return this.goods[this.goodskey].list
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata(),

    //请求商品数据
    this.getHomeGoods('pop',)
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //事件绑定监听
    tabClick(index){
      switch (index) {
        case 0:
        this.goodskey = 'pop'
        break;
        case 1:
        this.goodskey = 'new' 
        break;
        case 2:
        this.goodskey= 'sell'
        break;
      }
    },
    backClick(){
     this.$refs.scroll.scrollTo(0,0,1000)
    //  console.log(this.$refs.scroll.massage);
    },
    contentScroll(position){
       this.isshow = (-position.y) > 900 ? true : false 
    },
    loadMore(){
    this.getHomeGoods(this.goodskey)
    this.$refs.scroll.scroll.refresh()
    },

    //网络请求 封装
    getHomeMultidata(){
       getHomeMultidata().then(res =>{
      // console.log(res);
     this.banners = res.data.banner.list;
     this.recommends = res.data.recommend.list;
     })
    },
  getHomeGoods(type){
    const page = this.goods[type].page + 1
    getHomeGoods(type,page).then(res =>{
      console.log(res);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.scroll.finisPullUp()
      })
    }
  }
}
</script>
// scoped 作用域
<style scoped>
#home{
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: aliceblue;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position:sticky;
  top: 42px;
}
.content{
height: calc(100% - 98px);
overflow: hidden;
margin-top: 44px;
}
</style>
