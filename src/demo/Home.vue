<!-- <template>
    <div>我是{{home}}页面</div>
    <img src="/images/1111.png" />
</template> -->

<script lang="tsx">
import { defineComponent, ref } from 'vue'
import Deatil from './detail.vue'
export default defineComponent({
  name: 'Home',
  setup(props) {
    const home = ref('0')
    let messageText = ref('初始化值')

    const changeText = () => {
      messageText.value = '我是已经改变的值' + Math.random()
    }

    return () => (
      <div>
        <Deatil message={messageText.value} />
        <button onClick={changeText}>改变</button>
        <div>我是{home.value}页面</div>
        <img src="/images/1111.png" />
      </div>
    )
  },
})
</script>
<style>
.home {
  display: flex;
}
</style>
