<template>
  <div class="cart">
    <nav-bar class="nav-bnar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <cart-botton-bar></cart-botton-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottonBar from './childComps/CartBottonBar.vue'

import {mapGetters} from 'vuex'

export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartBottonBar,

  },
  computed:{
  //  ...mapGetters(['cartLength','cartList'])
  ...mapGetters({
    length:'cartLength',
  })
  }
}
</script>
<style scoped>
.cart{
  height: 100vh;
}
.nav-bnar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>