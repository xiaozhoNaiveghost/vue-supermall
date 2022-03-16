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
      <div><a>加入购物车</a></div>
      <div><a>购买</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailButtomBar',
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 55px;
  background:#fff;

  position: relative;
  bottom: 65px;
  display: flex;
/* z-index: 999; */

  /* position: fixed;
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
  padding-top: 13px ;
}
.div-bottom-bar li:nth-child(1) {
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-repeat :no-repeat;
  background-size: 43px;
  background-position-x: 10px;
  background-position-y:  -104px;
}
.div-bottom-bar li:nth-child(2) {
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-repeat :no-repeat;
  background-size: 43px;
  background-position-x: 10px;
  background-position-y:  -192px;
}
.div-bottom-bar li:nth-child(3) {
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-repeat :no-repeat;
  background-size: 43px;
  background-position-x: 10px;
  background-position-y:  0px;
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