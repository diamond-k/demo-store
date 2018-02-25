import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    ERROR_MSG,
    DISPLAY_LIST,
    ADD_ORDER_SUCCESS,
    ADD_ORDER
    
} from './mutation-types'

// Constant imports ...
export const productMutations = {
    [DISPLAY_LIST](state, payload){
        // display list or grid 
        state.displayList = payload
    },
    [ALL_PRODUCTS](state) {
        // Called when fetching products
        state.showLoader = true
    },
    [ALL_PRODUCTS_SUCCESS](state, payload) {
        // Called when products have been fetched
        state.showLoader = false
        // Updates state products
        state.products = payload
    },
    [PRODUCT_BY_ID](state) {
        // Called when fetching products by ID
        state.showLoader = true
    },
    [PRODUCT_BY_ID_SUCCESS](state, payload) {
        // Called when product is fetched
        state.showLoader = false
            // Updates state product
        state.product = payload
    },
    [ADD_PRODUCT]: (state, payload) => {
        state.showLoader = true
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false
        // payload._id = state.products.length + 1
        // payload.quantity = 1
        // payload = {...payload, Manufacturer: state.manufacturers.filter(x => x._id === payload.Manufacturer.id)[0] }
        
       
        // state.products.push(payload)
        state.products.unshift(payload)
    },
    [UPDATE_PRODUCT]: (state, payload) => {
        state.showLoader = true
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
       
        state.showLoader = false
        state.products = state.products.map(p => {
            // if current product (payload) match item in product list, update product
            if (p._id === payload._id) {
                payload = {...payload, Manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer._id)[0] }
                return payload              
            }
            return p
        })
    },
    [REMOVE_PRODUCT]: (state, payload) => {
        state.showLoader = true
    },
    [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false
        const index = state.products.findIndex(p => p._id === payload)
        console.debug('index', index)
        state.products.splice(index, 1)     

        const product = state.cart.find(p => p._id == payload);
        if(product){
           state.cartCount -= product.quantity;
         }        
       
       state.cart.splice(index,1)
    },
    [ERROR_MSG] (state, payload) 
    {

    }
}

export const cartMutations = {
    //The unshift() method adds one or more elements to the beginning 
    //of an array and returns the new length of the array.
    [ADD_TO_CART](state, payload) {
     const product = state.cart.find(p => p._id == payload._id);
     if(product){
        
        product.quantity += 1 
        state.cartCount += 1
     }
     else{
        // state.cart.unshift(payload) 
        state.cart.push(payload)
        state.cartCount += 1
     }
    },
    [UPDATE_CART] (state, 
        {item, quantity, isAdd}) 
    {
		const record = state.cart.find(p => p._id == item._id);
		if (record) {
			if (isAdd) {
                record.quantity += quantity;
			} else {
                
                var difference = Math.abs(record.quantity - quantity)
                
                if(record.quantity < quantity)
                {
                    state.cartCount += difference
                }
                else{
                    state.cartCount -= difference
                }
				record.quantity = quantity;
			}
		} else {
			state.cart.push({...item,
				quantity
            });
        }
    },
    
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p._id === payload._id)
        state.cart.splice(index, 1)
        state.cartCount -= payload.quantity
        console.log(state.cart, state.cart.length, index)
    }
}

export const manufacturerMutations = {
    [ALL_MANUFACTURERS](state) {
        state.showLoader = true
    },
    [ALL_MANUFACTURERS_SUCCESS](state, payload) {
        state.showLoader = false
        state.manufacturers = payload
    }
}

export const orderMutations = {
    [ADD_ORDER](state) {
        state.showLoader = true
    },
    [ADD_ORDER_SUCCESS](state, data) {
        state.showLoader = false
        state.cartCount = 0
        state.cart = []
    }
}