<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <!-- Outlet for children routes -->
         <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
  .admin-menu a {
    display: block;
    
    /*#EFDBF0; #EFDBDB; #EFDB06; */
    /* background:#EFDB06;
    border: 1px solid #F9E610;
    color: #3D3D3D; */

    /* background: #0d0d0d;
    border: 1px solid #0d0d0d;*/
    background:rgb(13, 13, 13);  /* #3d3d3d; */
    border: 1px solid #3d3d3d;
    color:#fff; 
   
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }

  .admin-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.04);
    /* background-color: #555;
    border-color: #555;
    color: #fff; */
  }

  .admin-new, .admin-products {
    border-bottom: 1px solid #F0F0F2;
    padding: 30px 0;
    /* margin-top:50px; */
  }
  .fade-enter-active, .fade-leave-active {
  transition-property:opacity; 
  transition-duration:.5s;
}

.fade-enter-active {
  transition-delay:.5s;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity:0
}

</style>
