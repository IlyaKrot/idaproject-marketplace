<template>
  <div class="main-page">
    <div class="main-page__wrapper">
      <div class="main-page__header">
        <span class="main-page__header-title">Добавление товара</span>
      </div>
      <div class="main-page__cards">
        <ProductCard
          v-for="product in goods"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import { GET_GOODS } from '@/graphql/types';

export default defineComponent({
  name: "MainPage",
  components: {
    ProductCard: () => import('@/components/ProductCard/index')
  },
  setup() {
    const { result, loading, error } = useQuery(GET_GOODS);
    const goods = useResult(result, null, data => data.goods);

    return {
      goods,
      loading,
      error
    };
  },
})
</script>

<style lang="scss" scoped>
.main-page {
  &__wrapper {
    padding: 32px;
  }

  &__cards {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__header {
    margin-bottom: 16px;

    &-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      color: #3F3F3F;
    }
  }
}
</style>
