import { createApp } from 'vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import router from './router'
import App from './App.vue'
import '@/assets/css/index.less'

const app = createApp(App)

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
