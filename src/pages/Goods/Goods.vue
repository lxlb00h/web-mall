<template>
  <div id="container" v-if="goodsDetail">
			<div class="pro_detail">
				<div class="pro_img">
					<div class="tb_booth">
            <img src="http://t00img.yangkeduo.com/goods/images/2018-08-30/1093ac9bfaa77304a8c3f25d4bfcb743.jpeg" class="pro_middle_img" 
            style="width: 100%;height: 50%;"/>
					</div>
				</div>
				<div class="pro_meg">
					<div class="pro_meg_hd">
						<h1>
					 		{{goodsDetail.goods_name}}
						</h1>
					</div>
					<div class="pro_meg_price">
						<dl>
							<dt>促销价</dt>
							<dd>
								<div class="promo_price">
									<span class="tm-price">{{goodsDetail.unit_price | moneyFormat}}</span>
									<b>优惠促销</b>
								</div>
							</dd>
						</dl>
            <dl>
							<dt>市场价</dt>
							<dd class="nor_price">{{goodsDetail.unit_price + 3 | moneyFormat }}</dd>
						</dl>
						<dl>
							<dt>本店优惠</dt>
							<dd>包邮</dd>
						</dl>
            <dl>
              <dt>服务承诺</dt>
              <dd>
                <span>正品保证</span>
                <span>极速退货</span>
              </dd>
            </dl>
					</div>
					<div class="pro_meg_deliver">
						<dl>
							<dt>运费</dt>
							<dd>福建福州&nbsp;&nbsp;至&nbsp;&nbsp;福建福州&nbsp;&nbsp;&nbsp;快递:0.00</dd>
						</dl>
					</div>
					<div class="pro_meg_console">
						<dl class="tb-sku">
						</dl>
						<div class="shopping_car">
							<el-button type="danger" @click.prevent="dealWithCellBtnClick(goodsDetail)">加入购物车</el-button>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
  import {postComment, addGoodsToCart} from './../../api/index';
  import { MessageBox } from 'element-ui';
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        textarea: '',
        rating: 0,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        currentGoodsId: 0,
        shopNum: 1,
        goodsDetail: {
          goods_id: 8,
          goods_name: "甜曲紫米面包550g",
          unit_price: 55.9,
          Image: "http://t00img.yangkeduo.com/goods/images/2018-08-30/1093ac9bfaa77304a8c3f25d4bfcb743.jpeg",
          description: "面包",
          type_id: 6
        }
      }
    },
    computed: {
      ...mapState(['userInfo','goodsComment'])
    },
    created(){
      this.currentGoodsId = Number(this.$route.params.id);
      this.$store.dispatch('reqGoodsDetail', this.currentGoodsId);
    },
    watch:{
      $route(){
        this.currentGoodsId = Number(this.$route.params.id);
        this.$store.dispatch('reqGoodsDetail', this.currentGoodsId);
        // 请求当前用户信息
        this.$store.dispatch('getUserInfo');
      }
    },
    methods:{
      async post(){
        
      },
      // 监听商品点击
      async dealWithCellBtnClick(goods){
         // 1. 发送请求
        // user_id, goods_id, goods_name, thumb_url, price, buy_count, counts
        if(this.userInfo.user_name){
          let result = await addGoodsToCart(this.userInfo.user_id, goods.goods_id);
          if(result.message === "加入购物车成功！"){
             MessageBox({
              type: 'success',
              message: result.message,
			        showClose: true,
            });
            let user_id = this.userInfo.id;
            // 请求商品数据
            this.$store.dispatch('reqCartsGoods',{user_id});
            this.shopNum = 1;
          }
        }
      }
    },
  }
</script>

<style scoped>
#container>.pro_detail{
	width: 990px;
  position: relative;
  z-index: 100;
  margin: 20px auto;
}
#container>.pro_comment{
	width: 73%;
  position: relative;
  margin: 40px auto 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom: none;
}
#container>.pro_judge{
	width: 73%;
  position: relative;
  margin: 0 auto 60px;
  padding: 20px;
  border-top: none;
  border: 1px solid #ccc;
}
.pro_judge>span{
  font-size: 12px;
  color: #ccc;
}
.pro_judge>.el-rate{
  display: inline-block;
}
.pro_judge .el-textarea{
  width: 50%;
  display: block;
  margin: 20px 0;
}
.pro_comment>h3{
  font-weight: bold;
  margin-bottom: 20px;
}
.pro_comment .media{
  border-top: 1px dashed #ccc;
  padding: 10px 0;
}
.pro_comment .media .media-heading{
  margin-bottom: 10px;
  font-weight: bolder;
}
.pro_comment .media .media-body{
  font-size: 14px;
}
.pro_comment .media .media-body span{
  font-weight: bolder;
}
.pro_comment .el-rate{
  display: inline-block;
  margin-left: 20px;
}
.pro_judge>h3{
  font-weight: bold;
  margin-bottom: 20px;
}
.pro_judge .judge_erro_tip{
  font-size: 15px;
  font-weight: bolder;
  color: #000;
}
.pro_detail>.pro_img{
    float: left;
    position: relative;
    padding: 100px 0;
    width: 480px;
    border: 1px solid #ccc
}
.pro_img>.tb_booth{
	position: relative;
  z-index: 1;
}
.tb_booth>.pro_middle_img{
	 width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.pro_detail>.pro_meg{
	margin: 0 0 0 520px;
  color: #666;
  padding: 0 0 3px;
}
.pro_meg>.pro_meg_hd{
	padding: 0 10px 12px;
    color: #000;
}
.pro_meg_hd>h1{
    font-size: 16px;
    font-weight: 700;
    color: #000;
}
.pro_meg>.pro_meg_price{
  padding: 5px 20px;
  height: 200px;
  background-color:rgba(247, 244, 244, 0.6);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_meg_price dl{
  display: flex;
  align-items: center;

  margin-bottom: 0 !important;
	cursor: pointer;
}
.pro_meg_price dl dt{
  width: 70px;
	color: #999;
  font-size: 12px;
}
.pro_meg_price dl dd{
  margin-bottom: 0 !important;
  font-family: Arial;
}
.pro_meg_price dl dd div{
  display: flex;
  align-items: center;
}
.pro_meg_price dl:last-child dd{
  color: #FF0036;
  font-weight: bold;
	font-size: 12px;
}
.promo_price{
	line-height: 24px;
  vertical-align: middle;
  color: #FF0036;
  font-size: 18px;
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
}
.promo_price b{
	display: inline-block;
	font-weight: normal;
}
.promo_price b:last-child{
	font-size: 12px;
	background: #f47a86;
	color: white;
	padding: 0 6px;
}
.promo_price>.tm-price{
	font-size: 20px;
	display: inline-block;
	margin-right: 12px;
	font-weight: bold;
}
.nor_price{
  text-decoration: line-through;
}
.sale_tip{
  color: #FF0036 !important;
  font-weight: bolder;
  width: 80px  !important;
}
.pro_meg_deliver{
	margin: 5px 20px -15px 0;
	padding: 5px;
}
.pro_meg_deliver dl{
	padding: 5px;
	font-size: 14px;
	color: black;
	cursor: pointer;
}
.pro_meg_deliver dl dt{
	color: #999;
    font-size: 14px;
    text-align: left;
    width: 69px;
    margin: 0 0 0 8px;
    float: left;
}
.pro_meg_deliver dl dd{
	font-size: 13px;
}
.pro_meg_console{
	margin: 5px 20px 5px 0;
	padding: 5px;
}
.tb-sku{
	padding: 5px;
	font-size: 14px;
	color: black;
	cursor: pointer;
}
.tb-sku dt{
	color: #999;
    font-size: 14px;
    text-align: left;
    width: 69px;
    margin: 0 0 0 8px;
    float: left;
}
.tb-sku dd{
	font-size: 13px;
}
.tb-sku dd div{
	display: inline-block;
	margin-right: 20px;
}
.item-amout{
	height: 25px;
}
.item-amout a{
	display: inline-block;
    height: 23px;
    width: 17px;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 23px;
    color: #444;
    cursor: pointer;
}
.item-amout a:hover{
	color: #f50;
    border-color: #f60;
}
.item-amout>.text_amount{
	width: 40px;
	height: 20px;
	text-align: center;
	display: inline-block;
}
.shopping_car{
	margin: 20px auto 0;

  display: flex;
  justify-content: center;
}
.shopping_car button{
  outline: none;
}
</style>
