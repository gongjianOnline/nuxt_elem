/**评价模板 */
<template>
  <div class="wrapper">
    <!-- 评分 -->
    <div class="score-container">
      <div class="score-content-left"> 
        <div>4.2</div>
        <div>
          <div>商家评分</div>
          <div class="rater">
            <el-rate v-model="scoreleves" disabled></el-rate>
          </div>
        </div>
      </div>

      <div class="score-tages-content"> 
        <div>
          <div>味道</div>
          <div>4.1</div>
        </div>
        <div>
          <div>包装</div>
          <div>4.1</div>
        </div>
        <div>
          <div>配送</div>
          <div>4.1</div>
        </div>
      </div>
    </div>

    <!-- 评价 -->
    <div class="evaluate-container"> 
      <div class="evaluate-tages"> 
        <div :class="evaluateTagesIndex === 1 ? 'evaluate-select':''"
          class="evaluate-tages-size"
          @click="evaluateSelectBtn(1)">满意 18</div>
        <div :class="evaluateTagesIndex === 2 ? 'evaluate-select' :''"
          class="evaluate-tages-size"
          @click="evaluateSelectBtn(2)">一般 10</div>
        <div :class="evaluateTagesIndex === 3 ? 'evaluate-select' :''"
          class="evaluate-tages-size"
          @click="evaluateSelectBtn(3)">差评 5</div>
      </div> 

      <div class="comment-contariner"> 
        <!-- 评论模板 -->
        <div class="comment-strip" v-for="(item,index) in comment" :key="index">
          <div class="comment-strip-ico">
            <img src="~/assets/menu/evaluate/user-ioc.png" alt="">
          </div>
          <div class="comment-strip-content">
            <div>
              <div>
                <span>{{item.userCode}}</span> 
                <span class="rater">
                  <el-rate v-model="item.score" disabled></el-rate>
                </span>
              </div>
              <div class="commit-date">{{item.date}}</div> 
            </div>
            <div>
              {{item.describe}}
            </div>
            <div>
              <div  class="comment-tages" 
                    v-for="(itemchild,indexChild) in item.tagesData"
                    :key="indexChild">{{itemchild}}</div>
            </div>
          </div>
        </div>

      </div>



    </div>



  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      // 评价
      scoreleves:4.2,
      // 选中
      evaluateTagesIndex:1,
      //评论数据
      comment:[
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        },
        {
          userCode:'3*****c',
          date:'2020/5/29',
          score:4.2,
          describe:"非常不错的口感体验",
          tagesData:["雪顶咖啡",'红豆薏米','招牌凉茶']
        }
      ]
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    /**选中按钮 */
    evaluateSelectBtn(index){
      this.evaluateTagesIndex = index;
    }



  },
}
</script>
<style scoped>
.wrapper{
  background: #f5f5f5;
}
.score-container{
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.score-content-left{
  display: flex;
  padding-left: 10px;
}
.score-content-left>div:first-of-type{
  color:red;
  font-size: 32px;
}
.score-content-left>div:nth-child(2){
  margin-left: 10px;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.score-tages-content{
  display: flex;
}
.score-tages-content>div{
  width: 60px;
  color: #666;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 评价 */
.evaluate-container{  
  margin-top: 10px;
  background:#fff;
}
.evaluate-tages{
  padding-left: 10px ;
  padding-top: 10px;
}
.evaluate-tages-size{
  width:60px;
  height: 30px;
  background: rgba(0,160,220,.2);
  color:#4d555d;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
}
/**选中 */
.evaluate-select{
  background: #409EFF;
  color: #fff;
}

/**评论 */
.comment-contariner{
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #f5f5f5;
}
.comment-strip{
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.comment-strip-ico{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment-strip-ico>img{
  height: 3em;
}
.comment-strip-content{
  width: 80%;
  min-height: 90px;
}
.comment-strip-content >div:nth-child(1){
  display: flex;
  justify-content: space-between;
}
.comment-strip-content >div:nth-child(1)>div:nth-child(1){
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.comment-strip-content > div:nth-child(3){
  margin-top: 4px;
}
.comment-tages{
  border: 1px solid rgba(7,17,27,.1);
  color: #93999f;
  border-radius: 2px;
  display: inline-block;
  padding: 2px;
  font-size: 12px;
}
.commit-date{
  color:#93999f
}





/* 打分器间距调整 */
.rater >>> .el-rate__icon{
  margin-right: 0px;
}

</style>