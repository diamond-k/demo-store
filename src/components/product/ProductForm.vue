<template>
  <form @submit.prevent="saveProduct">
     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

       <h3 style="text-align: center;" v-if="!isEditing">Create Product</h3>
       <h3 style="text-align: center;" v-else>Update Product</h3>

        <div style="margin-bottom: 10px; margin-top: 10px; padding-left: 0;" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li><router-link to="/admin">View Products</router-link></li>
            <!-- <li><router-link to="/admin/new">Add New Product</router-link></li> -->
          </ul>
        </div>
        </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="form-group">
        <label class="required">Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label  class="required">Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          v-validate="'required|min_value:1'"
          min="1"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label  class="required">Make</label>
        <select
        style="min-width:53px; background-color: white; border-radius: 0;"
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          v-validate="'required'"
          name="Manufacturer"
          :class="{'form-control': true, 'error': errors.has('Manufacturer') } ">
          <template v-for="Manufacturer in manufacturers">
            <option :value="Manufacturer" :key="Manufacturer._id" :selected="Manufacturer ==(model.manufacturer && manufacture)">{{Manufacturer.name}}</option>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('Manufacturer')">Make is required</span>
      </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="form-group">
        <label  class="required">Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Image is required and must be a valid URL</span>
      </div>
      <div class="form-group">
        <label  class="required">Description</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="4"
          maxlength="255"
          v-model="model.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group new-button">
        <button class="button" id="btnForm">   
          <span v-if="isEditing"><i class="fa fa-pencil" </i> Update Product</span>
          <span v-else><i class="fa fa-plus-circle" </i> Add Product</span> 
           <!--style="background-color:#EFDBDB;">-->
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import {
    ERROR_MSG
  } from '../../store/mutation-types'

export default {
    props: ['model', 'manufacturers', 'isEditing'],
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    methods: {
      saveProduct () {
       // console.log(this.fields.valid())  
        this.$validator.validateAll().then((success) => {
          if(!success)
          {   this.$store.commit(ERROR_MSG, {
              type: 'error',
              title: 'Validation!',
              content: 'Please make sure the form is valid.'
            });
          }else{         
            this.$emit('save-product', this.model)
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
select{
       -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
         /* remove default arrow */
         background: url('../../assets/drop_down_arrow.png') 100% / 4% no-repeat #fff;  /* add custom arrow */
    }
    select::-ms-expand { 
        display: none; /* hide the default arrow in ie10 and ie11 */
    }
    
</style>
