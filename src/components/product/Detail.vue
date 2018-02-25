<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details-image">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details-info">
          <div class="product-details-description">
            <!-- <small>{{product.Manufacturer && product.Manufacturer.name}}</small> -->
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['product'],
  
  }
</script>

<style>
  .product-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }

  .product-details-image {

  }

  .product-details-description {
    padding-top: 30px;
  }

  .product-details-description small {
    color: #808080;
  }

  .product-details-description h3 {
    margin: 5px 0 30px 0;
  }

  .product-details-price-cart {
    display: flex;
    padding-top: 30px;
  }

  .product-details-price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }
</style>