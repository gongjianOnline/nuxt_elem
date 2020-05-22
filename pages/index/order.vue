/**订单页 */
<template>
  <div class="wrapper">
    <elHeader title="订单页"></elHeader>
    <div class="container"> 
      <div> 
        <img :src="require('../../assets/order/logo.png')" alt="">
      </div>
      <div class="content"> 
        <p>登录后查看外卖订单</p>
        <el-button type="success">立即登录</el-button>
      </div>

    </div>



  </div>
</template>

<script>
import elHeader from "~/components/header"
export default {
  components:{
    elHeader:elHeader
  },
  props:{},
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
.container{
  height: 90vh;
  background: #f5f5f5;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
  text-align: center;
}
.content>p{
  margin-bottom: 10px;
}

</style>