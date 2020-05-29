/**商家介绍 */
<template>
  <div class="wrapper">
    <div class="banner-content">
			<img src="../../assets/menu/banner.png" alt="">
		</div>
		<h2>世界茶饮</h2>
		<div class="text-content">	
			<article>
				世界茶饮源于台湾，深耕大陆这是一个原创的来自东方的茶饮品牌世界茶饮致力于“茶的年轻化”把喝茶这件事情，变得活力和有趣让茶成为当下年轻人日常生活的一部分.
			</article>
			<article>
				自2006年诞生以来世界茶饮伴随着时代的变迁经历了3次品牌升级从开始的中国风设计到欧美现代风设计一直到全新的国潮风设计经历了三次脱胎换骨的变化，品牌由获新生
			</article>

		</div>


  </div>
</template>

<script>
export default {
  components:{},
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
.banner-content>img{
	width: 100%;
}
h2{
	font-weight: 500;
	padding: 0.5rem;
}
.text-content{
	padding: 0 .64rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}
</style>