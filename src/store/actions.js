export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //重复的商品 +1 新的商品push进去
      // console.log(context);
      let oldProduct = null
      for (const item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      //2.判断oldProduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        // payload.count++
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
        // context.state.cartList.push(payload)
        // console.log(payload);
        resolve('添加了新商品')
      }
      // console.log(store);
    })
  }
}