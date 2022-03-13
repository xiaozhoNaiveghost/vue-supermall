<template>
   <swiper>
      <swiper-item v-for="item in banners"> 
        <a :href="item.link">
          <img :src="item.image" alt="" @load=imageload>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data(){
    return{
      flag : false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageload(){
    if (!this.flag) {
      this.$emit('swiperImgeLoad')
      this.flag = true
    }
   }
  }
}
</script>

<style scoped>

</style>