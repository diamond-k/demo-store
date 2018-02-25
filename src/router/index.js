import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';
import Details from '@/pages/Details';
import AdminDetail from '@/pages/AdminDetail';
import Register from '@/pages/authentication/Register.vue';
import SignIn from '@/pages/authentication/SignIn.vue';
import CheckOut from '@/pages/Checkout';
// Admin Components
import Index from '@/pages/admin/Index.vue'
import New from '@/pages/admin/New.vue'
import Products from '@/pages/admin/Products.vue'
import Edit from '@/pages/admin/Edit.vue'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: Details,
            props: true 
        },
        {
            path: '/adminDetail/:id',
            name: 'AdminDetail',
            component: AdminDetail,
        },        
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/signIn',
            name: 'SignIn',
            component: SignIn
        },
        {
            path:'/checkout',
            name:'CheckOut',
            component: CheckOut
        },
        {
            path: '/admin',
            name: 'Admin',
            // Parent routes still have a component
            component: Index,

            // Child routes
            children: [{
                    path: 'new',
                    name: 'New',
                    component: New
                },
                {
                    path: '',
                    name: 'Products',
                    component: Products
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: Edit
                }
            ]
        }
    ]
});