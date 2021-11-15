interface routerModule {
  [key: string]: () => Promise<any>
}

const routerModules: routerModule = {
  '/dynamic': () => import(/* webpackChunkName: "dynamic" */ '@/demo/dynamic.vue'),
  '/test': () => import(/* webpackChunkName: "dynamic" */ '@/demo/test.vue'),
}

export default routerModules
