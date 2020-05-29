/**点餐页面 */
<template>
  <div class="wrapper">
    <div class="banner-container">
      <div class="business-content">
        <img src="../assets/menu/business.jpg" alt="">
      </div>
    </div>
    <!-- 店铺简介 -->
    <div class="synopsis-container"> 
      <div class="synopsis-container-title">世界茶饮</div>
      <div class="synopsis-container-evaluate">
        <span>评价4.2</span>
        <span>月售90单</span>
        <span>蜂鸟快送约24分钟</span>
      </div>
      <div class='synopsis-container-discount'>
        <span>满减</span>
        <span>满36减21</span>
        <span>满50减26</span>
        <span>满80减44</span>
      </div>
      <div class='synopsis-container-abstract'>
        公告:专注于茶饮品牌,华莱士简单又滋味,本店位...
      </div>
    </div>
    <!-- 切换菜单 -->
    <mt-navbar v-model="selected" class="selected-content">
      <mt-tab-item id="1">菜单</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <!--菜单 -->
      <mt-tab-container-item id="1">
        <menuList></menuList>
      </mt-tab-container-item>
      <!-- 评价 -->
      <mt-tab-container-item id="2">
        <evaluate></evaluate>
      </mt-tab-container-item>
      <!-- 商家 -->
      <mt-tab-container-item id="3">
        <business></business>
      </mt-tab-container-item>
    </mt-tab-container>
    
    


  </div>
</template>

<script>
import menuList from "../components/menu/menu"
import evaluate from "../components/menu/evaluate"
import business from "../components/menu/business"
export default {
  components: {
    menuList,
    evaluate,
    business
  },
  props: {},
  data() {
    return {
      /**菜单栏切换 */
      selected:"1",
      orderData:[
        {
          orderSort:'今日推荐',
          orderId:"1",
          childer:[
            {
              orderName:"今日1"
            },
            {
              orderName:"今日2"
            },
            {
              orderName:"今日3"
            },
            {
              orderName:"今日4"
            },
            {
              orderName:"今日5"
            },
            {
              orderName:"今日6"
            },
            {
              orderName:"今日7"
            },
            {
              orderName:"今日8"
            },
            {
              orderName:"今日9"
            },


          ]
        },
        {
          orderSort:'特价商品',
          orderId:"2",
          childer:[
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
          ]
        },
        {
          orderSort:'特价商品2',
          orderId:"3",
          childer:[
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
          ]
        },
        {
          orderSort:'特价商品3',
          orderId:"4",
          childer:[
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
            {
              orderName:"特价商品"
            },
          ]
        }
      ]



    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**测试getBoundingClientRect的用法及返回值 */
    test() {
      let dom1 = document.querySelectorAll("#title1");
      let dom2 = document.querySelectorAll("#title2");
      console.log(dom1[0], dom2[0]);
      console.log(dom1[0].getBoundingClientRect());
      console.log(dom2[0].getBoundingClientRect());
    },
    


  }
};
</script>
<style scoped>
/* bannner */
.banner-container{
  width: 100%;
  height: 120px;
  background-image: url('../assets/menu/banner.png');
  background-size: 100% 100%;
  margin-bottom: 20px;
  position: relative;
}
.business-content{
  position: absolute;
  left: 40%;
  top: 40%;
}
.business-content>img{
  height: 90px;
}

/**店铺简介 */
.synopsis-container{
  text-align: center;
  color:#666;
}
.synopsis-container-title{
  font-size: 24px;
  color:#000;
  font-weight: 500;
}
.synopsis-container-evaluate{
  font-size: 14px;
}
.synopsis-container-evaluate>span{
  margin-left: 10px;
}
.synopsis-container-discount{
  margin-top: 6px;
  font-size: 14px;
}
.synopsis-container-discount>span{
  margin-left: 10px;
}
.synopsis-container-discount>span:first-of-type{
  background: rgb(240, 115, 115);
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  font-weight: 600;
}
.synopsis-container-abstract{
  font-size: 14px;
  margin-top: 3px;
}

/**菜单切换 */
.selected-content >>>.mint-tab-item-label{
  font-size: 16px;
  font-weight: 500;
}



/**购物车 */
.shopping-contaner{
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background:rgba(61,61,63,.9);
  height: 8vh;
  width: 100%;
  color:hsla(0,0%,100%,.4);
}
.price-container{
  display: flex;
  margin-left: 10px;
  position: relative;
}
.price-container-carIco{
  width: 60px;
  height: 60px;
  background:rgba(61,61,63,.9);
  border-radius: 50%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  text-align:center;
  line-height: 60px;
  font-size: 32px;
  color: #fff;
}
.price-container-total{
  margin-left: 65px;
  font-size: 18px;
  font-weight: 600;
}
.price-container-remarks{
  margin-left: 14px;
  border-left: 2px hsla(0,0%,100%,.4) solid;
  padding-left: 14px;
}
.price-container-difference{
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-right: 12px;
}






</style>