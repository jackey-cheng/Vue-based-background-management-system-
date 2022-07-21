import  Mock from 'mockjs'

import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permission from './mockServeData/permission'

Mock.mock('/home/getData',homeApi.getStatisticalData) 
Mock.mock(/api\/user\/add/,'post', userApi.createUser)
Mock.mock(/api\/user\/add/,'post', userApi.updateUser)

Mock.mock(/permission\/getMenu/,'post',permission.getMenu)

