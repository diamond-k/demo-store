<template>
  <div class="container">      
     <div class="order-summary" style="padding-top: 30px; border:none; margin-left: 30px;">
      <h2>Shipping Address</h2>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12" style="margin-top: 10px;">
      <div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
      <div class="form-group">
        <label class="required">First name
        </label>
        <input
          type="text"
          v-validate="'required'"
           placeholder="First name"
          name="firstName"
          v-model="model.firstName"
          :class="{'form-control': true, 'error': errors.has('firstName') }" />
          <div>
        <span class="small text-danger"><p v-show="errors.has('firstName')">Please enter a first name</p></span>
        </div>
      </div>
       <div class="form-group">
        <label class="required">Address line 1
        </label>
        <input
          type="text"
          v-validate="'required'"
           placeholder="Street address"
          name="AddressOne"
           v-model="model.AddressOne"
          :class="{'form-control': true, 'error': errors.has('AddressOne') }" />
        <span class="small text-danger"><p v-show="errors.has('AddressOne')">Please enter an address</p>
        </span>
      </div>
      <div class="form-group">
        <label class="required">Town or City</label>
        <input
          type="text"
          class="form-control"
          placeholder="Town/city"
          v-validate="'required'"
           maxlength="150" 
          name="TownOrCity"
           v-model="model.TownOrCity"
          :class="{'form-control': true, 'error': errors.has('TownOrCity') }" />
        <span class="small text-danger"><p v-show="errors.has('TownOrCity')">Please enter a town or city</p></span>
      </div>
         </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="form-group">
        <label class="required">Last name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          v-validate="'required'"
           maxlength="150" 
          name="lastName"
          v-model="model.lastName"
          :class="{'form-control': true, 'error': errors.has('lastName') }" />
        <span class="small text-danger"><p v-show="errors.has('lastName')">Please enter a last name</p></span>
      </div>
       <div class="form-group">
        <label>Address line 2
        </label>
        <input
          type="text"
           v-model="model.AddressTwo"
            placeholder="Flat No. / House name"
          name="AddressTwo"
          :class="{'form-control': true }" />
      </div>
      <div class="form-group">
        <label class="required">Postcode</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your postcode"
          v-validate="'required'"
          name="Postcode"
           v-model="model.Postcode"
          :class="{'form-control': true, 'error': errors.has('Postcode') }" />
        <span class="small text-danger"><p v-show="errors.has('Postcode')">Please enter a postcode</p></span>
      </div>
      </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="order-summary" >
      <h2>Delivery</h2>
    </div>
     <h2 class="deliveryOptions">Choose delivery method</h2>
     <ul class="del" >
       <li class="radio-option ng-scope delInfo">
        <input type="radio"  v-model="model.delivery" id="radio-0" value="standard" checked name="delivery" class="christ">
        <label for="radio-0" class="option">
        <span class="value">
          <span class="delivery">Standard delivery</span>
          <span class="info">2-5 days</span>
       </span>
       <strong>Free</strong>
      </label>
     </li>
       <!-- <li class="radio-option ng-scope delInfo">
    <input type="radio" id="radio-0" class="christ" disabled>
    <label for="radio-0" class="option">
        <span class="value">
          <span class="delivery">Next Day Delivery</span>
          <span class="info">1 day</span>
       </span>
       <strong>£5.99</strong>
     </label>
     </li> -->    
     </ul>
    </div>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
   <div class="order-summary" >
        <h2>Payment method</h2>
     </div> 
     <h2 class="deliveryOptions">Choose payment method</h2>

      <ul class="radio-option-list" id="payment-preferences">
        <li class="radio-option ng-scope delInfo">
          <input class="christ" v-model="model.payment" type="radio" name="payment" value="Card" checked>
          <label for="paymentMode-0" class="option">
            <span class="value">
              <span >Card </span>
            </span>
            <span style="float:right">Credit/Debit Card</span>
          </label>
        </li>
        <li style="border-top:none; margin-bottom:20px;" class="radio-option ng-scope delInfo"  id="payment-option-1">
          <input class="christ" v-model="model.payment" type="radio" name="payment" value="PayPal" disabled>
          <label for="paymentMode-1" class="option">
            <span class="value">
              <span >PayPal</span>
            </span>
          </label>
        </li>        
      </ul>
        </div>
      <div class="radio-option-content">
      <div >
  <div class="inputwrapper">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <div class="form-group">
        <label class="required">First name
        </label>
        <input
          type="text"
          v-validate="'required'"
           placeholder="First name (as written on card)"
          name="firstName2"
           maxlength="150" 
           v-model="model.firstName2" 
          :class="{'form-control': true, 'error': errors.has('firstName2') }" />
          <div>
        <span class="small text-danger"><p v-show="errors.has('firstName2')">Please enter a first name</p></span>
        </div>
      </div>
         <div class="form-group">
        <label class="required">Card number</label>
        <input
          class="form-control"
          placeholder="Card number"
          v-validate="'required'"
          name="cardNumber"
           type="tel"
            id="txt-card-number"
           inputmode="numeric"
            pattern="[0-9]*" 
            v-model="model.cardNumber" 
           data-validation-creditcard="true"
          :class="{'form-control': true, 'error': errors.has('cardNumber') }" />
        <span class="small text-danger"><p v-show="errors.has('cardNumber')">Please enter card number</p></span>
      </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div class="form-group">
        <label class="required">Last name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Last name (as written on card)"
          v-validate="'required'"
          name="lastName2"
          v-model="model.lastName2" 
           maxlength="150" 
          :class="{'form-control': true, 'error': errors.has('lastName2') }" />
        <span class="small text-danger"><p v-show="errors.has('lastName2')">Please enter a last name</p></span>
      </div>
      <div>
       <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-6" style="padding:0;">
         <input name="month_limit" :value="month" type="hidden">
         <input name="year_limit" :value="year" type="hidden">
        <label class="required">Expiry date</label>
        <div class="merged-inputs" :class="{'error': errors.has('yyyy')|| errors.has('mm')}">
         <input style="-webkit-box-shadow: none; box-shadow: none; padding:0;width: 30px;"
          placeholder="mm"
          v-validate="'required|after:month_limit|date_format:MM'"
          maxlength="2"
          name="mm"
          type="numeric" 
          v-model="model.mm" 
          id="txt-card-number"
          :class="{'form-control': true, 'error': errors.has('mm') }"     
          class="form-control text-input">
        <span class="divider"> / </span>
        <input  maxlength="4" style="-webkit-box-shadow: none; box-shadow: none;padding: 0 0 0 5px;"
          class="form-control" 
          pattern="[0-9]*"
          v-validate="'required|after:year_limit|date_format:YYYY'"
          name="yyyy"
          type="numeric" 
          v-model="model.yyyy"
          :class="{'form-control': true, 'error': errors.has('yyyy') }"
          id="ddl-card-expiry-year" 
          placeholder="yyyy"
          data-validation-required="true">
      </div>
       <span class="small text-danger"><p v-show="errors.has('mm') || errors.has('yyyy')">Please enter card expiry date</p></span>
      </div> 
    <div class="inputwrapper col-lg-6 col-md-6 col-sm-6 col-xs-6" style="padding-right: 0;">
    <div class="input-column">
      <label class="required">CVV</label>
      <input 
        type="password"  
        id="card_cvn" 
        name="cvv"
        v-model="model.cvv"
        class="form-control" 
        inputmode="numeric" 
        pattern="[0-9]*" 
        maxlength="3"
        size="5" 
        :class="{'form-control': true, 'error': errors.has('cvv') }"
        v-validate="'required'">
        <span class="small text-danger"><p v-show="errors.has('cvv')">Please enter the CVV number of your card</p></span>
    </div>
    </div>
  </div>     
  </div>
  </div>
  </div>  
 </div> 
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="order-summary" >
      <h2>Order Details</h2>
    </div>   
		<table id="cart" style="margin-top:20px; " class="table table-condensed">
			<thead class="hidden-xs"  >
				<tr>
					<th style="width:70%">Product</th>  
					<th style="width:10%">Price</th>
          <th style="width:10%; text-align: center;">Quantity</th>	
				</tr>
			</thead>
			  <template v-for="product in cart">
          <cart-item :product="product" :key="product.id" :isCheckout="true"></cart-item>
        </template>
    </table>
    <div>
    </div>
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
      <button style="width: 100%; margin-top:10px;" @click="placeOrder" class="button"> Place Order</button>
    </div>
     <div class="ac-card">
      <h2 style="width: 100%;
                font-weight: bold; 
                padding: 0 0 5px;
                margin-bottom: 12px;
                font-size: 14px;
                text-transform: capitalize; 
                display: flex; ">
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
</template>

<script>
  import CartItem from '../components/CartItem'
  import {ERROR_MSG} from '../store/mutation-types'
  export default {
    data () {
      return {
        model: {
           delivery : 'standard',
           payment: 'Card',
           firstName: 'Katanya',
           lastName: 'Frankson',
           AddressOne: '66 chartwell road',
           TownOrCity: 'Kirkby in ashfield',
           Postcode:'Ng17 7hz',
           mm: '09',
           yyyy:'2018',
           cvv:'123',
           lastName2: 'Frankson',
           firstName2: 'Katanya',
           cardNumber:'12345677'
        },
        cart: this.$store.state.cart,      
        year: new Date().getFullYear() - 1,
        month: ("0" + ( new Date().getMonth() + 1))
      }
    },
    components: {
      'cart-item': CartItem
    },
    computed: {
      totalValue() {
	      let res = 0;
		    this.cart.map((item, idx) => {
		    res += (item.price * item.quantity );
	      });
          return res;
        },
      },
      methods: {
        placeOrder() {
        console.log('cart', this.cart)
        //  this.$router.push({path: '/checkOut'})
        this.model.products = this.cart
        this.model.totalPrice = this.totalValue

         console.log('cart',  this.model)
          this.$validator.validateAll().then((success) => {
          if(!success)
          {   this.$store.commit(ERROR_MSG, {
              type: 'error',
              title: 'Validation!',
              content: 'Please make sure the form is valid.'
            });
          }else{         
            // this.$emit('save-product', this.model)
            //send order to db
            this.$store.dispatch('createOrder', this.model) 
            //send email to customer
            alert("Your order has been placed. Thank you!")
            this.$router.push({name: 'Home', path: '/'})
          }
        }).catch( (error) => {
              this.$store.commit(ERROR_MSG, {
              type: 'error',
              title: 'Error!',
              content: 'Whoops, looks like something went wrong there.'
            });   
        });
       } 
     }
  }
</script>

<style scoped>
.input-column .merged-inputs {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
}

.merged-inputs.error {
    border-color: #FF3333;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 71, 71, 0.6);
}
.merged-inputs {
    border: 1px solid #ccc;
    display: flex;
    position: relative;
    padding-left: 11px;
    padding-right: 25px;
    border: 1px solid #ccc;
    height: 34px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out .15s, 
}
.checkOut{
      padding-top:30px;
}
.christ {
    margin: 0 10px 0 0;
    cursor: pointer;
    }

  .delInfo{
    border: 1px solid #ddd;
    padding-left: 10px;
    padding-right: 10px;
  }
  
.del{
  padding-left: 0;
  padding-right: 0;
}
.input-column .merged-inputs .divider {
    padding: 11px 3px;
}
.input-rows .inputwrapper:last-child {
    margin-bottom: 20px;
}

label{
    color: grey;
}

.input-rows .inputwrapper {
    /* display: inline-block; */
    letter-spacing: 0;
    vertical-align: top;
    padding-right: 20px;
    width: 50%;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0;
}
.inputwrapper .merged-inputs input[type=text], .inputwrapper .merged-inputs input[type=numeric] {
    border: 0 none;
    background: transparent;
}


.input-column .merged-inputs input:last-child {
    flex-grow: 100;
    padding-right: 11px;
}

.responsive .merged-inputs input[type=text], .responsive .merged-inputs input[type=numeric] {
    padding-left: 0;
    padding-right: 0;
}
.divider {
    display: inline-block;
    position: relative;
    z-index: 1;
    overflow: visible;
    background-color: transparent;
    color: #707070;
    padding-top: 11px;
    padding-bottom: 11px;
}
.table>thead>tr>th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: middle;
    border-top: 1px dotted #e5e5e5;
    border-bottom: 1px dotted #e5e5e5;
}

.deliveryOptions{
    font-size: 12px;
    text-align: left;
    /* border-bottom: 1px solid #ddd; */
    margin-bottom: 10px;
    padding-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.33333;
}

.option{
     padding: 15px 0;
    /* cursor: pointer; */
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    -o-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
}
.radio-option{    
  position: relative;
    margin: 0;
    z-index: 0;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;}
.value{
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    -ms-flex-align: center;
        -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    -o-flex: 1;
    flex: 1;
    
}
.info{
      display: block;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    -o-flex: 1;
    flex: 1;
}

.delivery{
      display: block;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    -o-flex: 1;
    flex: 1;
    
}
</style>

