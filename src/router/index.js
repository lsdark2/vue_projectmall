import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/home',

  },{
    path: '/home',
    name: 'Home',
    component:()=>import('views/home/Home')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( 'views/cart/Cart')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import( 'views/category/Category')
  },{
    path: '/profile',
    name: 'Profile',
    component: () => import( 'views/profile/Profile')
  }
]
const router = new VueRouter({
  routes,
  model: 'history'
})

export default router
