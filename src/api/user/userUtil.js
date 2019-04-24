import request from '../utils/request'
import requestURL from '../utils/requestUrl'
import requestParam from '../utils/requestParam'
//get 查 、post 增加、delete删除、put修改

// 获取用户列表
export function getData(params) {
  return request({
    method: 'post',
   // url: requestURL('/login'),
   url:'http://localhost:8088/api/userList.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

//修改用户
export function updateUser(params) {
  return request({
    method: 'put',
   // url: requestURL('/login'),
   url:'http://localhost:8088/api/User.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

//删除用户
export function deleteUser(params) {
  return request({
    method: 'delete',
   // url: requestURL('/login'),
   url:'http://localhost:8088/api/User.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}

//增加用户
export function addUser(params) {
    console.log(JSON.stringify(params));
  return request({
    method: 'post',
   // url: requestURL('/login'),
   url:'http://localhost:8088/api/User.do',
   // data: requestParam(params, 'post', false, 'json')
   data:JSON.stringify(params)
  })
}


