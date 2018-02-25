<template>
  <div id="app">
    <!-- style="background: rgba(0, 0, 0, 0.75);" -->
     <!-- <register/> -->
     <!-- <sign-in /> -->
   <!-- navbar-fixed-top -->
    <nav class="navbar ">
       <div class="container">
      <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button> 
       <!-- <router-link class="navbar-brand" style="margin-top: 15px; margin-left: 10px; color: rgb(121, 124, 189); margin-right: 10px; font-size:20px" to="/"> Website Logo</router-link>  -->
    <router-link class="navbar-brand" style=" text-transform: uppercase; margin-top: 15px; margin-left: 10px; color: #3d3d3d; margin-right: 10px; font-size:20px" to="/"> 
    Website Logo</router-link> 
      </div>
  
     <div class="collapse navbar-collapse" id="myNavbar">
      <!-- <div class="">     -->
        <ul class="nav navbar-nav navbar-left">
          <!-- <li><router-link style="color: rgb(155, 50, 535);" class="navbar-brand" to="/"> WebSite Logo</router-link></li> -->
          <!-- <li><router-link  to="/"><span class="fa fa-home"></span> Store</router-link></li> -->   
        </ul>
        <ul class="nav navbar-nav navbar-right">      
        <li>
            <!-- <span> Hello. -->
              <!-- style="color: #EFDB06;" -->
              <!-- @click="$modal.show('sign-in')" -->
             <router-link to="/signIn" class="sign-in" style="padding-right:10px;"> Log In</router-link>
             <!-- @click="$modal.show('register')" -->
             <router-link to="/register"  class="register"> Register</router-link>
            <!-- </span> -->
          </li> 
           <li><router-link id="adminLink"  to="/admin"><span style="font-size:16px;" class="fa fa-user"></span> Admin</router-link></li>
          <li><router-link id="cartLink" to="/cart"><span style="font-size:16px;" class="fa fa-shopping-cart"></span>Shopping basket ({{cartItemsCount}})</router-link></li>
          </ul>
      <!-- </div>   -->
    </div>
  </div>  
  </nav>
 <div style="border-bottom:1px solid #F0F0F2"></div>

    <transition name="fade">
      <!--Route Outlet-->
      <router-view></router-view>
    </transition>
    
     <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
         <beat-loader  :color="color" :size="size"></beat-loader>
      </div> 
    </div>  
  </div>
</template>

<script>
import toastr from 'toastr'
import beatLoader from 'vue-spinner/src/BeatLoader.vue';
import register from './pages/authentication/Register.vue';
import signIn from './pages/authentication/SignIn.vue' ;
import {
  ERROR_MSG,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART
} from './store/mutation-types'

export default {
  name: 'app',
   data () {
    return {
      color: "rgb(239, 219, 6)",
      size: "10px",
    }
  },
   created () {
    // Subscriptions for mutation  
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
             toastr.error(mutation.payload.content, mutation.payload.title)
          break
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
          case ADD_TO_CART:
            toastr.success('Item added to basket', 'Success!')
            break
        }
      }
    })
  },
  components: {
    beatLoader,
    register,
    signIn
  },
  computed: {
    cartItemsCount () {
      // Cart count
      return this.$store.state.cartCount
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
}
</script>

<style>
 /* #app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  color:#EFDB06;
}*/


.fade-enter-active, .fade-leave-active {
  transition-property:opacity; 
  transition-duration:.5s;
}
/*transition-property: one or more properties, or "all", to transition
transition-duration: amount of time the transition should take to complete (ex: 2s or 0.5s)
transition-delay: delay before starting the transition*/

.fade-enter-active {
  transition-delay:.5s;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity:0
}

.navbar-brand {
    float: left;
    height: 0;
    padding: 0;
    font-size: 18px;
    line-height: 20px;
}

/* .navbar-brand:hover{
    background: rgb(239, 219, 6);
    color:#fff;
} */
/*Transition Classes

There are six classes applied for enter/leave transitions.
v-enter: Starting state for enter. Added before element is inserted, removed one frame after element is inserted.
v-enter-active: Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.
v-enter-to: Only available in versions 2.1.8+. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.
v-leave: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
v-leave-active: Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.
v-leave-to: Only available in versions 2.1.8+. Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.*/ 
  .overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-spinner {
    position : absolute;
    top      : 50%;
    left     : 50%;
    -webkit-transform : translateX(-50%) translateY(-50%);
    -moz-transform : translateX(-50%) translateY(-50%);
    transform : translateX(-50%) translateY(-50%);
  }

  /* .dot {
    background    : black;
    border-radius : 100%;
    color         : white;
    height        : 8px;
    line-height   : 8px;
    text-align    : center;
    width         : 8px;
  }

  .dotOne {
    -webkit-animation : dotOneKeyframes 5s ease  infinite;
    background        : #F9E610;
    position          : absolute;
    top               : 0;
    left              : 0;
  }

  .dotTwo {
    -webkit-animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
    background        : #EFDB06;
    position          : absolute;
    top               : 0;
    left              : 14px;
  }

  .dotThree {
    -webkit-animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
    background        : #DBC906;
    position          : absolute;
    top               : 14px;
    left              : 14px;
  }

  @-webkit-keyframes dotOneKeyframes {
    0% {
      top  : 0;
      left : 0;
    }
    8.3333333333% {
      top  : 14px;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 14px;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 14px;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 14px;
    }
    58.3333333333% {
      top  : 0;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 0;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 0;
    }
    91.6666666666% {

    }
    100% {

    }
  }


  @-webkit-keyframes dotTwoKeyframes {
    0% {
      top  : 0;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }

  @-webkit-keyframes dotThreeKeyframes {
    0% {
      top  : 14px;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 14px;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 14px;
    }
    33.3333333333% {
      top  : 0;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 0;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 0;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 0;
    }
    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  } */

</style>
