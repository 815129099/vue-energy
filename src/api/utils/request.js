import Vue from 'vue';
import axios from 'axios';

// 创建axios实例
const service = axios.create({
    //baseURL: process.env.BASE_API, // api的base_url
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// request拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = Vue.cookie.get('token');
    return config;
}, error => {
    return Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(response => {
    console.log(response);
    if (response.data && response.data.msg !='success' ||
        response.data && response.data.status != 0) { // -1, token失效 401 没有token
        Vue.cookie.delete('token');
        Vue.router.push({name: 'login'});
    }
    return response;
}, error => {
    return Promise.reject(error);
});

export default service;
