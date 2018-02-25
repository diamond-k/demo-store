import axios from 'axios'
import { API_BASE } from '../config'

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    ADD_ORDER_SUCCESS,
    ADD_ORDER
} from './mutation-types'

export const orderActions = {
    createOrder({ commit }, payload) {
        commit(ADD_ORDER)
            // Create a new order via API
        axios.post(`${API_BASE}/orders`, payload).then(res => {
           commit(ADD_ORDER_SUCCESS,res.data)
        })
    }
}

export const productActions = {
    allProducts({ commit }) {
        commit(ALL_PRODUCTS)
            // Fetch actual products from the API
        axios.get(`${API_BASE}/products`).then(res => {
           commit(ALL_PRODUCTS_SUCCESS, res.data)
        })
    },
    productById({ commit }, payload) {
        commit(PRODUCT_BY_ID)
            // Fetch product by ID from API
       axios.get(`${API_BASE}/products/${payload}`).then(res => {
           commit(PRODUCT_BY_ID_SUCCESS, res.data)
        })
    
    },
    addProduct({ commit }, payload) {
        commit(ADD_PRODUCT)
            // Create a new product via API
        axios.post(`${API_BASE}/products`, payload).then(res => {
           commit(ADD_PRODUCT_SUCCESS, res.data)
        })
    },
    updateProduct({ commit }, payload) {
        commit(UPDATE_PRODUCT)
            //Update product via API
        axios.put(`${API_BASE}/products/${payload._id}`, payload).then(res => {
            commit(UPDATE_PRODUCT_SUCCESS, res.data)
    })
    },
    removeProduct({ commit }, payload) {
        commit(REMOVE_PRODUCT)
          //  Delete product via API
        axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_PRODUCT_SUCCESS,payload)
        })
    }
}

export const manufacturerActions = {
    allManufacturers({ commit }) {
        commit(ALL_MANUFACTURERS)
            // Fetch all manufacturers via API
        axios.get(`${API_BASE}/manufacturers`).then(response => {
        commit(ALL_MANUFACTURERS_SUCCESS, response.data)
        })
    }
}