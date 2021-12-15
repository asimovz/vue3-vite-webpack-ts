import { defineComponent } from 'vue'
// interface routerModule {
//   [key: string]: () => Promise<any>
// }

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

interface routerModule {
  [key: string]: Component
}

const routerModules: routerModule = {
  '/dynamic': () => import(/* webpackChunkName: "dynamic" */ '@/views/demo/dynamic.vue'),
  '/test': () => import(/* webpackChunkName: "dynamic" */ '@/views/demo/test.vue'),
}

export default routerModules
