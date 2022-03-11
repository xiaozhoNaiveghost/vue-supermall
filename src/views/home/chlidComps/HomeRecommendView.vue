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
export default ({
  name:'HomeRecommendVieww',
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  },
})
</script>
<style scoped>
.recommend{
 display: flex;
}
.div-img{
 flex: 1;
 text-align:center;
}
img{
  width: 75px;
  height: 75px;
}
</style>