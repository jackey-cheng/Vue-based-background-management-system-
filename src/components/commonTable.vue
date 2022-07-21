 <template>
    <div class="common-table">
        <el-table :data="tableData" style="height:90%, strip">
            <el-table-column show-overflow-tooltip=""
            v-for="item in tableLabel"
            :key="item.prop"
            :label="item.label"
            :width="item.width ? item.width:125 ">
            <template>
                <span style="margin-left:150px">
                    
                </span>
            </template>

            </el-table-column>
        </el-table>
    </div>
 </template>

 <script>
 export default{
    name:'CommonTable',
    props:{
        tableData:Array,
        tableLabel:Array,
    },
    data(){

    }
 }
 
 </script>