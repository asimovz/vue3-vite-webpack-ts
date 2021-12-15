import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/demo/Home.vue'

const routes = [
  { path: '/', component: Home },
  {
    name: 'Hello',
    path: '/hello/:msg',
    component: () => import(/* webpackChunkName: "hello" */ '@/views/demo/HelloWorld.vue'),
    props: true,
  },
  {
    path: '/third',
    component: () => import(/* webpackChunkName: "third" */ '@/views/demo/third.vue'),
  },
]

/*
  判断打包环境[vite/webpaack]，根据设置的静态目录路径设置路由的baseUrl
*/
let root_url: string = import.meta.env == undefined ? (process.env.VITE_STATIC_URL as string) : (import.meta.env.VITE_STATIC_URL as string)
root_url = root_url.indexOf('//:') > -1 ? '' : root_url
const router = createRouter({
  history: createWebHistory(root_url),
  routes,
})

export default router
