<template>
  <div v-if="categoryList.length">
		<div id="container">
			<div class="product">
				<div class="pro_line">
					<h3 v-text="this.categoryList[this.currentCate-6].type_name"></h3>
					<router-link to="/home" class="goHome">返回首页</router-link>
				</div>
				<div class="pro_show">
          			<ProductItem v-for="(goods) in typeshoplist" :key="goods.goods_id" :pro="goods"/>
				</div>
			</div>
		</div>
		<div id="footer">
			<ul class="pagination">
				<li><a class="pag_back" @click="getMore(activeIndex - 1)">«</a></li>
				<li><a class="pag_a" v-for="index in catePages[this.currentCate - 1]" :key="index" :class="{pag_active: activeIndex === index}" @click="getMore(index)">{{index}}</a></li>
				<li><a class="pag_go" @click="getMore(activeIndex + 1)">»</a></li>
			</ul>
		</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductItem from '../../components/ProductItem/ProductItem'
  import {getCategory} from './../../api/index';

  export default {
    data(){
      return{
		categoryList:[],
        activeIndex: 1,  // 当前页码
			currentCate: 1,  // 当前分类
			pageSize: 3,
      	}
    },
    components: {
      ProductItem
    },
    computed: {
      ...mapState(['userInfo','typeshoplist']),
      catePages(){
        let arr = [];
        this.categoryList.forEach((cate, index)=>{
					let page = Math.ceil(cate.cate_counts / this.pageSize);
					arr.push(page);
        });
        return arr;
      }
    },
    created() {
		this.getType();
        this.currentCate = Number(this.$route.params.id);
        this.activeIndex = Number(this.$route.params.pageNo);
        // 请求当前页码的商品
        this.$store.dispatch('reqTypeShopList', {
            currentPage: this.activeIndex,
			size: this.pageSize,
            type_id: this.currentCate,
        });
        // 请求当前用户信息
    },
    watch:{
      $route(){
        this.currentCate = Number(this.$route.params.id);
        this.activeIndex = Number(this.$route.params.pageNo);
         this.$store.dispatch('reqTypeShopList', {
			currentPage: this.activeIndex,
			size: this.pageSize,
            type_id: this.currentCate,
        });
			},
    },
    methods:{
	  async getType(){
		let page = 1;
        let size = 20;
        let type_result = await getCategory(page,size);
		type_result.data.data.forEach(item => {
            this.categoryList.push({
				type_name: item.type_name,
				type_id: item.type_id
			  })
          });
	  },
      goDetail(id){
        this.$router.replace('/goods/' + id);
      },
      getMore(index){
        if(index && index <= this.catePages[this.currentCate - 1]){
          this.$store.dispatch('reqTypeShopList', {
            currentPage: index,
			size: this.pageSize,
            type_id: this.currentCate,
          });
          this.activeIndex = index;
          this.$router.replace('/search/' + this.currentCate + "/" + this.activeIndex);
        }
      },
    },
  }
</script>

<style scoped>
#container{
	position: relative;
	margin: 30px auto;
	width: 100%;
}
.product{
	margin: 0 auto;
	width: 980px;
}
.product>.pro_line{
	margin-bottom: 20px;
	width: 980px;
	height: 50px;
	line-height: 50px;
	font-size: 26px;
    font-family: sans-serif;
    font-weight: normal;
    color: #222;
}
.pro_line>h3{
	display: inline-block;
}
.el-dropdown-link {
	display: inline-block;
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.goHome{
	font-size: 14px;
	display: inline-block;
	margin-left: 20px;
	text-decoration: none;
	color: skyblue;
	cursor: pointer;
}
.goHome:hover{
	color: #ccc;
}
.product>.pro_show{
	margin: 0 auto;
	padding-left: 20px;
	width: 980px;
	height: 300px;
}
.pro_show>.pro{
	position: relative;
	float: left;
	margin-right: 20px;
	margin-bottom: 20px;
	width: 300px;
	height: 200px;
	border: 1px solid gainsboro;
}
.pro>.pro_img{
	margin: 20px;
	width: 120px;
	height: 120px;
}
.pro>.pro_text{
	position: absolute;
	top: 30px;
  right: 0;
	height: 130px;
	width: 140px;
	line-height: 25px;
}
.pro_text>p{
	margin-bottom: 10px;
}
.pro_text>p:first-child{
	color: red;
	font-weight: 900;
}
.pro_text>p:nth-child(2){
	font-size: 13px;
}
.pro_text>p:nth-child(3){
	font-size: 12px;
	color: #999;
}
.pro>.add_btn{
	float: right;
	position: absolute;
	bottom: 15px;
	right: 20px;
}
.add_btn>a{
	display: block;
	width: 120px;
	height: 25px;
	text-align: center;
	line-height: 25px;
	background: #FF0036;
	color: white;
	cursor: pointer;
}
#footer{
	height: 50px;
	width: 100%;
	display: flex;
}
#footer>ul.pagination{
	margin: 0 auto;
}
ul.pagination li{
	float: left;
}
ul.pagination li a {
    float: left;
    padding: 8px 16px;
    text-decoration: none;
	transition: background-color .3s;
	color: black;
    border: 1px solid #ddd;
}
ul.pagination li a.pag_active {
    background-color: #c40000;
    color: white;
    border: 1px solid #c40000;
}
ul.pagination li a:hover:not(.pag_active){
	background-color: #ddd;
}
div.center{
	text-align: center;
}
</style>
