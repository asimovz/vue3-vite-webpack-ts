<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'dynamic',
  setup() {
    let imgref = ref(null)
    let test = ref(null)
    const btnClick = () => {
      console.log(imgref.value, test.value)
    }
    return () => {
      return (
        <div>
          <div ref={imgref}>我是动态页面</div>
          <div ref={test}>测试一下呗</div>

          <button onClick={btnClick}>点击一下</button>
        </div>
      )
    }
  },
})
</script>
