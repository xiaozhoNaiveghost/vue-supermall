<template>
  <div class="goods-item">
   <a :href="goodsItem.clientUrl">
     <img :src="goodsItem.show.img" alt="" @load="imgaeLoad">
   <div class="goods-info" >
     <p>{{goodsItem.title}}</p>
     <span class="price">{{goodsItem.price+"￥"}}</span>
     <span class="collect">{{goodsItem.cfav}}</span>
   </div>
  </a>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
        /* <img :src="goodsItem.show.img" alt="" @load="imgaeLoad">
          @load是vue事件 在原生里面是 img.onload = funcion(){}
        */ 
    imgaeLoad(){
      this.$bus.$emit('imgaeLoad')
    }
  }
}
</script>

<style scoped>
.goods-item{
  text-align:center;
  margin-left: 12px;
  margin-bottom: 7px;
  width: 45%;
}
.goods-item img{
  text-align: center;
  width: 100%;
  max-height: 220px;
  /* min-width: 190px; */
  min-height: 220px;
  border-radius:5px  ;
}
.goods-item div{
  /* margin-top: 5px; */
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* display: flex; */
}
.goods-item .goods-info p {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
/* margin-bottom: 2px; */
/* margin-left: 5px; */
}
.goods-item .goods-info .price{
  color: var(--color-high-text);
  margin-right: 35px;
  /* margin-left: ; */
}
.collect{
  margin-right:  10px;
  /* float: left; */

}
.collect::before{
  content:'';
  background: url('assets/img/common/collect.svg') no-repeat;
  display: inline-block;
  position: relative;
  top: 3px;
  height: 17px;
  width: 17px;
  background-size: 100%;
}
</style>