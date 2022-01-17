<template>
  <div class="product-card">
    <div class="product-card__action" @click="removeProduct(product.id)">
      <img src="@/assets/delete.svg">
    </div>
    <div class="product-card__wrapper">
      <div class="product-card__image">
        <img :src="image" >
      </div>
      <div class="product-card__content">
        <div class="product-card__title">
          {{ product.title }}
        </div>
        <div class="product-card__description">
          {{ product.description }}
        </div>
        <div class="product-card__price">
          {{ price }} руб.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  setup({ product }, { emit }) {
    const image = computed(() => product.image || require('@/assets/no-photo.jpg'));
    const price = computed(() => product.price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))

    const removeProduct = (id) => emit('remove', id)

    return {
      image,
      price,
      removeProduct
    }
  },
})
</script>

<style lang="scss" scoped>
.product-card {
  height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.16);

    .product-card__action {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &__image {
    height: 200px;

    img {
      border-radius: 4px 4px 0 0;
      height: 100%;
      width: 100%;
    }
  }

  &__content {
    padding: 16px
  }

  &__action {
    position: absolute;
    right: -8px;
    top: -8px;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 32px;
    height: 32px;
    opacity: 0;
    display: flex;
    pointer-events: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;

    &:active {
      transform: scale(0.8)
    }
  }

  &__title {
    @include font(20px, 600, 25px);
    margin-bottom: 16px;
    color: #3F3F3F;
  }

  &__description {
    height: 80px;
    overflow: hidden;
    @include font(16px, normal, 20px);
    color: #3F3F3F;
  }

  &__price {
    @include font(24px, 600, 30px);
    position: absolute;
    bottom: 24px;
    color: #3F3F3F;
  }
}
</style>
