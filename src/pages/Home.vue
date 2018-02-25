<template>
  <div>
    <div class="title">
      <!-- <h1><span class="fa fa-braille"></span> In Stock</h1> -->
      <!-- <hr> -->
       <div class="container" v-show="!showLoader">
		 	  <!-- <div class="col-xs-12">
		        <div class="btn-group pull-right hidden-xs">
                <h5>View: &nbsp;</h5>
		            <a id="list"  class="btn btn-default btn-sm" @click.prevent="changeDisplay(true)">
		            	<span class="fa fa-list"></span> 
		            </a> 
		            <a id="grid" class="btn btn-default btn-sm" @click.prevent="changeDisplay(false)">
		            	<span class="fa fa-th"></span> 
		            </a>
		        </div>
	        </div> -->
	    </div>
    </div>
    <product-list :displayList="displayList"></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  import {DISPLAY_LIST} from '../store/mutation-types'
  
  export default {
    data() {
			return {
				displayList: this.$store.state.displayList,
			}
		},
    name: 'home',
    components: {
      'product-list': ProductList
    },
    computed:{
      showLoader () {
      return this.$store.state.showLoader
      }
    },
    methods: {
			changeDisplay(isList) {
        this.displayList = isList;     
         this.$store.commit(DISPLAY_LIST,isList)
			}
		}
  }
</script>