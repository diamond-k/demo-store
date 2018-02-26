<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"  :class="{'list-group-item': displayList}" >
    <div class="product">
      <router-link :to="'/details/'+product._id" class="product-link">
        <div class="product-image-container">
          <div class="product-image">
           <img class="img-responsive" :src="product.image" alt="">
          </div>
        </div>
        <div class="product-description">
          <div class="product-info">
            <small>{{product.manufacturer.name}}</small>
            <h4 class="truncate">{{product.name}}</h4>
          <div class="product-price-cart">
            £{{product.price}}  
            </div>
          </div>
         </div>
      </router-link>
      <div class="product-action">
        <product-button :product="product" :isAdding= "true"></product-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product', 'displayList'],
    components: {
      'product-button': ProductButton
    }
  }
</script>

<style>
  .product {
    background: #FFF;
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
    padding: 15px;
    height: 366px;
    max-height: 366px;
    min-height: 366px;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }

  .col-lg-3 .col-md-4 .col-sm-6 .col-xs-12{
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
}

  .product .product-description,
  .product .product-action {
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  } 

  .product:hover .product-description {
    transform: translateY(-20px); 
  }

   .product:hover .product-action {
   transform: none; 
  }

.product-action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  }

  .product-action button {
    border-radius: 0;
    width: 100%;
    display: block;
  }

  .product-link {
    display: block;
    color: #3D3D3D;
  }

  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }

  .product .product-image {
    width:100%;
    height:100%;
  }

  .product-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* height: auto;
    width:auto; */
    max-width: 100%;
    max-height: 100%;   
     /* height: 100%; */
  }

  .product-image-container{
    height: 225px;
    /* overflow: hidden; */
  }

  .product-description {
    width: 100%;
    display: flex;
    padding: 20px 0px 15px;
    background: #FFF;
  }

  .product-info {
    flex: 2;
  }

  .product-description small {
    color: #808080;
  }

  .product-description h4 {
    font-size: 16px; 
    margin: 3px 0 5px 0;
    overflow: hidden;
    height: 20px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .product-price-cart {
    flex: 1;
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }

  .product-price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }

/* List grid */
  
 .list-group-item {
        border: none;
        float: none;
        width: 100%;
        background-color: #fff;
        margin-bottom: 10px;
    }

.list-group-item .product-image img{
    float: left;
  }

  .list-group-item  .product-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 125px;
  }

.list-group-item.col-lg-3.col-md-4.col-sm-6.col-xs-12{
    padding-left: 0;
    padding-right: 0;
}

 .list-group-item .product-description {
    padding-top: 30px;
  }

  .list-group-item  .product-description small {
    color: #808080;
  }

 .list-group-item  .product-description h3 {
    margin: 5px 0 30px 0;
  }

 .list-group-item  .product-price-cart {
    display: flex;
    padding-top: 30px;
  }
</style>
