<template> 
<!-- <transition name="pop-out"> -->
 <!-- <modal name="register"  :width="modalWidth" :height="400"> -->
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
     <form id="register-form" role="form" autocomplete="false">
        <h3 class="text-center">Register</h3>
          <input type="text" name="userName" id="userName" class="form-control" placeholder="User Name" value=""
          v-model="userName">    
          <input type="email" name="email" id="email" class="form-control" placeholder="Email Address" value=""
          v-model="email">     
          <input type="password" name="password" id="password" class="form-control" placeholder="Password"
          v-model="password">

          <button class="button" style="width: 100%;margin-top: 10px; color:#fff;font-size: 14px;" @click.prevent="register"><i class="fa fa-user-plus"></i> Create Account</button>
         
          <div>
            <div class="center" style="margin-top:10px">
              <p class="inline">Already have an account?</p>
              <router-link class="inline" to="/signIn"> Log in</router-link>
            </div>  
          </div>
      </form>
    </div>
  </div>
<!-- </modal> -->
<!-- </transition> -->
</template>

<script>
const MODAL_WIDTH = 550
  export default {
    data() {
      return {
        userName: '',
        email: '',
        password: '',
        modalWidth: MODAL_WIDTH
      }
    },
    methods: {
   register() {
        let data = {
          email: this.email,
          password: this.password,
          userName: this.userName
        }
        
        this.email = ''
        this.password = ''
        this.userName = ''

        this.$modal.hide('register')

        alert('Hey ' + data.userName +'!')
       // this.$router.push({name: 'Home'});
        this.$router.go(-1);
        },
      },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
      }
  }
</script>
<style scoped>
h3{
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 300;
    color: #8b8c8d;
}

  input[type=password],
  input[type=text],
  input[type=email] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 14px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #DDDEDF;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
       box-shadow: none;
    border-radius:unset;
  }

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.3s;
}

.pop-out-enter,
.pop-out-leave-to {
  opacity: 0;
  transform: translateY(24px);
}



</style>
