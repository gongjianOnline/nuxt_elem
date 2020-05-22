<template>
  <div class="wrapper">
    <elHeader title="我的"></elHeader>
    <div class="contanter"> 
      <!-- 登录 -->
      <div class="user-contanter">
        <div class="user-img"> 
          <img :src="require('../../assets/mine/user_logo.png')" alt="">
        </div>
        <div class="user-state">
          <div>登录/注册</div>
          <div>登录后享受更多特权</div>
        </div>
        <div class="user-out">
          >
        </div>
      </div>
      <!-- 资产 -->
      <div class="assets-container">    
        <div> 
          <p class="assets-content">0.00 <span class="unit-content">元</span> </p>
          <div class="assets-name">钱包</div>
        </div>
        <div> 
          <p class="assets-content">0 <span class="unit-content">个</span> </p>
          <div class="assets-name">红包</div>
        </div>
        <div> 
          <p class="gold-content">0 <span class="unit-content">个</span> </p>
          <div class="assets-name">金币</div>
        </div>
      </div>

      <div class="container-marginTop module"> 
        <div class="text-content">
          <div>ico</div>
          <div>我的地址</div>
        </div>
        <div class="ico-content">></div>
      </div>

      <div class="container-marginTop">
        <div class="module bottom-border"> 
          <div class="text-content">
            <div>ico</div>
            <div>金币商城</div>
          </div>
          <div class="ico-content">></div>
        </div>
        <div class="module"> 
          <div class="text-content">
            <div>ico</div>
            <div>分享拿10元现金</div>
          </div>
          <div class="ico-content">></div>
        </div>
      </div>

      <div class="container-marginTop">
        <div class="module bottom-border"> 
          <div class="text-content">
            <div>ico</div>
            <div>我的客服</div>
          </div>
          <div class="ico-content">></div>
        </div>
        <div class="module"> 
          <div class="text-content">
            <div>ico</div>
            <div>下载饿了么App</div>
          </div>
          <div class="ico-content">></div>
        </div>
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
.contanter{
  height: 90vh;
  background: #f5f5f5f5;
  margin-top: 40px;
}
.user-contanter{
  background-color:#53a5f0;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: space-around;
}
.user-img{
  width:auto;
  height: 100%;
  display: flex;
  align-items: center;
}
.user-img > img{
  width: 58px;
  height: 58px;
  border-radius: 50%;
}
.user-state{
  width:60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-state>div{
  margin-bottom: 10px;
}
.user-out{
  width:auto;
  height: 100%;
  display: flex;
  font-size: 18px;
  align-items: center;
}

/* 我的资产 */
.assets-container{
  background: #fff;
  display: flex;
  justify-content:space-between;
}
.assets-container >div{
  width: 30%;
  height: 80px;
  border-right: 1px solid #f5f5f5;
  text-align: center;
  padding-top: 8px;
}
.assets-content{
  color: #4aa5f0;
  font-size: 24px;
  font-weight: 600;
}
.gold-content{
  color: #ff5f3e;
  font-size: 24px;
  font-weight: 600;
}
.unit-content{
  font-size: 16px;
  color:#000 ;
  font-weight:400
}
.assets-name{
  margin-top: 5px;
  font-size: 16px;
}

/* 功能条 */
.container-marginTop{
  margin-top: 10px;
}
.module{
  background-color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-content{
  display: flex;
  margin-left: 10px;
  font-size: 18px;
}
.text-content>div:nth-child(1){
  width: 40px;
}
.ico-content{
  margin-right: 10px;
  font-size: 18px;
}
.bottom-border{
  border-bottom: 1px solid #f5f5f5;
}





</style>