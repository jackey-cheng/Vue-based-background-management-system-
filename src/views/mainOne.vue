<template>
    <div>
        <el-container>
            <el-aside style="width:200px">
                <commonAside/>
            </el-aside>
            <el-container>
                <el-header>
                    <commonHeader/>
                </el-header>
                <commonTag/>
                <el-main> 
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import commonAside from '../components/commonAside.vue'
    import commonHeader from '../components/commonHeader.vue'
    import commonTag from '../components/commonTag.vue'

    export default{
        name:'mainOne',
        components:{
            commonAside,
            commonHeader,
            commonTag,
        }
    }
</script>


<style lang="less" scoped>
    el-container{
        display: flex;
    }
    
</style>