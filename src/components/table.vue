<template>
<div>
    <el-table
        :data="taskInfo"
        height="450"
        border
        style="width: 100%">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        prop="task"
        label="任务"
        width="180">
        </el-table-column>
        <el-table-column
        prop="cron"
        label="指令"
        width="250">
        </el-table-column>
        <el-table-column
        prop="node"
        label="节点"
        width="180">
        </el-table-column>
        <el-table-column
        prop="date"
        label="开始时间"
        width="180">
        </el-table-column>
         <el-table-column
          align="right">
          <template slot="header" >
            <el-button
              size="mini"
              @click="addTask">Add</el-button>
              <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
    </el-table>

    <!-- 添加task -->
    <el-dialog
      title="添加任务"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :model="addTaskForm" :rules="addTaskRule" ref="addTaskForm" label-width="100px">
        <el-form-item label="任务" prop="task">
          <el-input v-model="addTaskForm.task"></el-input>
        </el-form-item>
        <el-form-item label="cron" prop="cron">
          <el-input v-model="addTaskForm.cron"></el-input>
        </el-form-item>
        <el-form-item label="节点分布" prop="node">
          <el-select  v-model="addTaskForm.node"  placeholder="请选择">
            <el-option label="control_node" value="control_node"></el-option>
            <el-option label="compute_node" value="compute_node"></el-option>
            <el-option label="network_node" value="network_node"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间" prop="date">
          <el-date-picker
          v-model="addTaskForm.date"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTaskInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>  
</template>

<script>
import {getCommand} from "../network/getdata"
export default {
    data() {
      return {
        taskInfo: [],
        dialogVisible:false,
        //添加任务指令信息
        addTaskForm:{
          task:'',
          cron:'',
          node:'',
          date:''
        },
        addTaskRule: {
          task: [
            { required: true, message: '请输入任务', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
    },
      }
    },
    created(){
      this._getCommand();
    },
    methods:{
      deleteRow(index,rows){
        rows.splice(index,1)
      },
      addTask(){
        this.dialogVisible=true;
      },
      _getCommand(){
        getCommand().then(res=>{
          this.taskInfo.push(res.data)
          console.log(this.taskInfo)
        })
      },
      addTaskInfo(){
        console.log(this.addTaskForm)
        this.dialogVisible=false;


      }
      
    }


}
</script>

<style>

</style>