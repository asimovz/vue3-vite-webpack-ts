<template>
  <div>
    <div ref="testRef">哈哈哈哈 {{ message }}</div>
    <div>{{ demoText }}</div>
    <button @click="changeText">detail改变</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  message: String,
})

let demoText = ref(props.message)
let testRef = ref(null)
const changeText = () => {
  demoText.value = '哈哈哈哈'
  console.log(testRef.value)
}
</script>
