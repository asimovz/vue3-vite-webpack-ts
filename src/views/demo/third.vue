<!-- <template>
    <div>我是{{ third }}页面adfasdfsfasfasdf</div>
    <img src="/images/2222.jpg" />
</template> -->
<script lang="tsx">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Third',
	setup(props) {
		const third = ref('啊打卡练腹肌阿里1激发了看见了dfadfasfsd')
		return () => (
			<>
				<div>我是{third.value}</div>
				<img src='/images/2222.jpg' />
			</>
		)
	},
})
</script>
<style></style>
