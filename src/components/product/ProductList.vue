<template>                
  <div>
    <div class="products">
      <div class="container hidden-md hidden-lg hidden-sm ">
        <carousel :per-page="1">
          <template v-for="product in products">
           <slide :key="product.id">
              <product-item :product="product" :key="product.id" :displayList="displayList"></product-item>
           </slide>
          </template>  
        </carousel>
      </div>
       <div class="container hidden-xs">
        <template v-for="product in products">
          <product-item :product="product" :key="product.id" :displayList="displayList"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
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
      'product-item': ProductItem,
      Carousel, 
      Slide
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
.hidden-lg{
  transition: none;
}
</style>