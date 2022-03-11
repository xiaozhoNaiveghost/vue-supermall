<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
// 公共
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
//子组件
import HomeSwiper from './chlidComps/HomeSwiper.vue'
import HomeRecommendView from './chlidComps/HomeRecommendView.vue';
import HomeFeatureView from './chlidComps/HomeFeatureView.vue';


import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name:"Home",
  components:{
    NavBar,
    TabControl,
    GoodsList,

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
      }
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
      })
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
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
</style>
