<template>
  <div class="input">
    <label
      v-if="label"
      :for="id"
      class="input__label"
      :class="{'input__label--required': required}"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :value="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      class="input__input"
      @input="input"
    />
    <span class="input__error">{{ error }}</span>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Input',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: String,
      default: ''
    },
  },
  setup(_, { emit }) {
    function input(e) {
      emit('input', e.target.value);
    }

    return {
      input
    }
  },
})
</script>

<style lang="scss" scoped>
.input {
  &__label {
    @include font(10px, normal, 13px, -0.02em);
    color: #49485E;
    margin-bottom: 4px;

    &--required::after {
      content: '';
      display: inline-block;
      position: relative;
      bottom: 5px;
      height: 4px;
      width: 4px;
      background-color: #FF8484;
      border-radius: 4px;
    }
  }

  &__input {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    height: 36px;
    padding: 12px 16px;
    transition: 0.3s ease;


    &::placeholder {
      @include font(12px, normal, 15px);
      color: #B4B4B4;
    }
  }

  &__error {

  }
}
</style>
