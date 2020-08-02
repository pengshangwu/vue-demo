import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/navigation/Home'
import Product from '../pages/navigation/Product'
import Order from '../pages/navigation/Order'
import Parent from '../pages/navigation/Parent'

import Layout from '../pages/navigation/Layout';

Vue.use(Router);

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'product',
          name: 'product',
          component: Product
        },
        {
          path: 'order',
          name: 'order',
          component: Order
        },
        {
          path: 'parent',
          name: 'parent',
          component: Parent
        }
      ]
    },
  ]
})
