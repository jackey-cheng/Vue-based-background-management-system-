
<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

            <span>人员后台管理系统</span>
           
            <el-menu-item :index="index+1"  @click="trans(item,index)" v-for="item in nochildren" :key="item.name">
                    <i :class="'el-icon-'+item.icon"> </i>
                    <span slot="title">{{item.label}}</span>
            </el-menu-item>
            
            
            <el-submenu  v-for="(item,index) in hasChildren" :key="item.name" :index="index+1">

                <template slot="title">
                    <i :class="'el-icon-'+item.icon"></i>
                    <span slot="title">{{item.label}}</span>
                </template>

                <el-menu-item-group >
                    <el-menu-item @click="trans(items)" :index="index+1"  v-for="items in item.children" :key="items.label">
                        <i :class="'el-icon-'+items.icon"></i>
                        <span> {{items.label}}  </span>  
                    </el-menu-item>
                    
                </el-menu-item-group>

            </el-submenu>
 
        </el-menu>      
    </div>
</template>


<script>
export default{
    data() {
        return {
            menu:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'home/index',
            },
            {
                path:'/mall',
                name:'mall',
                label:'商品管理',
                icon:'s-goods',
                url:'mall/index',
            },
            {
                path:'/User',
                name:'user',
                label:'用户管理',
                icon:'user',
                url:'user/index',
            },
            {
                label:'其他',
                icon:'location',
                children:[
                    {
                        path:'page1',
                        name:'page1-one',
                        label:'页面1',
                        icon:'setting',
                        url:'others/page1',
                    },
                    {
                        path:'page2',
                        name:'page2-one',
                        label:'页面2',
                        icon:'setting',
                        url:'others/page2',
                    }
                ]
            },
        ],
        }
    },
    computed:{
        isCollapse(){
            return this.$store.state.tab.iscollapse
        },
        hasChildren(){
            return this.asyncMenu.filter(item =>  item.children )
        },
        nochildren(){
            return this.asyncMenu.filter( item => !item.children )
        },
        asyncMenu(){
            return this.$store.state.tab.menu
        }  
    },
    methods:{
        trans(item){
            console.log(item);
            this.$router.push({
                name:item.name
            })
            this.$store.commit('selectMenu',item)
        }
    },

}

</script>


<style lang="less" scoped>

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  
</style>