<template>
  <div class="aw-rich-text" id="text" ref="editableInput" contenteditable="true" v-html="inputContent" @blur="updateContent"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// export interface editableInputType {
//   insert: (node: HTMLInputElement | Text) => void
// }

export default defineComponent({
  name: 'editable-input',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { expose, emit }) {
    const editableInput = ref<null | HTMLElement>(null)
    let inputContent = props.modelValue
    const insert = (node: HTMLInputElement | Text) => {
      let targetEl = editableInput.value as HTMLInputElement
      targetEl.focus()
      let selection = getSelection() as Selection
      let range = selection.getRangeAt(0)
      range.insertNode(node)
      range.setStartAfter(node)
      range.collapse(true)
    }
    const updateContent = () => {
      emit('update:modelValue', editableInput.value?.innerHTML)
    }

    // expose({ insert })

    return {
      editableInput,
      inputContent,
      updateContent,
      insert,
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
