<template>
  <div id="mainBody">
    <div class="container-fluid">
      <div id="header">
        <app-header></app-header>
      </div>

      <div id="router-view" class="cont">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </div>
      <!-- add the admin role and check for roles so customers cannot view the customer and videos header -->
    </div>
    <div class="footer">
      <div class="container-fluid">
        <h1 class="text-muted text-center">Advert here</h1>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Home/header.vue";
import { mapGetters } from "vuex";
import CryptoJS from 'crypto-js'
import { pathToFileURL } from 'url';

export default {
  components: {
    appHeader
  },
  computed: {
    ...mapGetters(["singUpPage", "loginDetails", "userData","key"])
  },
  created() {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    const now = Date.now();
    const encName = localStorage.getItem("textIV");
    const encPassword = localStorage.getItem("passKey");
    //decrpyt the name and password (in bytes) 
    //and convert to string 
    
    let name =  CryptoJS.AES.decrypt(encName,this.key);
    let password =  CryptoJS.AES.decrypt(encPassword,this.key);

    const loginDetail = {
      name: name.toString(CryptoJS.enc.Utf8),
      password: password.toString(CryptoJS.enc.Utf8)
    };
    // const loginDetail = {...this.userData}

    //const loginDetail = localStorage.getItem('loginDetails')
    if (!token) {
      return;
    }
    if (now >= expirationTime) {
      return;
    }
    if (loginDetail.name == null) {
      return;
    }
    this.$store.dispatch("loginUser", loginDetail);
  },
  mounted(){
    console.log("App.vue has been mounted");
  //   const path = localStorage.getItem('path');

  //   if(path){
  //     localStorage.removeItem('path');

  //     this.$router.push(path);
  //   }
   }
};
</script>

<style>
#mainBody{
  height: 100%;
}
.footer{
  bottom: 0;
}
.footer > .container-fluid {
  background-color: rgb(78, 76, 76);
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  height: 400px;
  padding: 5%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#weatherApp {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
#header {
  margin-top: -1px;
  position: fixed;
  width: 100%;
}
#router-view {
  padding-top: 50px;
}

.cont {
  margin: 0 auto;
}
.login {
  margin: 20% 25%;
}
.fade-enter {
  /* margin-top: 100%; */
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s;
  /* opacity: 1; */
  /* animation-name: slideIn;
  animation-duration: 2s; */
}
.fade-leave-active {
  transition: opacity 1.5s;
  opacity: 0;
}

@keyframes slideIn {
  from {
    margin-top: 100%;
  }
  to {
    margin-top: 0%;
  }
}

/* @media (max-width: 1313px) {
  .cont {
    width: 1000px;
  }
} */

.img {
  margin: 0 20%;
}
</style>
