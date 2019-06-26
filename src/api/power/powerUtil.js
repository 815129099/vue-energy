import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'


// 获取菜单
export function getMenu() {
  return request({
    method: 'post',
    url: requestURL('/menu.do'),
    //url:'http://10.30.100.110:8088/api/menu.do',
    data: requestParam()
  })
}


// 导出数据
export function exportData() {
  return request({
    method: 'post',
    url: requestURL('/exportUser.do'),
    //url:'http://10.30.100.110:8088/api/exportUser.do',
    data: requestParam()
  })
}

//查询电量数据
export function getPowerData(params) {
  console.log(JSON.stringify(params));
  return request({
    method: 'post',
    url: requestURL('/Power.do'),
    //url:'http://10.30.100.110:8088/api/Power.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//电量分析数据
export function getPowerAnalyze(params) {
  console.log(JSON.stringify(params));
  return request({
    method: 'post',
    url: requestURL('/PowerAnalyze.do'),
    //url:'http://10.30.100.110:8088/api/PowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//瞬时量电量分析数据
export function getInstantPowerAnalyze(params) {
  console.log(JSON.stringify(params));
  return request({
    method: 'post',
    url: requestURL('/InstantPowerAnalyze.do'),
    //url:'http://10.30.100.110:8088/api/InstantPowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: JSON.stringify(params)
  })
}

//导出
export function exportData1() {
  return request({
    method: 'post',
    url: requestURL('/exportTest.do'),
    //url:'http://10.30.100.110:8088/api/InstantPowerAnalyze.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam(),
    responseType: 'blob'
  })
}

//最近七天的电表总量
export function getTotalPowerByWeek() {
  return request({
    method: 'post',
    url: requestURL('/getTotalPower.do'),
    //url:'http://10.30.100.110:8088/api/getTotalPower.do',
    // data: requestParam(params, 'post', false, 'json')
    data: requestParam(),
  })
}

