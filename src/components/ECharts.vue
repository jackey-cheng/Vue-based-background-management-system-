<template>
    <div ref="echart">
        
    </div>
</template>


<script>
export default {
    props:{
        isAxisChart:{
            type:Boolean,
            default:true
        },
        chartData:{
            type:Object,
            default(){
                return {
                    xData:[],
                    series
                }
            }
        }
    },
    data() {
        return {
            //折线图
            axisOption:{},
            normalOption:{}
        }
    },
    computed:{
        options(){
            return this.isAxisChart ? this.axisOption : this.normalOption
        }
    }
}

</script>