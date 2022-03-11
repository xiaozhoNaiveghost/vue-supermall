<template>
<div class="tab-control">
  <div v-for="(item,index) in titles" 
    class="tab-control-item" 
    :class="{active:index === currentIndex}"
    @click="itemcick(index)">
      <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default{
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemcick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  margin-bottom: 10px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
