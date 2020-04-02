<template>
  <div class="wrapper">
    
    <nuxt/>
    
    <!-- 底部导航栏 -->
    <div>
      <mt-tabbar v-model="selected" @change="muenBtn">
        <mt-tab-item id="index-home" @click.native="muenBtn">
          <div class="icon_changyonglogo40">
            <i class="iconfont icon-changyonglogo40"></i>
          </div>
          首页
        </mt-tab-item>
        <mt-tab-item id="index-find" @click.native="muenBtn">
          <div class="icon_div">
            <i class="iconfont icon-faxian"></i>
          </div>
          发现
        </mt-tab-item>
        <mt-tab-item id="index-order" @click.native="muenBtn">
         <div class="icon_div">
            <i class="iconfont icon-dingdan"></i>
          </div>
          订单
        </mt-tab-item>
        <mt-tab-item id="index-mine" @click.native="muenBtn">
          <div class="icon_div">
            <i class="iconfont icon-wode"></i>
          </div>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      selected:'index-home'
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    console.log(this.$route)
  },
  methods:{
    muenBtn(){
      console.log("123456")
      this.$router.push({
        name:this.selected
      })
    }
  },
}
</script>
<style scoped>
.icon_div{
  margin-bottom: 10px;
}
.icon_changyonglogo40 > i{
  font-size: 30px;
}
.icon_div >i{
  font-size: 20px;
}
</style>