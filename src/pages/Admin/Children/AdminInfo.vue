  <template>
    <div id="admin-users">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="manager_id"
          label="管理员ID">
        </el-table-column>
        <el-table-column
          prop="manager_type"
          label="账号">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="props">
            <el-button
              size="mini"
              @click="handleEdit(props.$index, props.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(props.$index, props.row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    </div>
  </template>
  
  <script>
    import {getAllUsers} from '../../../api/index'
    export default {
      data() {
        return {
          tableData: []
        }
      },
      mounted(){
        this.getUsers();
      },
      methods: {
        async getUsers(){
          const results = await getAllUsers();
          if(results.success_code === 200){
            this.tableData = results.message;
          }
        },
        handleEdit(index, row) {
          console.log(index, row);
          window.localStorage.setItem('goodsInfo',JSON.stringify(row));
          this.$router.replace('/admin/adminupdate');
        },
        async handleDelete(index, row) {
          this.$confirm('您确定永久删除该商品吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async() => {
		  let result = await deleteRecomGoods(row.goods_id);
          if(result.success_code === 200){
            this.$message({
              type: 'success',
              message: '已删除'
            });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        },        
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  