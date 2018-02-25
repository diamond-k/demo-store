<template>                
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" :key="product.id" :displayList="displayList"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    props: ['displayList'],
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>

<style>
.products {
    background:#E7DDE2;
    /*#F7F9DE;:#B7F9F8; /*   url('https://i.ytimg.com/vi/XRtkIcUX97w/maxresdefault.jpg'); */
    /* #F0F0F9; */
    /* #f7f8fb; */
    /*#f0eeec*/
    /*#f7f6f5;*/
    padding: 20px 0;
    border-bottom: 1px solid #F0F0F2;
}
</style>