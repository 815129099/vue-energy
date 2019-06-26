import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'




// 导出数据
export function ChargeList(params) {
  return request({
    method: 'post',
    url: requestURL('/ChargeList.do'),
    //url:'http://10.30.100.110:8088/api/ChargeList.do',
    data:JSON.stringify(params)
  })
}

//增加
export function addCharge(params) {
  return request({
    method: 'post',
    url: requestURL('/Charge.do'),
   //url:'http://10.30.100.110:8088/api/Charge.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

//删除
export function deleteCharge(params) {
  return request({
    method: 'delete',
    url: requestURL('/Charge.do'),
     //url:'http://10.30.100.110:8088/api/Charge.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

//删除
export function editCharge(params) {
  return request({
    method: 'put',
    url: requestURL('/Charge.do'),
     //url:'http://10.30.100.110:8088/api/Charge.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

