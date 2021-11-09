import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import '@/assets/css/main.less'

const app = createApp(App)

import Home from './demo/Home.vue'
const routes = [
  { path: '/', component: Home },
  {
    name: 'Hello',
    path: '/hello/:msg',
    component: () => import(/* webpackChunkName: "hello" */ './demo/HelloWorld.vue'),
    props: true,
  },
  {
    path: '/third',
    component: () => import(/* webpackChunkName: "third" */ './demo/third.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
// Sentry.init({
//   app,
//   dsn: "http://425132c54cc841fd84a46c9b656c9bce@192.168.91.128:9000/2",
//   integrations: [
//     new Integrations.BrowserTracing({
//       // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", "my-site-url.com", /^\//],
//     }),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

app.mount('#app')
