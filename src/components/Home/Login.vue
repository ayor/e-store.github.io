<template>
  <div class="body">
    <div class="row p-5">
      <div class="col col-md-6 col-sm-3" id="login">
        <div class="w-75">
          <h4 class="text-center">Login</h4>

          <div class="form-group">
            <label for="Username">Username</label>
            <input
              required
              class="form-control"
              name="Username"
              type="text"
              size="10"
              v-model="loginDetails.name"
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              required
              type="password"
              class="form-control"
              width="50"
              v-model="loginDetails.password"
            />
          </div>
          <div>
            <p>Forgot your password?</p>
          </div>
          <button class="btn btn-warning w-50" @click="loginUser">
            <span class="d-flex justify-content-around">
              <i class="fa fa-envelope"></i> Login
            </span>
          </button>

          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="alert alert-danger" v-show="loginErrorExist">{{errorMessage}}</div>
          </transition>
        </div>
      </div>
      <div class="col col-md-6 col-sm-3" id="signUp">
        <form class="w-75">
          <h4 class="text-center">Sign Up here</h4>

          <div class="form-group">
            <label for="name">Username</label>
            <input
              required
              class="form-control"
              name="name"
              type="text"
              size="10"
              v-model="SignupDetails.name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              required
              class="form-control"
              name="email"
              type="email"
              size="10"
              v-model="SignupDetails.email"
            />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              required
              class="form-control"
              name="address"
              type="text"
              size="10"
              v-model="SignupDetails.address"
            />
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <select name id class="custom-select custom-select-sm" v-model="SignupDetails.country">
              <option
                v-for="country in countries"
                :key="country.alpha3Code"
                :value="country.name"
              >{{country.name}}</option>
            </select>
          </div>
          <div class="row">
            <div class="form-group col">
              <label for="state">State</label>
              <input type="text" id="state" class="form-control" v-model="SignupDetails.state" />
            </div>
            <div class="form-group col">
              <label for="CIty/Town">City/Town</label>
              <input type="text" id="city" v-model="SignupDetails.city" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              required
              type="password"
              class="form-control"
              width="50"
              placeholder="At least 6 characters"
              v-model="SignupDetails.password"
            />
          </div>

          <div class="form-group">
            <label for="Password">Confirm password</label>
            <input
              required
              type="password"
              class="form-control"
              width="50"
              v-model="confirmPassword"
            />
          </div>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <div class="alert alert-danger" v-show="alert">{{signUperrorMessage}}</div>
          </transition>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <div class="alert alert-success" v-show="message != '' ">{{message}}</div>
          </transition>
        </form>
        <button class="btn btn-warning w-50 mx-5" @click="signUp" :disabled="disableSingUp">
          <span class="d-flex justify-content-around">
            <i class="fa fa-envelope"></i> Sign Up
          </span>
        </button>
      </div>
    </div>
    <div></div>
    <!-- <div class="footer">
      <div class="container-fluid">
        <span class="text-muted">Footer here</span>
      </div>
    </div>-->
  </div>
</template>
<script>
import { countriesAPI } from "../../axios-auth";
import { mapGetters, mapActions } from "vuex";
import { store } from '../../store/store';
export default {
  data() {
    return {
      SignupDetails: {
        name: "",
        email: "",
        address: "",
        password: ""
      },
      confirmPassword: "",
      country: "",
      state: "",
      city: "",
      alert: false,
      signUperrorMessage: "",
      disableSingUp: true,
      countries: []
    };
  },
  computed: {
    ...mapGetters([
      "loginErrorExist",
      "loginDetails",
      "loggedIn",
      "Customers",
      "message",
      "errorMessage"
    ])
  },
  methods: {
    navigateCustomerPage() {
      this.$router.push("/summary");
    },
    loginUser(){
        this.$store.dispatch('loginUser', this.loginDetails)
    },
    signUp() {

          //send the user data to the database 
          this.$store.dispatch("postCustomer", this.SignupDetails);

          setTimeout(() => {
            this.SignupDetails = {
              name: "",
              email: "",
              address: "",
              password: "",
              confirmPassword: "",
              country: "",
              state: "",
              city: ""
            };

            this.$router.push("/summary");
          }, 3000);
        // }
      // }
    },
    setAlertFor3seconds(message) {
      this.alert = true;
      this.signUperrorMessage = message;
      setTimeout(() => {
        this.message = "";
        this.alert = false;
      }, 3000);
    }
  },
  mounted() {
    countriesAPI.get().then(({ data }) => {
      this.countries = [...data];
    });
  },
  updated() {
    let emptyDetails = [];
    if (this.loggedIn) {
      this.navigateCustomerPage();
    }
    //check if any field is empty
    for (let key in this.SignupDetails) {
      if (this.SignupDetails[key] == "") {
        emptyDetails.push(this.SignupDetails[key]);
      }
    }
    //if fields are not empty, enable the sign up button
    if (emptyDetails.length == 0) {
      this.disableSingUp = false;
    }
  }
};
</script>
<style scoped>
body > .container-fluid {
  padding-top: 60px;
}
#login,
#signUp {
  padding: 0 10%;
}
#login {
  border-right: 3px solid rgba(82, 126, 245, 0.507);
}
h4 {
  color: cadetblue;
}
/* .footer > .container-fluid {
  background-color: rgb(78, 76, 76);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 300px;
} */

button {
  margin: 2% 25%;
  box-shadow: 0 4px 8px #ccc;
}
</style>