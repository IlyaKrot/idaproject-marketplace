<template>
  <div class="textarea">
    <label
      v-if="label"
      :for="id"
      class="textarea__label"
      :class="{'textarea__label--required': required}"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :rows="rows"
      class="textarea__textarea"
      @input="input"
    />
    <span class="textarea__error">{{ error }}</span>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Textarea',
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
    rows: {
      type: Number,
      default: 3
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
.textarea {
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

  &__textarea {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    padding: 12px 16px;
    transition: 0.3s ease;
    resize: none;


    &::placeholder {
      @include font(12px, normal, 15px);
      color: #B4B4B4;
    }
  }

  &__error {

  }
}
</style>
