import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../view/home/home.vue'], resolve),
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['../view/home/home.vue'], resolve),
    },
    {
      path: '/blindbox',
      name: 'Blindbox',
      component: resolve => require(['../view/blindbox/blindbox'], resolve),
    
    },
    {
      path: '/market',
      name: 'market',
      component: resolve => require(['../view/market/market'], resolve),
    
    },
    {
      path: '/marketInfo',
      name: 'marketInfo',
      component: resolve => require(['../view/market/marketInfo'], resolve),
    
    },
    {
      path: '/marketBuyInfo',
      name: 'marketBuyInfo',
      component: resolve => require(['../view/market/marketBuyInfo'], resolve),
    
    },
    {
      path: '/arrowheads',
      name: 'arrowheads',
      component: resolve => require(['../view/arrowheads/arrowheads'], resolve),
    
    },
    {
      path: '/farms',
      name: 'farms',
      component: resolve => require(['../view/farms/farms'], resolve),
    
    }, 

  ]
})
