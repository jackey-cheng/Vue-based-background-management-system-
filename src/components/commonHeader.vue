<template>
    <div id="btn">

        <div class="l-content">
            <h4 @click="changCollapse" style="height:50%"> commonHeader </h4> 
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path"  :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../../public/assets/user.png" alt="" class="el-icon-arrow-down el-icon--right">
                </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item @click="trans('user-one')">设置</el-dropdown-item>
                    <el-dropdown-item @click="trans('page-one')">个人中心</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        

        
    </div>
</template>


<style lang="less" scoped>
    #btn{
        padding: 5px;
        display: flex;
        justify-content: space-between;
        height: 50px;
        img {
            height: 40px;
        };
        .r-content{
            el-dropdown{
                height: 40px;
                el-dropdown-item{
                    height: 40px;
                }
            }
        }
        .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
        border-bottom: 1px solid black;
    }
    h4{
        height: 50px;
        line-height: 100%;
        text-align: center;
        align-items: center;
    }
    

</style>


<script>
import { mapState } from 'vuex'
    export default{
        methods:{
            changCollapse(){
                console.log(this.$store.state.tab.iscollapse);
                this.$store.commit('collapseChange')
                console.log(this.$store.state.tab.iscollapse);
            },
            trans(item){
                console.log(item);
                this.$router.push({
                    name:item
                })
            }
    
        },

        computed:{
            ...mapState({
                tags:state => state.tab.tabsList
            })
        }
    }
    


</script>