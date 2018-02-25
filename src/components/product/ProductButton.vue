<template>
    <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus" ></i> Add to basket</button>
    <button v-else style=" padding: 5px 10px;background: transparent;border: none;" class="button btn-sm button-danger" @click="removeFromCart(product)"><i class="fa fa-trash"></i></button>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'

  export default {
    props: ['product', 'isAdding'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart (product) {
        this.$store.commit(REMOVE_FROM_CART, product)
      }
    }
  }
</script>