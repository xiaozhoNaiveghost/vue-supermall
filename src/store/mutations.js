export default {

  //mutations 唯一的目的就是修改state中状态
  //mutations中的方法尽可能完成的事情比较单一
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    state.cartList.push(payload)
    // }
  }
}