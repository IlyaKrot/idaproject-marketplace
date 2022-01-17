<template>
  <button
    class="button"
    :class="{'button--disabled': disabled}"
    @click="click"
  >
    <span class="button__content">
      {{ loading ? 'Загрузка...' : text }}
    </span>
  </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Кнопка'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup({ disabled, loading }, { emit }) {
    const click = () => {
      if (!disabled && !loading) emit('click')
    }

    return {
      click
    }
  },
})
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  border-radius: 10px;
  background: #7BAE73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
  text-align: center;
  padding: 6px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.3s ease;

  &--disabled {
    background: #EEEEEE;
    color: #B4B4B4;
    cursor: default;
  }

  &__content {
    @include font(12px, 600, 15px);
  }
}
</style>
