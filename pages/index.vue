<template>
  <div class="wrapper">
    <nuxt/>
    <!-- 底部导航栏 -->
    <div class="tabbar_div">
      <mt-tabbar v-model="selected" @change="muenBtn">
        <mt-tab-item id="index" @click.native="muenBtn">
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
      selected:'index'
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    console.log(this.$route)
  },
  methods:{
    /**底部菜单页面跳转 */
    muenBtn(){
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
/**底部导航栏修复 */
.tabbar_div >>> .mint-tabbar{
  position: fixed;
}
</style>