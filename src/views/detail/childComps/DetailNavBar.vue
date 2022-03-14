<template>
    <nav-bar>
      <div slot="left" class="navbar-img" @click="imgclick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" 
        class="title-item" 
        :class="{active:index=== currenindex}"
        @click=titleclick(index)>
        {{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'


export default {
  name:'DetailNavBar',
  components: {
     NavBar
    },
    data(){
      return{
        title:["商品",'参数','评论','推荐'],
        currenindex:0
      }
    },
    methods:{
      titleclick(index){
        this.currenindex = index
      },
      imgclick(){
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped>
.navbar-img img{
 margin-top: 15px;
}
.title{
  display: flex;
  font-size: 15px;
}
.title .title-item{
  flex: 1;
  margin-top: 5px;
}
.active{
  color: var(--color-high-text);
}
</style>