<template>
  <div class="app">
    <div class="app__wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss">
.app {
  &__wrapper {
    height: 100%;
    min-height: 100vh;
    background: rgba(255, 254, 251, 0.8);
  }
}
</style>

