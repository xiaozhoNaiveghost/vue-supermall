<template>
  <div class="recommend">
    <div v-for="item in recommends" class="div-img">
      <a :href="item.link">
        <img :src='item.image' alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name:'HomeRecommendVieww',
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>
<style scoped>
.recommend{
 display: flex;
 width: 100%;
 text-align:center;
 font-size: 12px;

 padding: 15px 0 30px;
 border-bottom: 8px solid #eee;
}
.div-img{
 flex: 1;
}
img{
  width: 75px;
  height: 75px;
}
</style>