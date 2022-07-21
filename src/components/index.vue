<template>
    <div class="manage">
        <el-dialog 
            :title="operateType === 'add' ? '新增用户' : '更新用户'"
            :visible.sync="isShow"    
        >
            <!-- <common-form :formLabel="operateFormLabel"
                :form=""
            ></common-form> -->
        </el-dialog>
    </div>
</template>


<script>
import commonForm from "./commonForm.vue";

export default{
    name:'User',
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
            ]
        }
    }
}
</script>