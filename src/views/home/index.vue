<template>
  <div class="mall">

    

    <h1>This is an home page1</h1>

    <el-row>
      <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0" style="margin-left:20px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../../public/assets/user.png" class="image">
          <div style="padding: 14px;">
            <span>爱炫饭的管理员</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <!-- <el-button type="text" class="button" style="width:100% ;">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
        
        <el-card>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column v-for="(item,key) in tableLabel"
              :key="key"
              :prop="key"
              :label="item"
              width="180">
            </el-table-column>
          </el-table>
        </el-card>
        

      </el-col>
      
      <el-col :span="13" style="margin-left:20px" >
        <div style="display:flex">
          <el-card v-for="item in countData" :key="item.value" > 
            <i :class="'el-icon-' + item.icon" :style="{background:item.color}"> </i>
            <div class="detail" style="align-items:center;margin:10px 0">
              <p style="margin:10px 0"> {{item.name}} </p>
              <p> {{item.value}} </p>
            </div>
          </el-card>
        </div>


        <div >
          <el-card> 
            <div ref="figOne" style="width:100%;height:400px;">
            </div>
          </el-card>
        </div>      
        
        </el-col>

    </el-row>

    <el-row>
      <el-col :span="10" >
        <el-card style="margin:10px 10px 0 ">
          <div ref="figTwo" style="width:100%;height:400px">  </div>
        </el-card>
      </el-col>
      <el-col :span="10" >
        <el-card style="margin-top:10px">
          <div ref="figThree" style="width:100%;height:400px">  </div>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<style lang="less" scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
</style>

<script>

import { getData } from '../../../api/data.js' 

import * as echarts from 'echarts'


export default{
  name:'home-one',
  data() {
    return {
      currentDate: new Date(),
      tableData:[
                    {
                        name:'oppo',
                        todayBuy:'100',
                        monthBuy:'300',
                        totalBuy:'800'
                    },
                    {
                        name:'vivo',
                        todayBuy:'200',
                        monthBuy:'400',
                        totalBuy:'900'
                    },
                    {
                        name:'huawei',
                        todayBuy:'1000',
                        monthBuy:'9000',
                        totalBuy:'70000'
                    },
                    {
                        name:'huawei',
                        todayBuy:'1000',
                        monthBuy:'9000',
                        totalBuy:'70000'
                    },
                    {
                        name:'huawei',
                        todayBuy:'1000',
                        monthBuy:'9000',
                        totalBuy:'70000'
                    },
                    {
                        name:'huawei',
                        todayBuy:'1000',
                        monthBuy:'9000',
                        totalBuy:'70000'
                    },
                ],
      tableLabel:{
          name:'课程',
          todayBuy:'今日购买',
          monthBuy:'月购买',
          totalBuy:'总购买'
      },
      countData:[
          {
              name:'今日支付订单',
              value:1234,
              icon:'success',
              color:'#2ec7c9'
          },
          {
              name:'今日收藏订单',
              value:210,
              icon:'star-on',
              color:'#ffb980'
          },
          {
              name:'今日未支付订单',
              value:1234,
              icon:'s-goods',
              color:'#5ab1ef'
          },
          {
              name:'本月支付订单',
              value:12340,
              icon:'success',
              color:'#2ec7c9'
          },
          {
              name:'本月收藏订单',
              value:12340,
              icon:'success',
              color:'#2ec7c9'
          },{
              name:'本月未支付订单',
              value:12340,
              icon:'success',
              color:'#2ec7c9'
          },
      ],
      echartData:{
          order:{
              xData:[],
              series:[]
          },
          user:{
              xData:[],
              series:[]
          },
          video:{
              xData:[],
              series:[]
          },
      }
    }
  },
  mounted() {
    getData().then(res=>{
      const {code,data} = res.data
      console.log(res.data.data);
      if(code === 20000){
        this.tableData = data.tableData
        const order = data.orderData
        const xData = order.date
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name:key,
            data:order.data.map(item => item[key]),
            type:'line'
          })
        })

        const option = {
          xAxis:{
            data:xData
          },
          yAxis:{},
          legend:{
            data:keyArray
          },
          series
        }

        const E = echarts.init(this.$refs.figOne)
        E.setOption(option)

        const userOption = {
                        legend:{
                            textStyle:{
                                color:"#333",
                            },
                        },
                        grid:{
                            left:"20%",
                        },
                        tooltip:{
                            trigger:"axis",
                        },
                        xAxis:{
                            type:"category",
                            data:data.userData.map(item => item.date),
                            axisLine:{
                                lineStyle:{
                                    color:"#17b3a3",
                                },
                            },
                            axisLabel:{
                                interval:0,
                                color:"#333",
                            },
                        },
                        yAxis:[
                            {
                                type:"value",
                                axisLine:{
                                    lineStyle:{
                                        color:"#17b3a3"
                                    },
                                },
                            },
                        ],
                        color:["#2ec7c9","#b6a2de"],
                        series:[
                            {
                                name:'新增用户',
                                data:data.userData.map(item => item.new),
                                type:'bar',
                            },
                            {
                                name:'活跃用户',
                                data:data.userData.map(item => item.active),
                                type:'bar',
                            },
                        ]

                    } 
        const F = echarts.init(this.$refs.figTwo)
        F.setOption(userOption)

        const videoOption = {
                        tooltip:{
                            trigger:"item",
                        },
                        color:[
                            "#0f78f4",
                            "#dd536b",
                            "#9462e5",
                            "#a6a6a6",
                            "#elbb22",
                            "#39c362",
                            "#3ed1cf",
                        ],
                        series:[
                            {
                                data:data.videoData,
                                type:'pie'
                            }
                        ],
                    }  
        const G = echarts.init(this.$refs.figThree)
        G.setOption(videoOption)


      }
    })
  },

  
}
</script>




