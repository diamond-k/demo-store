<template>
  <product-form @save-product="addProduct" :model="model" :isEditing="false" :manufacturers="manufacturers"></product-form>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      return {
        model: {}
      }
    },
    created () {
      this.$store.dispatch('allManufacturers')
    },
    computed: {
      manufacturers () {
       return this.$store.getters.allManufacturers
      },
    },
    methods: {
      addProduct (model) {
        model.quantity =1;
        console.log('model', model)
       this.$store.dispatch('addProduct', model)
       this.$router.push({path: '/admin'})
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
