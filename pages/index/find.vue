/**发现 */
<template>
  <div class="wrapper">
    <elHeader title="发现"></elHeader>
    <!-- 视图层 -->
    <div class="view_div">
      <div class="activity_div">
        <div>
          <img src="../../assets/find/find_01.png" alt="">
        </div>
        <div>
          <img src="../../assets/find/find_02.png" alt="">
          <img src="../../assets/find/find_03.png" alt="">
        </div>
      </div>

      <!-- 限时购 -->
      <div class="limitedTime"> 
        <div> 
          <img src="../../assets/find/find1_01.png" alt="">
        </div>
        
        <div class="limitedTime_list"> 
          <div class="limitedTime_listDiv" v-for="(item,index) in limitedTime_list" :key="index">
            <div>
              <img :src="item.img" alt="">
            </div>
            <div class="limitedTime_listDiv_description"> 
              <div>{{item.title}}</div>
              <div><span>{{item.discount}}金币</span> <span>￥{{item.reality}}</span> </div>
            </div>
          </div>
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
      limitedTime_list:[
        {
          img:require("../../assets/find/find1_02.png"), //图片
          title:'3元饿了么红包', //标题
          discount:"90",//优惠
          reality:'3' //现实
        },
        {
          img:require("../../assets/find/find1_02.png"), 
          title:'3元饿了么红包', 
          discount:"90",
          reality:'3'
        },
        {
          img:require("../../assets/find/find1_02.png"), 
          title:'3元饿了么红包', 
          discount:"90",
          reality:'3'
        },
        {
          img:require("../../assets/find/find1_02.png"), 
          title:'3元饿了么红包', 
          discount:"90",
          reality:'3'
        },
      ]
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
.activity_div{
  display: flex;
}
.activity_div>div{
  width: 50%;
  height: auto;
}
.activity_div img{
  width: 100%;
  height: 100%;
}
.activity_div>div:nth-child(2) img{
  height: 48%;
}
/**显示好礼 */
.limitedTime{
  margin-top: 5px;
}
.limitedTime > div:nth-child(1){
  width: 100%;
  height: 50px;
}
.limitedTime > div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
.limitedTime_list{
  display:flex;
  width: 100%;
  overflow-x: auto;
}
.limitedTime_listDiv{
  width: auto;
  height: 200px;
  margin: 0px 5px 0px 5px;
}
.limitedTime_listDiv>div:nth-child(1){
  width: 130px;
  height: auto;
}
.limitedTime_listDiv>div:nth-child(1) img{
  width: 100%;
  height: auto;
}
.limitedTime_listDiv>div:nth-child(2){
  width: 100%;
  margin-left: 10px;
  font-size: 14px;
}
.limitedTime_listDiv_description>div:nth-child(2){
  margin-top: 5px; 
}
.limitedTime_listDiv_description>div:nth-child(2)>span:nth-child(1){
  color: red;
}
.limitedTime_listDiv_description>div:nth-child(2)>span:nth-child(2){
  color: #5c5b5b;
  text-decoration: line-through;
}
</style>