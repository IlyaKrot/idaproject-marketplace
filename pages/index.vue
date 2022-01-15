<template>
  <div class="main-page">
    <h1>Goods:</h1>
    <div>
      {{ goods }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable/dist';
import { GET_GOODS } from '@/graphql/types';

export default defineComponent({
  name: "MainPage",
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
