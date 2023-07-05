// Composables
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/favorites',
    component:()=>import('@/views/Favorites.vue')
  },
  {
    path: '/cart',
    component:()=>import('@/views/Cart.vue')
  },
  {
    path: '/about',
    component:()=>import('@/views/About.vue')
  },
  {
    path: '/delivery',
    component:()=>import('@/views/Delivery.vue')
  },
  {
    path: '/howtodonate',
    component:()=>import('@/views/HowToDonate.vue')
  },
  {
    path: '/howItWorks',
    component:()=>import('@/views/HowItWorks.vue')
  },
  {
    path: '/rent',
    component:()=>import('@/views/Rent.vue')
  },
  {
    path: '/category/:categoryId',
    component:()=>import('@/views/Category.vue'),
    meta: { requiresCache: true }
  },
  {
    path: '/search/:query',
    component:()=>import('@/views/Category.vue'),
    meta: { requiresCache: true }
  },
  {
    path: '/product/:pId',
    component:()=>import('@/views/Product.vue')
  },
  {
    path: '/cabinet',
    component:()=>import('@/views/Cabinet.vue')
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
