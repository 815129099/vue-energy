import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'




export function getPowerData(params) {
  return request({
    method: 'post',
    url: requestURL('/PowerPeak.do'),
    //url:'http://10.30.100.110:8088/api/PowerPeak.do',
   // data: requestParam(params, 'post', false, 'json')
   data:requestParam(params)
  })
}
