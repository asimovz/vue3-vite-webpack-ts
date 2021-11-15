<!-- <template>
    <div>我是{{home}}页面</div>
    <img src="/images/1111.png" />
</template> -->

<script lang="tsx">
import { defineComponent, ref, onMounted, defineAsyncComponent } from 'vue'
import Deatil from '@/demo/detail.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import routerModules from '../router/module'

export default defineComponent({
  name: 'Home',
  setup(props) {
    const router = useRouter()
    const home = ref('0')
    let messageText = ref('初始化值')

    const changeText = () => {
      messageText.value = '我是已经改变的值' + Math.random()
    }

    // onMounted(() => {
    //   const path = 'dynamic.vue'
    //   router.addRoute({
    //     name: 'dynamic',
    //     path: '/dynamic',
    //     component: () => import(`@/demo/${path}`),
    //   })
    //   // const module = import.meta.glob('../demo/*.vue')
    //   // console.log(module)
    // })

    const add = () => {
      axios.get('/route.json').then(resp => {
        const path = resp.data.path
        console.log(routerModules[path])

        router.addRoute({
          name: 'dynamic',
          path: '/dynamic',
          component: routerModules[path],
        })
      })
    }

    return () => (
      <div>
        <Deatil message={messageText.value} />
        <button onClick={changeText}>改变</button>
        <button onClick={add}>添加动态页面</button>
        <div>我是{home.value}页面</div>
        <img src="/images/1111.png" />
      </div>
    )
  },
  mounted() {
    // console.log(this.$router.getRoutes())
  },
})
</script>
<style>
.home {
  display: flex;
}
</style>
