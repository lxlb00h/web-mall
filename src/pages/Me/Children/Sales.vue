<template>
  <div>
    <el-table
      :data="tempData"
      style="width: 100%">
      <el-table-column
        label="用户ID"
        prop="user_id">
      </el-table-column>
      <el-table-column
        label="商品ID"
        prop="goods_id_list">
      </el-table-column>
      <el-table-column
        label="订单时间"
        prop="order_time">
      </el-table-column>
      <el-table-column
        label="收货地址"
        prop="address">
      </el-table-column>
      <el-table-column
        label="总价"
        prop="price">
      </el-table-column>
      </el-table>
    <el-table>
      
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="pageNum"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  import {getAllgoods,deleteRecomGoods,getCategory,getAllOrders} from './../../../api/index';
  import {mapState} from 'vuex';
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        currentIndex: 1,
        pageSize: 5,
        tableData: [],
        tempData: {
          user_id: "lxl",
          goods_id_list: "提花针织t恤女短袖2023年春装",
          order_time: "2023/05/30 10:50:21",
          address: "重庆市",
          price: 203.5
        },
      }
    },
    mounted(){
      this.getAllGoods();
    },
    methods: {      
      handleCurrentChange(val) {
        //this.tempData = [];
        //this.getAllOrder();
      },
      async getAllOrder(){
        /**
        let result = await getAllOrders(userinfo.user_id);
        this.tableData = result.data;
        this.tempData = this.tableData.data; */
      },
    },
    computed: {
        ...mapState(["userInfo"])
    },
    filters: {
      priceFormat(price) {
        return price.toFixed(2);
      },
    },
  }
</script>

<style scoped>
  .el-table{
    margin: 20px auto 50px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-pagination{
    text-align: center;
  }
</style>

