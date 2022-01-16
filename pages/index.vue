<template>
  <div class="main-page">
    <div class="main-page__wrapper">
      <div class="main-page__header">
        <span class="main-page__header-title">Добавление товара</span>
      </div>
      <div class="main-page__content">
        <ProductForm
          class="main-page__form"
          :loading="sendFormLoading"
          @sendForm="sendForm"
        />
        <div class="main-page__goods">
          <div v-if="loading" class="main-page__pending">
            <span>Загрузка...</span>
          </div>
          <div v-else class="main-page__cards">
            <ProductCard
              v-for="product in result.goods"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { useQuery, useMutation } from '@vue/apollo-composable/dist';
import { GET_GOODS, ADD_GOODS } from '@/graphql/types';

export default defineComponent({
  name: "MainPage",
  components: {
    ProductCard: () => import('@/components/ProductCard/index'),
    ProductForm: () => import('@/components/ProductForm/index')
  },
  setup() {
    const { result, loading } = useQuery(GET_GOODS);
    const sendFormLoading = ref(false)

    const {
      mutate: addGoods,
      onDone,
      onError
    } = useMutation(ADD_GOODS);

    function sendForm (formData) {
      sendFormLoading.value = true
      addGoods({ object: formData },
        {
          update: (cache, { data: { insert_goods_one } }) => {
            const data = cache.readQuery({query: GET_GOODS})
            data.goods.unshift(insert_goods_one);
            cache.writeQuery({query: GET_GOODS, data });
          }
        }
      )
    }

    onDone(() => {
      sendFormLoading.value = false
    })
    onError((err) => {
      alert('Сорри, произошла ошибка: ', err)
      sendFormLoading.value = false
    })

    return {
      result,
      loading,
      sendFormLoading,
      sendForm
    };
  },
})
</script>

<style lang="scss" scoped>
.main-page {
  &__wrapper {
    padding: 32px;
  }

  &__content {
    display: flex;
  }

  &__form {
    top: 24px;
    position: sticky;
    height: 100%;
  }

  &__pending {
    width: 100%;
    text-align: center;
  }

  &__goods {
    flex: 1;
    margin-left: 16px;
  }

  &__cards {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__header {
    margin-bottom: 16px;

    &-title {
      @include font(28px, 600, 35px);
      color: #3F3F3F;
    }
  }
}
</style>
