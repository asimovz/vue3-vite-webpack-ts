<template>
  <edit-input ref="editInput" v-model="myData.data" />
  <button ref="btn" @click="insertParam">插入参数</button>
  <button ref="btn" @click="insertEmoji">插入表情</button>
</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref } from 'vue'
import EditInput, { editableInputType } from './EditInput.vue'

export default defineComponent({
  name: 'rich-text',
  components: { EditInput },
  setup(props) {
    let myData = reactive({
      data: '内容',
    })
    const updateContent = data => {
      myData.data = data
    }
    // const editInput: Ref<InstanceType<typeof EditInput> | null> = ref(null)
    const editInput: Ref<editableInputType | null> = ref(null)

    const insertParam = text => {
      let inputEl: HTMLInputElement = document.createElement('input')
      inputEl.setAttribute('value', `{text${Math.floor(Math.random() * 10)}}`)
      inputEl.setAttribute('type', 'button')
      editInput.value.insert(inputEl)
    }
    const insertEmoji = eomji => {
      let emojiNode = document.createTextNode('😍')
      editInput.value.insert(emojiNode)
    }

    return {
      myData,
      editInput,
      updateContent,
      insertParam,
      insertEmoji,
    }
  },
})
</script>
<style lang="less">
.aw-rich-text {
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  input {
    color: #f3a92a;
    font-weight: 700;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    &:hover {
      color: #b17612;
    }
  }
  // .active {
  //   color: #0a9e1e;
  // }
}
</style>
