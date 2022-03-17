import BackTop from 'components/content/backTop/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
      //  console.log(this.$refs.scroll.massage);
    },
  }
}