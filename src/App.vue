<script setup lang="ts">
import { ref, onMounted } from 'vue'

import HelloWorld from '@/views/demo/HelloWorld.vue'
interface HELLO extends HTMLHtmlElement {
  demo: Function
}

const helloworld = ref<null | HELLO>(null)
const imgClick = (evt: Event) => {
  let cname = (evt.target as HTMLElement).classList
}

onMounted(() => {
  helloworld.value && helloworld.value.demo('42342424')
})
</script>

<template>
  <img alt="Vue logo" src="@/assets/images/logo.png" @click="imgClick" />

  <router-link to="/">Go to Home111</router-link>
  |
  <router-link :to="{ name: 'Hello', params: { msg: 123 } }">Go to About</router-link>
  |
  <router-link to="/third">Go to Third</router-link>
  |
  <router-link to="/dynamic">Go to dynamic</router-link>

  <router-view />

  <!-- <HelloWorld ref="helloworld" msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--bcat-input-bg);
  /* background-image: url("assets/logo.png"); */
}
</style>
