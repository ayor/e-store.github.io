import Vue from 'vue'
import Vuex from 'vuex'
import videos from './modules/videos'
import Carts from './modules/Carts'
import videoDetails from './modules/videoDetails'
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        userToken:null,
        loggedIn:false,
        errorMessage: '',
        loginErrorExist: false,
        key:"#$#^&*()#!@#1234QWERT",
        userData: {
            id:'',
            name: "",
            Address: "",
            email:"",
            password: ""
          },
        message:'',
        isValidUser: false,
        loginDetails: {
            name: "",
            password: ""
        }
    },
    actions,
    getters,
    mutations,
    modules: {
        videos,
        videoDetails,
        Carts
    }
})