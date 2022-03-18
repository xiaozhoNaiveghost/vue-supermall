<template>
  <div class="bottom-bar">
    <div class="check-context">
      <div>
        <check-button
         :is-checked=isSelectAll
         @click.native="checkClick"></check-button>
      </div>
      <div>
        <span>全选</span>
        <span>合计:￥{{totalPrice}}</span>
      </div>
    </div>
    <div class="bottom-bar-div">提交({{checkLength}})</div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton.vue'


export default {
  components: { 
    checkButton 
  },
  name:'CartBottonBar',
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item =>{   
        return item.checkList
      }).reduce((preValue,item)=>{
        return preValue+item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item =>item.checkList).length
    },
    isSelectAll(){
      // return !(this.$store.state.cartList.filter(item => !item.checkList).length)
    if (this.$store.state.cartList.length === 0) {
      return false
    }
    return !this.$store.state.cartList.find(item => !item.checkList)
    }
  },
  methods:{
    checkClick(){
      if (this.isSelectAll) { //全部选中
        this.$store.state.cartList.forEach(item => item.checkList =false);
      }else{
        this.$store.state.cartList.forEach(item => item.checkList = true)
      }
  }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  width: 100%;
  height: 40px;
  /* background-color: #ff5300; */
  position: fixed;
  bottom: 49px;
  left: 0;
  /* z-index: 9999; */
}
.check-context{
  background-color: #eeeeee;
  display: flex;
  flex: 3;
}
.check-context div:nth-child(1){
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.check-context div:nth-child(2){
 flex: 2;
 line-height: 40px;
 font-size: 20px;
}
.check-context div:nth-child(2) span{
  margin-left: 5px;
  margin-right: 15px;
}
.bottom-bar-div{
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #ff5300;
  display: flex;
  color: #fff;
  font-size: 20px;
  /* margin: auto; */
}
.actv{
  border-color: red;
  background-color: red;
}
</style>