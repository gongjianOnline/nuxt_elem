/**菜单*/
<template>
  <div class="wrapper">
    <div class="menu-container">
      <div class="menu-content">
        <div
          v-for="(item,index) in orderData"
          :key="index"
          :class="index==0?'menu-checked':''"
          :id="'title'+item.orderId"
        >{{item.orderSort}}</div>
      </div>
      <div class="wares-content" @scroll="scrollFun">
        <div v-for="(item,index) in orderData" :key="index" class="paren-tage">
          <div :id="item.orderId" class="wares-title">{{item.orderSort}}</div>
          <div
            class="wares-list"
            v-for="(itemChild,indexChild) in item.childer"
            :key="indexChild">
            <div class="wares-img">
              <img src="../../assets/menu/menu1.jpeg" alt="">
            </div>
            <div class="wares-price"> 
              <div>{{itemChild.orderName}}</div>
              <div>{{itemChild.tage}}</div>
              <div>
                <span>月售{{itemChild.salesVolume}}份</span> 
                <span>好评率{{itemChild.evaluate}}%</span> </div>
              <div class="wares-unitPrice">￥{{itemChild.price}}</div>
            </div>
            <div class="wares-ico">
                <div class="wares-ico-cut" @click="waresCutFun(itemChild)"
                  v-show="itemChild.num">-</div>
                <div v-show="itemChild.num">{{itemChild.num}}</div>
                <div class="wares-ico-add" @click="waresAddFun(itemChild)">+</div>
            </div>
      
          </div>
        </div>
      </div>
    </div>

    <!-- 购物车 -->
    <div class="shopping-contaner">
      <div class="price-container"> 
        <div class="price-container-carIco">
          <i class="el-icon-shopping-cart-2"></i>
        </div>
        <div class="price-container-total">￥0元</div>
        <div class="price-container-remarks">另其配送费￥4元</div>
      </div>
      <div class="price-container-difference">￥20元起送</div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      /*菜单数据 */
      orderData:[
        {
          orderSort:'热销榜',
          orderId:"1",
          childer:[
            {
              orderName:"雪顶咖啡",
              id:'101',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红豆薏米茶",
              id:'102',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红茶",
              id:'103',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"绿茶",
              id:'104',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            }
          ]
        },
        {
          orderSort:'今日推荐',
          orderId:"2",
          childer:[
           {
              orderName:"雪顶咖啡",
              id:'105',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红豆薏米茶",
              id:'106',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红茶",
              id:'107',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"绿茶",
              id:'108',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            }
          ]
        },
        {
          orderSort:'热饮',
          orderId:"3",
          childer:[
            {
              orderName:"雪顶咖啡",
              id:'201',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红豆薏米茶",
              id:'202',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"红茶",
              id:'303',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            },
            {
              orderName:"绿茶",
              id:'404',
              num:0,
              price:8,
              evaluate:100,
              salesVolume:299
            }
          ]
        },
     
      ]



    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**监听滚轮滚动(菜单联动效果)*/
    scrollFun(){
      //获取最外层盒子的高度
      let outerContainer = document.querySelectorAll(".wares-content")[0].offsetHeight;
      //获取所有分类盒子
      let parenTage = Array.from(document.querySelectorAll(".paren-tage"))
      parenTage.forEach((item,index)=>{
        if(index !== 0){
          //获取当前元素的前一个兄弟元素,判断top值是否是负数;获取当前的元素的top值,判断如果小于外层盒子的高度就将把当前标签设置为选中状态
          let previousElemnt = item.previousElementSibling.getBoundingClientRect()
          let currentelemnt = item.getBoundingClientRect()
          if(previousElemnt.top < 0 && currentelemnt.top < outerContainer){
            //如果满足条件,获取当前元素的第一个子元素的id 拼接成当前标签的ID的名称;删除所有menu-checked的样式,给id为当前名称的元素添加menu-checked
            let checkedElem =Array.from(document.querySelectorAll(".menu-checked"));
            checkedElem.forEach((item,index)=>{
              item.classList.remove('menu-checked')
            })
            document.getElementById('title'+item.firstElementChild.id).classList.add('menu-checked')
          }
        }else if(index === 0 && (parenTage[1].getBoundingClientRect()).top > outerContainer){
          //如果当前分类元素是第一个,且第二的元素的top大于最外层容器的高度,就选中第一个元素
          let checkedElem =Array.from(document.querySelectorAll(".menu-checked"));
          checkedElem.forEach((item,index)=>{
            item.classList.remove('menu-checked')
          })
          document.getElementById('title'+item.firstElementChild.id).classList.add('menu-checked')
        }
      })
    },
    
    /**菜单减 */
    waresCutFun(row){
      if(row.num > 0){
        row.num -= 1
      }
    },
    /**菜单加 */
    waresAddFun(row){
      console.log(row)
      row.num += 1
    },



  }
}
</script>
<style scoped>
.menu-container {
  display: flex;
  height: 50vh;
  width: 100%;
  /* border: 1px solid red; */
  margin-top: 20px;
}
.menu-content {
  width: 20%;
  background: #f8f8f8;
  /* border: 1px solid blue; */
}
.wares-content {
  width: 80%;
  /* border: 1px solid rebeccapurple; */
  overflow: auto;
}
/**浏览器滚动条样式修改 */
.wares-content::-webkit-scrollbar{
  display: none;
}

.menu-content > div {
  background: #f8f8f8;
  height: 40px;
  text-align: center;
  line-height: 40px;
  /* border-bottom: 1px red solid; */
}
/**选中的颜色 */
.menu-checked {
  background: #fff !important;
}

/**产品列表 */
.wares-title {
  color: #666;
  font-size: 12px;
}
.wares-list {
  height: 80px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.wares-img{
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.wares-img>img{
  width: 82px;
}
.wares-price{
  color:#93999f;
  font-size: 12px;
}
.wares-price > div{
  margin-top: 3px;
}
.wares-price>div:first-of-type{
  font-size: 16px;
  color: #000;
}
.wares-unitPrice{
  font-size: 18px;
  color:#ff5339;
}
.wares-ico{
  width: 80px;
  /* border: 1px solid rebeccapurple; */
  display: flex;
  justify-content:space-around;
  align-items: flex-end;
  padding-bottom: 10px;
}
.wares-ico-cut{
  width: 18px;
  height: 18px;
  /* border: 1px solid #409EFF; */
  color: #409EFF;
  border-radius: 50%;
  line-height: 14px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.wares-ico-add{
  width: 18px;
  height: 18px;
  background:#409EFF;
  color: #fff;
  border-radius: 50%;
  line-height: 14px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
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