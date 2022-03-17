<template>
  <div class="bottom-bar">
    <div class="div-bottom-bar">
      <ul>
        <li><a>客服</a></li>
        <li><a>店铺</a></li>
        <li><a>收藏</a></li>
      </ul>
    </div>
    <div class="div1-botton-bar">
      <div @click='addToCart'><a>加入购物车</a></div>
      <div><a>购买</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailButtomBar',
  methods:{
    addToCart(){
     this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 58px;
  background:#fff;

  /* position: absolute; */
  /* bottom: 65px; */
  display: flex;
/* z-index: 999; */
position: fixed;
  /* 
  left: 0;
  bottom: 0;
  z-index: 999; */
}
.div-bottom-bar{
  flex: 1;
}
.div-bottom-bar ul{
  display: flex;
}
.div-bottom-bar li{
  text-align: center;
  line-height: 70px;
  list-style:none;
  flex: 1;
  font-size: 15px;
  /* padding-top: 13px ; */
}
.div-bottom-bar li:nth-child(1) {
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat 15px -65px;
  height: 40px;
  /* overflow: hidden; */
  background-size: 30px;
}
.div-bottom-bar li:nth-child(2) {
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat 16px -127px;
  height: 40px;
  /* overflow: hidden; */
  background-size: 30px;
}

.div-bottom-bar li:nth-child(3) {
  /* width: 35px; */
  height: 40px;
  background: url('../../../assets/img/detail/detail_bottom.png') no-repeat 15px 7px;
  /* overflow: hidden; */
  background-size: 30px;
}
.div-bottom-bar li a{
  display: block;
  height: 10px;
  /* width: 40px; */
  margin-top: 10px;
  /* overflow: hidden; */
}
.div1-botton-bar{
  flex: 1;
  display: flex;
}
.div1-botton-bar div{
  text-align: center;
  line-height: 54px;
  flex: 1;
}
.div1-botton-bar div:nth-child(1){
  background-color: #ffdd13;
}
.div1-botton-bar div:nth-child(1) a{
  color: black;
}
.div1-botton-bar div:nth-child(2){
  background-color: #ff779a;
}
.div1-botton-bar div:nth-child(2) a{
  color: #fff
}
</style>