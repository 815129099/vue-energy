import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'


// 获取菜单
export function getMenu() {
  return request({
    method: 'post',
    url:'http://localhost:8088/api/menu.do',
    data:requestParam()
  })
}
