/***顶部导航栏 */
<template>
  <div class="wrapper">
    <mt-header fixed :title="title" >
      <nuxt-link to="/" slot="left" class="iconfont">
        <i :class="left_ico" class="iconfont"></i>
      </nuxt-link>
      <nuxt-link to="/" slot="right" class="iconfont">
        <i :class="right_ico" class="iconfont"></i>
      </nuxt-link>
    </mt-header>


  </div>
</template>

<script>
export default {
  components:{},
  props:{
    title:{
      default:""
    },
    left_ico:{
      default:""
    },
    right_ico:{
      default:""
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{},
}
</script>
<style scoped>
.iconfont{
  text-decoration: none;
}
</style>