<template>
    <div class="manage" style="float:left">
        <el-dialog 
            :title="operateType === 'add' ? '新增用户' : '更新用户'"
            :visible.sync="isShow"    
        >
            <common-form :formLabel="operateFormLabel"
                :form="operateForm"
                :inline="true"
                ref="form"
            ></common-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="isShow = false">取消</el-button>
              <el-button type=""></el-button>
            </div>
        </el-dialog>
        <div class="manage-header" style="margin-left: 0;">

          <el-button type="primary" @click="addUser" style="display:block; margin:0 0  10px 0">+ 新增</el-button>
            <common-form
            :formLabel="formLabel"
            :form="SearchForm"
            :inline="true"
            ref="form"
            >
              <el-button type="primary" @click="getList">搜索</el-button>
            </common-form>
          
        </div>
    </div>
</template>


<script>
import commonForm from "../../components/commonForm.vue";

export default{
    name:'user-one',
    components:{
        commonForm
    },
    data(){
        return {
            operateType:'add',
            isShow:false,
            operateFormLabel:[
                {
                    model:'name',
                    label:'姓名',
                    type:'input',
                },
                {
                    model:'age',
                    label:'年龄',
                    type:'input',
                },
                {
                    model:'sex',
                    label:'性别',
                    type:'select',
                    opts:[
                        {
                            label:'男',
                            value:1
                        },
                        {
                            label:'女',
                            value:0
                        },
                    ]
                },
                {
                    model:'birth',
                    label:'出生日期',
                    type:'date',
                },
                {
                    model:'addr',
                    label:'地址',
                    type:'input',
                },
            ],
            operateForm:{
              name:'',
              addr:'',
              age:'',
              birth:'',
              sex:''
            },
            formLabel:[
              {
                model:'keyword',
                label:'',
                type:'input'
              }
            ],
            SearchForm:{
              keyword:''
            }
              
          }
        
    },
    methods:{
      confirm(){
          
      },
      addUser(){
        this.isShow = true
        this.operateType = 'add'
        this.operateForm = {
          name:'',
          addr:'',
          age:'',
          birth:'',
          sex:'',
        }
      },
      getList(){
      }
    }
}
</script>

<style lang="less" scoped>

  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  
</style>