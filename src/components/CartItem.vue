<template>
	<tr>
		<td data-th="Product" class="hidden-lg hidden-md hidden-sm" :class="{'checkout': isCheckout}" >
			<div class="row" style="margin-bottom:5px;">
				<div class="col-xs-6 col-sm-4">
				   <img class="img-responsive" :src="product.image" alt="">
				</div>
                <div class="col-xs-6 col-sm-4">
					<h5 class="nomargin">{{ product.name }}</h5>        
                    <p style="margin-top:10px;">£{{product.price}}</p>        
                </div>
                 <div class="col-xs-3 col-sm-4">
                <select v-if="!isCheckout" @change="updateQuantity" style="min-width:53px;" class="form-control text-center selectionImage">
                    <template v-for="q in quantity">
                        <option :value="q" :key="q" :selected="q == product.quantity"> {{q}}</option>       
                    </template>
                </select>
                <p v-else>{{product.quantity}}</p>
                </div>
                 <div class="col-xs-3 col-sm-4" v-show="!isCheckout">
                     <product-button :product="product" :isAdding= "false"></product-button>							            
                </div>     
                <!-- <div class="col-xs-6 col-sm-4">
                     <p style="text-align:left; margin: 5px 0px;">Total: £{{ subtotal }}</p>
                </div> -->
		    </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8">
					<p>{{ product.description }}</p>  
				</div>
            </div>
		</td>

        <td data-th="Product" class="hidden-xs" :class="{'checkout': isCheckout}" >
            <div class="row">
                <div class="col-md-3 col-sm-4">
                 <img class="img-responsive" :src="product.image" alt="">
                    </div>
                <div class="col-md-9  col-sm-8">
                <small>{{product.Manufacturer && product.Manufacturer.name}}</small>
                    <h4 class="nomargin">{{ product.name }}</h4>
                    <p>{{ product.description }}</p>
                </div>
            </div>
        </td>

        <td data-th="Price" class="hidden-xs":class="{'checkout': isCheckout}">£{{product.price}}</td>
      
        <td data-th="Quantity" class="hidden-xs":class="{'checkout': isCheckout}">
            <div class="col-xs-3 col-sm-4">
                <select v-if="!isCheckout" @change="updateQuantity" style="min-width:53px; background-position:95%/35%; background-color: white; border-radius: 0;" class="form-control">
                    <template v-for="q in quantity">
                        <option :value="q" :key="q" :selected="q == product.quantity"><span>{{q}}</span></option>       
                    </template>
                </select>
                <p v-else>{{product.quantity}}</p>
            </div>
        </td>
        <!-- <td data-th="Subtotal" class="text-center hidden-xs">£{{ subtotal }}</td> -->
        <td class="actions hidden-xs" v-show="!isCheckout" :class="{'checkout': isCheckout}" data-th="" >
            <!-- <button class="btn btn-danger btn-sm" @click="removeItem"><i class="fa fa-trash-o"></i></button>-->
            <product-button :product="product" :isAdding= "false"></product-button>                            
        </td>    
	</tr>
</template>

<script>
 import ProductButton from '../components/product/ProductButton.vue'
 import { UPDATE_CART} from '../store/mutation-types'

export default {
    props: ['product','isCheckout'],
    components: {
      'product-button': ProductButton
    },
    data () {
      return {
        quantity: this.$store.state.quantity
      }
    },
    computed: {
        subtotal() {
            return this.product.quantity * this.product.price;
        },
    },
    methods: {
			// ...mapActions(['updateCart', 'removeItemInCart']),
			// removeItem() {
			// 	let vm = this;
			// 	this.removeItemInCart({
			// 		item: vm.cartItem
			// 	});
			// },
			updateQuantity(event) {
                let vm = this;
                
				this.$store.commit(UPDATE_CART,{
					item: vm.product,
					quantity: parseInt(event.target.value),
					isAdd: false
				});
			}
        }
  }
  
</script>

<style  scoped>
select{

    -webkit-appearance: none;
    -moz-appearance: none;
        -ms-appearance: none;
    -o-appearance: none;
     /* remove default arrow */
     background: url('../assets/drop_down_arrow.png') 95%/35%  no-repeat #eee;  /* add custom arrow */
}
select::-ms-expand { 
    display: none; /* hide the default arrow in ie10 and ie11 */
}

.checkout{
     padding: 8px;
    line-height: 1.42857143;
    vertical-align: middle;
     border-top: 1px dotted #e5e5e5;
    border-bottom: 1px dotted #e5e5e5;
}

</style>
