<template>
  <div>
    <detail :product="product"></detail>
  </div>
</template>

<script>
  import Detail from '../components/product/Detail'
  export default {
    created () {
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
         return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      'detail': Detail
    }
  }
</script>