import Vue from 'vue'
import Vuex from 'vuex'


// Import getters
import { productGetters, manufacturerGetters } from './getters'
// Import mutations
import { productMutations, cartMutations, manufacturerMutations, orderMutations } from './mutations'
// Import actions
import { productActions, manufacturerActions, orderActions } from './actions'

Vue.use(Vuex)

//create our app's state with the initial data:
export default new Vuex.Store({
    strict: true,
    state: {
        // bought items
        cart: [],

        order:{
          products:[]
        },

        quantity:[1,2,3,4,5,6,7,8,9],
        //cart count
        cartCount:0,
        // ajax loader
        showLoader: false,
        // display list or grid
        displayList: false,
        // selected product
        product: {},
        // all products
        products: [
          //  {
          //   id: 4,
          //   manId: 1,
          //   name: 'Audi lights',
          //   quantity: 1,
          //   price: 659,
          //   image: 'https://ae01.alicdn.com/kf/HTB12V7XPpXXXXX7XXXXq6xXFXXXP/for-Audi-A4-A4L-A4L-B8-LED-Tail-lights-2008-to-2012-year-car-original-replacement.jpg',
          //   description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //   Manufacturer: {
          //     id: 1,
          //     name: 'Audi'
          //   }
          // } 
          // ,
          //   {
          //     id: 2,
          //     manId: 5,
          //     name: 'Porch 911 turbo - Rear Bumber just a quick test',
          //     quantity: 1,
          //     price: 649,
          //     image: 'http://www.wickedmotorworks.com/img/7561_IMG_9253.jpg',
          //     description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //       Manufacturer: {
          //       id: 5,
          //       name: 'Porch'
          //     }
          //   },          
          //   {
          //     id: 3,
          //     manId: 5,
          //     name: 'Rear Spoiler',
          //     quantity: 1,
          //     price: 769,
          //     image: 'https://sc01.alicdn.com/kf/HTB10WViNXXXXXbNaXXXq6xXFXXXQ/201632795/HTB10WViNXXXXXbNaXXXq6xXFXXXQ.jpg',
          //     description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //       Manufacturer: {
          //       id: 1,
          //       name: 'Audi'
          //     }           
          //   },     
          //    {
          //       id: 7,
          //       manId: 1,
          //       name: 'Rear Spoiler',
          //       quantity: 1,
          //       price: 769,
          //       image: 'http://i.ebayimg.com/images/i/222513796143-0-1/s-l1000.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //         Manufacturer: {
          //         id: 1,
          //         name: 'Audi'
          //       }
          //     }, 
          //     {
          //       id: 1,
          //       manId: 2,
          //       name: 'Red Door',
          //       quantity: 1,
          //       price: 649,
          //       image: 'https://www.breakerlink.com/blog/wp-content/uploads/2016/02/door.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //         Manufacturer: {
          //         id: 2,
          //         name: 'BMW'
          //       }
          //     },
          //     {
          //       id: 6,
          //       manId: 3,
          //       name: 'Black Door',
          //       quantity: 1,
          //       price: 285,
          //       image: 'https://4.imimg.com/data4/UN/YG/MY-10679754/car-door-250x250.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed informationLets all be unique together until we realise we are all the same. She only paints with bold colors;',
          //        Manufacturer: {
          //         id: 3,
          //         name: 'Volkswagen'
          //       }
          //     },
          //     { id: 5,
          //       manId: 2,
          //       name: 'BMW Alloys',
          //       quantity: 1,
          //       price: 659,
          //       image: 'http://cdn.bmwblog.com/wp-content/uploads/BMW-wheel-cleaner-27.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //       Manufacturer: {
          //         id: 2,
          //         name: 'BMW'
          //       }        
          //       },{
          //       id: 8,
          //       manId: 1,
          //       name: 'Wing Mirrors',
          //       quantity: 1,
          //       price: 659,
          //       image: 'http://g02.a.alicdn.com/kf/HTB12g7HKpXXXXcKXXXXq6xXFXXX8/Carbon-Fiber-REPLACEMENT-Type-Auto-Car-font-b-Wing-b-font-Side-font-b-Mirror-b.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //            Manufacturer: {
          //         id: 1,
          //         name: 'Audi'
          //       }
          //     },{
          //       id: 9,
          //       manId: 1,
          //       name: 'Black Door',
          //       quantity: 1,
          //       price: 659,
          //       image: 'https://4.imimg.com/data4/UN/YG/MY-10679754/car-door-250x250.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //       Manufacturer: {
          //         id: 1,
          //         name: 'Audi'
          //       }
          //     },        {
          //       id: 10,
          //       manId: 4,
          //       name: 'Steering Wheel',
          //       quantity: 1,
          //       price: 769,
          //       image: 'https://www.carid.com/ic/bi/steering-wheels/steering-wheels_6.jpg',
          //       description: 'Lets all be unique together until we realise we are all the same. She only paints with bold colors;it was a lovely sight I want more detailed information.',
          //       Manufacturer: {
          //         id: 4,
          //         name: 'Vauxhall'
          //       }
          //   }
        ],
        // // all manufacturers
        manufacturers: [
           // {
        //         id: 1,
        //         name: 'Audi'
        //       },
        //       {
        //         id: 2,
        //         name: 'BMW'
        //       },
        //       {
        //         id: 3,
        //         name: 'Volkswagen'
        //       } ,
        //       {
        //         id: 4,
        //         name: 'Vauxhall'
        //       },
        //       {
        //         id: 5,
        //         name: 'Porch'
        // }   
       
        
        ]
    },
    mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations,orderMutations),
    getters: Object.assign({}, productGetters, manufacturerGetters),
    actions: Object.assign({}, productActions, manufacturerActions,orderActions)
})