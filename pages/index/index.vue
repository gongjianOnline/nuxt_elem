/**首页 */
<template>
  <div class="wrapper">
    <elHeader title="广阳区"></elHeader>
    <div class="view_div">
      <!-- 头部菜单 -->
      <div>
        <div class="header_menu">
          <div>
            <img src="../../assets/home/header/food.png" alt="">
            <div>美食</div>
          </div>
          <div>
            <img src="../../assets/home/header/dinner.png" alt="">
            <div>晚餐</div>
          </div>
          <div>
            <img src="../../assets/home/header/fruit.png" alt="">
            <div>水果</div>
          </div>
          <div>
            <img src="../../assets/home/header/medical.png" alt="">
            <div>医药健康</div>
          </div>
          <div>
            <img src="../../assets/home/header/flower.png" alt="">
            <div>浪漫鲜花</div>
          </div>
        </div>
        <div class="header_menu">
          <div>
            <img src="../../assets/home/header/fresh.png" alt="">
            <div>美食</div>
          </div>
          <div>
            <img src="../../assets/home/header/supermarket.png" alt="">
            <div>晚餐</div>
          </div>
          <div>
            <img src="../../assets/home/header/snack.png" alt="">
            <div>水果</div>
          </div>
          <div>
            <img src="../../assets/home/header/spicy.png" alt="">
            <div>水果</div>
          </div>
          <div>
            <img src="../../assets/home/header/purchase.png" alt="">
            <div>鲜花</div>
          </div>
        </div>
      </div>

      <!-- 广告宣传 -->
      <div class="propaganda_div">
        <div>
          <img src="../../assets/home/propaganda/Propaganda_left.png" alt="">
        </div>
        <div>
          <img src="../../assets/home/propaganda/propaganda_right.png" alt="">
        </div>
      </div>

      <!-- 轮播图 -->
      <div class="swipe_div">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../../assets/home/swipe/img.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/home/swipe/img1.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/home/swipe/img2.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      
      <!-- 商家推荐 -->
      <div class="recommend_div"> 
        <p>—— 推荐商家 ——</p>

        <!-- 产品列表 -->
        <div>
          <div class="recommend_div_list" v-for="(item,index) in recommendList" :key="index">
            <!-- logo -->
            <div>
              <img :src="item.img" alt="">
            </div>
            <!-- description -->
            <div>
              <div><span class="tag_yellow">品牌</span>{{item.title}}</div>
              <div>
                <span>
                  <el-rate  v-model="item.score" 
                            disabled 
                            show-score 
                            text-color="#ff9900" ></el-rate>
                </span>
                <span>月销售{{item.sales}}单</span>
              </div>
              <div>
                <span>￥{{item.sales}}起送/配送费￥{{item.pickup}}</span>
              </div>
            </div>
            <!-- type -->
            <div class="propaganda_type">
              <div>{{item.guarantee}}</div>
              <div>
                <span class="tag_solid" v-show="item.isProfession">蜂鸟专送</span>
                <span class="tag_hollow" v-show="item.isontime">准时达</span>
              </div>
              <div>
                <span>{{item.distance}}公里 / </span>
                <span>{{item.expected_time}}分钟</span>
              </div>
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
      value1:2.5,
      /**商品列表详情 */
      recommendList:[
        {
          title:'世界茶饮', //标题
          img:require('../../assets/home/recommend/img.png'), //图片
          score:3.5, //评价
          sales:630, //销量
          pickup:20, //起送费
          delivery:5, //配送费
          guarantee:'保票', //保障,
          isProfession:true,//是否是转送
          isontime:true,//是否准时
          distance:50,//距离
          expected_time:20//预计时间
        },
        {
          title:'宜客快餐',
          img:require('../../assets/home/recommend/img1.png'),
          score:2.5,
          sales:200,
          pickup:10,
          delivery:5,
          guarantee:'保准票',
          isProfession:false,
          isontime:true,
          distance:20,
          expected_time:15,
        }

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
.view_div{
  margin-top: 40px;
  height: 90%;
  overflow: auto;
}
/**头部菜单 */
.header_menu{
  display: flex;
  justify-content:space-around;
}
.header_menu>div>img{
  width: 50px;
  height: 50px;
}
.header_menu>div>div{
  width: 50px;
  font-size:12px;
  text-align: center;
}
/**广告宣传位 */
.propaganda_div{
  display: flex;
}
.propaganda_div>div{
  width: 50%;
  height: auto;
}
.propaganda_div>div>img{
  width: 100%;
  height: 100%;
}
/**轮播图 */
.swipe_div{
  width: 100%;
  height: 90px;
}
.swipe_div >>> img{
  width: 100%;
  height: 100%;
}
/**商家推荐 */
.recommend_div>p{
  text-align:center;
  font-size: 14px;
  margin:10px 0px 10px 0px;
}
/**商品列表 */
.tag_yellow{
  background:#ffd930 !important;
  margin-right: 10px;
}
.recommend_div_list{
  height: 68px;
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
}
.recommend_div_list>div:nth-child(1)>img{
  width: 60px;
  height: 60px;
}
.recommend_div_list>div:nth-child(2){
  width: 50%;
  padding-left: 10px;
}
.recommend_div_list>div:nth-child(2)>div:nth-child(1){
  font-size: 14px;
  font-weight: bold;
}
.recommend_div_list>div:nth-child(2)>div{
  font-size: 12px;
}
.recommend_div_list>div:nth-child(2)>div:nth-child(2){
  display: flex;
  margin-top: 5px;
}
.recommend_div_list>>>.el-rate__icon{
  font-size: 12px;
  margin: 1px;
}
/**商品类型 */
.tag_solid{
  background-color: #1070ff;
  border: 1px solid #1070ff;
  color: #fff;
  padding: 0px 5px 0px 5px;
}
.tag_hollow{
  color: #1070ff;
  border:1px solid #1070ff;
  padding: 0px 5px 0px 5px;
}
.propaganda_type>div{
  text-align: right;
  padding-right: 5px;
}
.propaganda_type>div:nth-child(1){
  font-size: 12px;
  letter-spacing: 2px;
  
}
.propaganda_type>div:nth-child(2){
  font-size: 12px;
  margin-top: 5px;
}
.propaganda_type>div:nth-child(3){
  margin-top: 5px;
  font-size: 12px;
}
.propaganda_type>div:nth-child(3)>span:nth-child(2){
  color:#1070ff
}
</style>