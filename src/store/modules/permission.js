// store/permission.js

import { asyncRouterMap, constantRouterMap,userRouterMap } from '@/router';

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const roles  = data;
        let accessedRouters;
        if(roles.indexOf('admin') >=0 ){
          accessedRouters = asyncRouterMap;
        }else if(roles.indexOf('user') >=0){
          accessedRouters = userRouterMap;
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};

export default permission;

