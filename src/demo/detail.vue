<template>
	<div>哈哈哈哈 {{ message }}</div>
	<div>{{ demoText }}</div>
	<button @click="changeText">detail改变</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
	message: String,
})

let demoText = ref(props.message)
const changeText = () => {
	demoText.value = '哈哈哈哈'
}
</script>
<style lang=""></style>
