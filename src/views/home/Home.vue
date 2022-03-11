<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './chlidComps/HomeSwiper.vue'
import HomeRecommendView from './chlidComps/HomeRecommendView.vue';
import {getHomeMultidata} from 'network/home'



export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    //1.请求多个数据
    getHomeMultidata().then(res =>{
      // console.log(res);
     this.banners = res.data.banner.list;
    //  console.log(this.banners);
     this.recommends = res.data.recommend.list;
    //  console.log(this.recommends);
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: aliceblue;
}
</style>
