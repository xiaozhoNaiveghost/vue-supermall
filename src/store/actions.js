export default {
  addCart(context, payload) {
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
    } else {
      payload.count = 1
      context.commit('addToCart', payload)
      // context.state.cartList.push(payload)
    }
    // console.log(store);
  }
}