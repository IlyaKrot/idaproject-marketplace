<template>
  <div class="product-form">
    <Input
      id="product-title"
      v-model="product.title"
      class="product-form__item"
      label="Наименование товара"
      placeholder="Введите наименование товара"
      required
    />
    <Textarea
      id="product-description"
      v-model="product.description"
      class="product-form__item"
      label="Описание товара"
      placeholder="Введите описание товара"
    />
    <Input
      id="product-image"
      v-model="product.image"
      class="product-form__item"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      required
    />
    <Input
      id="product-price"
      v-model="product.price"
      class="product-form__price"
      label="Цена товара"
      placeholder="Введите цену"
      required
    />
    <Button
      text="Добавить товар"
      :disabled="!activeButton"
      :loading="loading"
      @click.native="sendForm"
    />   
  </div>
</template>

<script>
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'ProductForm',
  components: {
    Input: () => import('@/components/ui/Input/index'),
    Textarea: () => import('@/components/ui/Textarea/index'),
    Button: () => import('@/components/ui/Button/index')
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const product = ref({
      title: '',
      description: '',
      image: '',
      price: null,
    })

    const activeButton = computed(() => !!(
      product.value.title
      && product.value.image
      && product.value.price
    ))

    const sendForm = () => {
      if (activeButton.value) {
        emit('sendForm', product.value)
        product.value = {
          title: '',
          description: '',
          image: '',
          price: null,
        }
      }
    }

    return {
      product,
      sendForm,
      activeButton
    }
  },
})
</script>

<style lang="scss" scoped>
.product-form {
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: 332px;

  &__item {
    margin-bottom: 12px;
  }

  &__price {
    margin-bottom: 24px;
  }
}
</style>
