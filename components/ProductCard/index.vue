<template>
  <div class="product-card">
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
        {{ product.price }} руб.
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
      reqired: true
    }
  },
  setup(props) {
    const image = computed(() => props.product.image || require('@/assets/no-photo.jpg'));

    return {
      image
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

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.14);
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
    margin-bottom: 32px;
  }

  &__price {
    @include font(24px, 600, 30px);
    color: #3F3F3F;
  }
}
</style>
