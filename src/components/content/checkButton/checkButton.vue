<template>
  <div class="check-button" 
  :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'checkButton',
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.check-button{
border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #aaa;
  margin-left: 5px;
}
.check{
  border-color: red;
  background-color: red;
}


</style>