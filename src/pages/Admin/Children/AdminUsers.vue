<template>
  <div id="admin-users">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="user_id"
        label="用户ID">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="props">
          <el-button
            size="mini"
            @click="handleEdit(props.$index, props.row)">禁用</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(props.$index, props.row)">启用</el-button>
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
        tableData: [],
        currentIndex: 1,
        pageSize: 5
      }
    },
    mounted(){
      this.getUsers();
    },
    methods: {
      async getUsers(){
        const results = await getAllUsers(this.currentIndex, this.pageSize);
        this.tableData = results.data.data;
      }
    }
  }
</script>

<style scoped>

</style>
