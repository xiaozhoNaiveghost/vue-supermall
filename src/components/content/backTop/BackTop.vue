<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name:'BackTop',
}

</script>

<style scoped>
.back-top{
  position: absolute;
  z-index: 100;
  float: left;
  /* top: 0; */
  right: 10px;
  bottom: -45px;
}
.back-top img{
  width: 60px;
  height: 60px;
}
</style>