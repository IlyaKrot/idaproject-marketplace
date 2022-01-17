<template>
  <select
    :id="id"
    v-model="selectedValue"
    class="select"
    @change="select(selectedValue)"
  >
    <option
      v-for="option in options"
      :key="getId(option[value])"
      class="select__option"
      :value="option[value]"
    >
      {{ option[title] }}
    </option>
  </select> 
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Select',
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => ([]),
      required: true
    },
    value: {
      type: String,
      default: 'value'
    },
    title: {
      type: String,
      default: 'title' 
    },
  },
  setup({ options, value }, {  emit }) {
    const selectedValue = ref(options[0][value])

    const select = (option) => emit('select', option)

    const getId = (item) => JSON.stringify(item)

    return {
      select,
      getId,
      selectedValue
    }
  },
})
</script>

<style lang="scss" scoped>
.select {
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 12px 16px;
  @include font(12px, normal, 15px);
  color: #B4B4B4;
  cursor: pointer;
}
</style>
