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
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="use"
          label="状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="props">
            <el-button
              size="mini"
              @click="handleEdit(props.$index, props.row)">启用</el-button>
            <el-button
              size="mini"
              @click="handleDelete(props.$index, props.row)">禁用</el-button>
          </template>
      </el-table-column>
    </el-table>
    </div>
  </template>
  
  <script>
    import {getAllManager} from '../../../api/index'
    import {changeManager} from '../../../api/index'
    export default {
      data() {
        return {
          tableData: [],
          currentIndex: 1,
          pageSize: 10,
        }
      },
      mounted(){
        this.getManagers();
      },
      methods: {
        async getManagers(){
          const results = await getAllManager(this.currentIndex, this.pageSize);
          this.tableData = results.data.data;
          this.tableData.forEach(element => {
            if(element.manager_type==1)
              element.type = "商品专员";
            else if(element.manager_type==2)
              element.type = "营销经理";
            else if(element.manager_type==3)
              element.type = "系统管理员";
              
            if(element.manager_use==1)
              element.use = "已启用";
            else if(element.manager_use==0)
              element.use = "未启用";
          });
        },
        async handleEdit(index, row) {
          let results = await changeManager({
            manager_type: row.manager_type,
            manager_id: row.manager_id,
            password: row.password,
            manager_use: 1
          });
          console.log(results.message);
          this.$router.go(0);
        },
        async handleDelete(index, row) {
          let results = await changeManager({
            manager_type: row.manager_type,
            manager_id: row.manager_id,
            password: row.password,
            manager_use: 0
          });
          console.log(results.message);
          this.$router.go(0);
        },        
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  