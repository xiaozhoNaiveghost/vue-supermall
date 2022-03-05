<template>
  <div class="tab-bar-item" @click='itemClick'>
    <!-- <img src="../../assets/img/tabbar/category.svg">
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
      path: String,
    activColor:{    
        type:String,
        default:'red'      
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activColor}:{}
    }
  },
  methods:{
    itemClick(){
      // console.log('123');
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
width: 25px;
height: 25px;
margin-top: 3px;
vertical-align: middle;
margin-bottom: 2px
}
.active{
  color: red;
}
</style>