<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">eRental</router-link>
            <!-- <a class="nav-link" >Home <span class="sr-only">(current)</span></a> -->
          </li>
          <span v-if="logOnUser.role == 'admin'">
            <li class="nav-item">
              <router-link to="/customers" class="nav-link">Customers</router-link>
              <!-- <a class="nav-link" >Features</a> -->
            </li>
          </span>
          <span v-if="logOnUser.role == 'admin'">
            <li class="nav-item">
              <router-link to="/Videos" class="nav-link">Videos</router-link>
            </li>
          </span>
          <!-- <span v-if="logOnUser.role == 'admin'"> -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">About Us</router-link>
          </li>
          <!-- </span> -->
        </ul>
      </div>
      <ul class="navbar-nav" >

        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <span v-if="loggedIn">
            <li class="nav-item dropdown mr-3">
              <span
                class="nav-link dropdown-toggle headerToggles"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
                Hi, {{userData.name}}
              </span>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="_dropDownMenu">
                <a class="dropdown-item" @click="navigateToCustomerPage" style="cursor: pointer;">My Account</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class=" btn btn-danger w-75 mx-3" style="color:white; cursor: pointer;" @click="loutOutUser">
                  Log Out
                </a>
              </div>
            </li>
          </span>
          <span v-else>
            <li class="nav-item dropdown mr-3">
              <span
                class="nav-link headerToggles dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user" aria-hidden="true"></i> Login
              </span>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="loginDropdown">
                <router-link to="/login" class="dropdown-item ">
                  <button class="btn btn-info w-100" @click="navigateToLoginPage">Login</button>
                </router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/login" class="dropdown-item">
                  <button
                    class="btn btn-warning w-100"
                    @click="navigateToLoginPage"
                  >CREATE AN ACCOUNT</button>
                </router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/cloud" class="dropdown-item">
                  <button
                    class="btn btn-success w-100"
                    @click="navigateToCloudPage"
                  >Test Algorithm</button>
                </router-link>
              </div>
            </li>
          </span>
        </transition>
        <li class="nav-item mr-3">
          <span class="nav-link headerToggles">
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </span>
        </li>
        <li class="nav-item" @click="showCartPage">
          <span class="nav-link headerToggles">
            <i class="fa fa-shopping-cart"></i> Cart
            <span id="counter">{{Carts.length}}</span>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "Carts",
      "userData",
      "errorMessage",
      "loginErrorExist",
      "loggedIn",
    ])
  },
  data() {
    return {
      logOnUser: {},
      days: 1,
      totalPrice: 0,
      value: 1,
      numberOfDays: Number,
      spinnerIsVisible: false,
      loginModal: "",
      target: ""
    };
  },
  methods: {
    ...mapActions(["initialize_Customers"]),
    getImgUrl(imgSrc) {
      return require("../../assets/" + imgSrc);
    },
    remove(index) {
      this.$store.dispatch("removeCart", index);
    },
    changeEventHandler(index) {
      let value = this.numberOfDays;
      this.$store.dispatch("updateDay", { index, value });
    },
    loginUser() {
      this.$store.dispatch("loginUser");
      if (!this.loginErrorExist) {
        (this.loginModal = "modal"), (this.target = "#userLogin");
      }
    },
    navigateToLoginPage() {
      this.$router.push("/login");
    },
    navigateToCustomerPage() {
      this.$router.push("/summary");
    },
    navigateToCloudPage(){
      this.$router.push("/cloud");
    },
    showCartPage(){
      this.$router.push('/carts')
    },
    loutOutUser(){
        this.$store.dispatch('logout')
    }
  },
  mounted() {
    //this.initialize_Customers();
  },
  updated() {
    let sum = 0;
    this.Carts.forEach(element => {
      sum += element.price * element.days;
    });
    this.totalPrice = sum;
  }
};
</script>
<style scoped>
#counter {
  background-color: orange;
  border-radius: 50%;
  padding: 1px 7px 3px;
  color: white;
}
.headerToggles:hover {
  cursor: pointer;
  background-color: #eee;
}
h6 {
  font-family: fantasy;
}

#loginDropdown >a >button{
margin-left: -0px;
}
.login_Panel {
  margin: 0 auto;
  background-color: rgb(229, 246, 252);
  padding: 15px;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button {
  margin: 2% 25%;
  box-shadow: 0 4px 8px #ccc;
}


#_dropDownMenu, #loginDropdown{
  background-color: #ccc;
  z-index: 1;
}
</style>