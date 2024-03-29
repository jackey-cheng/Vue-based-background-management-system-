import axios from 'axios'
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro


/* 配置axios，二次封装 */
class HttpRequest{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    getInsideConfig(){
        const config = {
            baseUrl:this.baseUrl,
            header:{}
        }
        return config
    }
    /* 配置拦截器 */
    interceptors(instance){
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
          }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
          });
        
        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
          }, function (error) {
            // 对响应错误做点什么
            console.log(error,'response');
            return Promise.reject(error);
          });
    }
    request(options){
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options}
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)