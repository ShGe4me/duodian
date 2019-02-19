<template>
<div class="tab-bar mb2">

  <div class="nav">
    <span
        :class="{active: activeIndex == index,pr5:true,pl5:true}" 
        v-for="(item, index) in navList" 
        :key="index"
        @click="handlerChange(index, item)"
    >
    {{item[label]}}
    </span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    navList: Array,
    label: {
        type: String,
        default: 'text'
    },
    defaultIndex: Number
  },
  data () {
    return {
        activeIndex: 0
    }
  },
  watch: {
    defaultIndex (index) {
        this.setDefaultIndex(index)
    }
  },
  created () {
        this.setDefaultIndex(this.defaultIndex)
  },
  methods: {
    setDefaultIndex (index) {
        this.activeIndex = index ? index : 0
    },
    handlerChange (index, item) {
        this.activeIndex = index
        this.$emit('change', index, item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/static/scss/demo.scss';
.tab-bar{
    width: 100%;
    height: 40px;
    .nav{
        width: 100%;
        height: 100%;
        font-size: 14px;
        span{
            display: inline-block;
            font-size: 14px;
            color: #000;
            text-align: center;
            line-height: 40px;
        }
        .active{
            color: red;
            border-bottom: 2px solid #f90;
        }
    }
}

</style>
