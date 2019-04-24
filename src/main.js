import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import "babel-polyfill";
import VueCookie from 'vue-cookie';
import store from './store'
/*
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
       locale: 'zh_CN',
});
const config = {
    errorBagName: 'errorBags', // change if property conflicts.
    fieldsBagName: 'fieldBags',
    delay: 0,    //多少ms之后进行校验
    locale: 'zh_CN',
    messages: null,   //代表自定义校验信息
    strict: true,    //代表没有设置规则的表单不进行校验
    i18n,
       i18nRootKey: 'validation',
       dictionary: {
          zh_CN
       }
};
Vue.use(VeeValidate, config);*/
Vue.use(VueCookie);
Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    //const role = localStorage.getItem('ms_username');
    console.log(to);
    console.log(from);
    console.log(next);
    const role = Vue.cookie.get('role');
    console.log(role);
    /*
    if(role){
        console.log(router);
        store.dispatch('GenerateRoutes',role).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
             //next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          });
          
          if(to.meta.role){
              next();
          }else if(!to.meta.role && to.path !== '/403'){
              next('/403');
          }else{
              next();
          }
    }else if(!role && to.path !== '/login'){
        console.log("跳转到login");
            next('/login');
    }
    */
    if (!role && to.path !== '/login') {
        console.log("跳转到login");
        next('/login');
    } else if (to.meta.role){
        console.log("this is a role");
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else {
        console.log("直接跳过");
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')