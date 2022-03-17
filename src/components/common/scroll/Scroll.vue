<template>
<!-- ref 绑定子组件 -->
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullingUp:{
      type:Boolean,
      default:0
    }
    
  },
  data(){
    return{
      scroll:null,
      // massage:'哈哈哈'
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullingUp
    })
    // this.scroll.scrollTo(0,0,item)
     this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    
    if (this.pullingUp) {
      this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp')
      })
    }
  },
  
  methods:{
    scrollTo(x=0,y=0,tiem=500){
      this.scroll && this.scroll.scrollTo(x,y,tiem)
    },
    finisPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      // console.log('----------');
      this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }

  },

}
</script>
<style scoped>
</style>