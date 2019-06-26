import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'


// 获取菜单
export function getErtus() {
  return request({
    method: 'post',
    url: requestURL('/ertus.do'),
    //url:'http://10.30.100.110:8088/api/ertus.do',
    data:requestParam()
  })
}


// 获取菜单
export function exportData() {
  return request({
    method: 'post',
    url: requestURL('/exportUser.do'),
    //url:'http://10.30.100.110:8088/api/exportUser.do',
    data:requestParam()
  })
}
