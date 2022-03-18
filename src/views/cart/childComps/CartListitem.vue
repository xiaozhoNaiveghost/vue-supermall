<template>
  <div class="cartListitem">
    <div class="chcleck-button-click">
    <check-button
    :is-checked="product.checkList"
    @click.native="checkClick"></check-button>
    </div>
    <img :src="product.image">
    <div class="cartListitem-title">
      <h3>{{product.title}}</h3>
      <p class="cartListitem-p">{{product.desc}}</p> 
      <div class="product-price">
        <p class="product-price-p">￥{{product.price}}</p>
        <p class="product-count">{{'x'+product.count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton.vue'
export default {
  name:'CartListitem',
  components:{
     checkButton,
   },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      this.product.checkList = !this.product.checkList
    }
  }
}
</script>

<style scoped>
.cartListitem{
  display: flex;
  height: 130px;
  padding: 10px 10px 10px 0px;
  border-bottom: 2px solid #dadada;
}
.cartListitem img{
  width: 80px;
  height: 100%;
  border-radius: 5px;
  margin-right: 10px ;
  margin-left: 5px;
  /* flex: ; */
}
.cartListitem-title{
 /* padding: 5px; */
  flex: 2;
}
.cartListitem-title h3{
  display: inline-block;
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
}
.cartListitem-p{
  display: inline-block;
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  margin-left: 3px;
  margin-bottom: 25px;
}
.product-price{
  display: flex;
  justify-content: space-between;
}
.product-price-p{
  /* letter-spacing: -1px; */
  font-size: 20px;
  /* text-indent: 50px; */
  color: #f1804f;
}
.product-count{
  font-size: 20px;
}
.chcleck-button-click{
  display: flex;
  flex-direction:column;
  justify-content:center
}
</style>