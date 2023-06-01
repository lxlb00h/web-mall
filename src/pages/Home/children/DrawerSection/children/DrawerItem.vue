<template>
  <div class="pro_item">
    <h4 class="item_title"><span>校淘商城自营店</span><span class="item_one">{{shopcar.unit_price | moneyFormat}}</span></h4>
    <div class="item_content">
      <div class="item-pic">
        <img :src="shopcar.image"/>
      </div>
      <div class="item-info">{{shopcar.goods_name}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        shopcar:{
          goods_name: "青春励志文学",
          unit_price: 23.8,
          image: "http://t00img.yangkeduo.com/t09img/images/2018-07-20/a6eb38f1b52054d149a0dcbf9539ebf2.jpeg"
        }
      }
    },
    props: {
      goods: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapState(['userInfo']),
    },
    methods:{
      
    },
  }
</script>

<style scoped>
	.pro_item{
		width: 100%;
		height: 90px;
		margin-bottom: 15px;
	}
	.pro_item>.item_title{
		padding: 0 15px;
		width: 100%;
		font-size: 12px;
    color: #666666;
		background: white;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
	}
	.pro_item>.item_content{
		width: 100%;
		height: 60px;
		background: #f6f6f6;
    box-sizing: border-box;

    display: flex;
    align-items: center;
	}
	.item_content>.pro_Chk{
    flex: 2;

    display: flex;
    justify-content: center;
    align-items: center;
	}
	.item_content div{
    flex: 7;

    display: flex;
    align-items: center;
	}
	.item-pic{
		flex: 3;

    display: flex;
    justify-content: center;
    align-items: center;
	}
	.item-pic img{
		width: 45px;
		height: 45px;
	}
	.item-info{
		flex: 6;
		font-size: 12px;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
    -webkit-clamp: 2;

    display: flex;
    justify-content: center;
	}
	.item-amout{
    flex: 3;

    display: flex;
    justify-content: center;
	}
  .item-amout .el-input-number{
    width: 95px;
  }
	.item-sum{
		flex: 3;

    display: flex;
    justify-content: center;
    align-items: center;
	}
	.item-sum>strong{
		color: #f40;
		font-size: 13px;
	}
</style>
