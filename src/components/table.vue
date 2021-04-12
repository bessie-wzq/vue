<template>
<div>
    <el-table
        :data="tableData"
        height="450"
        border
        style="width: 100%">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        prop="ip"
        label="ip地址"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="用戶"
        width="180">
        </el-table-column>
        <el-table-column
        prop="status"
        label="运行状态"
        width="180">
        </el-table-column>
        <el-table-column
        prop="date"
        label="运行时间"
        width="180">
        </el-table-column>
        <el-table-column
        prop="command"
        label="操作">
        <template slot-scope="scope">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">运行</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          ip: '2016-05-03',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-02',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-04',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-01',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-08',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-06',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }, {
          ip: '2016-05-07',
          name: '王小虎',
          status: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }

}
</script>

<style>

</style>