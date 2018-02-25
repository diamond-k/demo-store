<template>
  <div v-if="cart.length > 0">
    <div class="cart">
      <h3>Shopping basket</h3>
    </div>
    <div class="container">
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
		<table id="cart" style="margin-top:20px; " class="table table-hover table-condensed">
			<thead class="hidden-xs">
				<tr>
					<th style="width:70%">Product</th>  
					<th style="width:10%">Price</th>
          <th style="width:10%; text-align: center;">Quantity</th>	
          <!-- <th style="width:10%; text-align: center;">Total</th>	 -->
					<!-- <th style="width:22%" class="text-center">Subtotal</th> -->
					<th style="width:10%"></th>
				</tr>
			</thead>
			<transition-group name="list-shopping-cart" tag="tbody">
			  <template v-for="product in cart">
          <cart-item :product="product" :key="product._id" :isCheckout="false"></cart-item>
        </template>
			</transition-group>
    </table>
    <div>
    </div>
    </div>
     <div style="margin-bottom: 10px; margin-top: 8px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;" 
     class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
    <div class="order-summary">
        <h2>Order Summary</h2>
    </div>
    <div>
      <div>
        <strong><p class="col-md-6 col-xs-6 col-lg-6 col-sm-6" style="padding-left:0; text-align:left; ">
          DELIVERY:
          </p></strong>
         <strong><p class="col-md-6 col-xs-6 col-lg-6 col-sm-6" style="padding-right:0; text-align:right;">
          FREE
       </p></strong>
      </div>	
      <div>
       <strong> <p class="col-md-6 col-xs-6 col-lg-6 col-sm-6" style="padding-left:0; text-align:left;">
        TOTAL:
        </p>
      </strong>
      <strong>
         <p class="col-md-6 col-xs-6 col-lg-6 col-sm-6" style="padding-right:0; text-align:right;"> 
           £{{totalValue}}
        </p>
        </strong>
       </div>
    </div>
    <div>
         <button style="width: 100%; margin-top:10px;" @click="checkout" class="button"> Continue to checkout</button>
    </div>
      <div class="ac-card">
      <h2 style="width: 100%;font-weight: bold; padding: 0 0 5px;margin-bottom: 12px;font-size: 14px;text-transform: capitalize; display: flex; ">
        We Accept</h2>
        <div class="card-img">
          <img src="//sheinsz.ltwebstatic.com/image/card/n-1-paypal_va336d76.png?v=shein_602">
          <img src="//sheinsz.ltwebstatic.com/image/card/n-2-visa_vd35286a.png?v=shein_602">
          <img src="//sheinsz.ltwebstatic.com/image/card/n-3-mastercard_vf9b0f97.png?v=shein_602">
          <img src="//sheinsz.ltwebstatic.com/image/card/n-7-american-express_vb186b55.png?v=shein_602">
      </div>
      </div>      
    </div>
  </div>
  </div>
  <div v-else class="cart"><h3>Your shopping basket is Empty</h3></div>
</template>

<script>
  import CartItem from '../components/CartItem'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      'cart-item': CartItem
    },
    computed: {
      orderValue() {
				let res = 0;
				this.cart.map((item, idx) => {
					res += (item.price * item.quantity );
				});
          return res;
        },
      totalValue() {
				let res = 0;
				this.cart.map((item, idx) => {
					res += (item.price * item.quantity );
				});
          return res + 0;//delivery price
        },
      },
      methods: {
        checkout() {
          console.log('cart', this.cart)
          this.$router.push({path: '/checkout'})
          // alert("Lets party!!!! :P")
       } 
     }
  }
</script>

<style scoped>

.table {
    max-width: 100%;
    width:auto;
    margin-bottom: 20px;
}
	.list-shopping-cart-leave-active {
	  transition: all 0.5s;
	}
	.list-shopping-cart-leave-to {
	  opacity: 0;
	  transform: translateX(50px);
	}

</style>

