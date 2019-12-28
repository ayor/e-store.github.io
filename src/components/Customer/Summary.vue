<template>
  <div>
    <div class="row">
      <div class="col my-3 mr-2">
        <div class="card">
          <div class="card-title">Account Details</div>
          <div class="card-body">
            <p>{{userData.name}}</p>
            <hr />
            <p>Change Password</p>
          </div>
        </div>
      </div>
      <div class="col my-3 mr-2">
        <div class="card">
          <div class="card-title">Account Details</div>
          <div class="card-body">
            <p>{{userData.name}}</p>
            <hr />
            <p>{{userData.email}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col my-3 mr-2">
        <div class="card">
          <div class="card-title">Account Details</div>
          <div class="card-body">
            <p>{{userData.address}}</p>
            <hr />
            <p>Change Password</p>
          </div>
        </div>
      </div>
      <div class="col my-3 mr-2">
        <div class="card">
          <div class="card-title">Account Details</div>
          <div class="card-body">
            <p>Ayomide Dosumu</p>
            <hr />
            <p>Change Password</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { databaseAPI } from "../../axios-auth";
import {store} from '../../store/store'
import axios from "axios";
export default {
  computed: {
    ...mapGetters([
      "Customers",
      "loginDetails",
      "userData",
      "userToken",
      "loggedIn"
    ])
  },
  beforeRouteEnter: (to, from, next) => {
    if (store.state.userToken) {
      next();
    } else {
      next('/login')
    }
  }
};
</script>