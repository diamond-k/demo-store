=<template>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 style="text-align: center;">Products</h3>
        <div style="margin-bottom: 10px; margin-top: 10px; padding-left: 0;" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <!-- <li><router-link to="/admin">View Products</router-link></li> -->
            <li><router-link to="/admin/new">Add New Product</router-link></li>
          </ul>
        </div>
          <table style="vertical-align: middle;" class="table ">
            <thead>
            <tr>
              <th class="col-sm-2 hidden-xs">Product</th>
              <th style="width:25%">Name</th>
              <th>Price</th>
              <th style="width:10%">Make</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product._id">
              <td class="col-sm-2 hidden-xs"><router-link :to="'/adminDetail/'+product._id"><img class="img-responsive" :src="product.image" alt=""></router-link></td>
              <td>{{product.name}}</td>
              <td>£{{product.price}}</td>
              <td>{{product.manufacturer.name}}</td>
              <td><router-link style="background: transparent;" :to="'/admin/edit/'+product._id"><i class="fa fa-pencil-square-o editProduct"></i></router-link></td>
              <td><a style="background: transparent;" @click="deleteProduct(product._id)"><i class="fa fa-trash deleteProduct"></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>

  export default {
    data () {
      return {
}
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    methods: {
      deleteProduct (id) {
        console.log(id)
        this.$store.dispatch('removeProduct', id)
      }
    },
  }
</script>
