import { databaseAPI } from '../axios-auth';
import { router } from '../main'
import axios from 'axios'
import CryptoJS from 'crypto-js'





const customerMethods = {
    async asyncGetCustomerList(commit, payload) {

        await (databaseAPI.get('/Customer')
            .then(({ data }) => {

                if (data.length != 0) {
                    payload = [...data]
                }
            }))

        commit('init_Customers', payload)
    },
    async postCustomerToDatabase(commit, payload) {
        await (
            databaseAPI.post("/Customer", payload)
                .then(response => {
                    if (response.status == 200) {

                        // //send a success message to the user 
                        commit('message', "Successfully Added Customer");
                    } else {
                        //send an error message to the user
                        commit('message', "Something wrong happened");

                    }
                })
                .catch(err => alert(err))
        )
    },
    async getUserToken(userId) {
        await (
            databaseAPI.get({
                url: "/Customer",
                params: {
                    id: userId
                }
            })
        )

    }

}


export const loginUser = ({ commit, dispatch, getters }, loginData) => {


    //check if user is aUthorized

    axios.post('https://localhost:44351/auth', loginData)
        .then(response => {

            if (response.status == 200) {
                const textIV= CryptoJS.AES.encrypt(loginData.name, getters.key )
                const passKey = CryptoJS.AES.encrypt(loginData.password, getters.key)
                //store token 
                commit('StoreToken', response.headers.token);

                //store token in localstorage
                localStorage.clear();
                localStorage.setItem('token', response.headers.token);

                
                localStorage.setItem('textIV',  textIV);

                localStorage.setItem('passKey', passKey);

                //get user data
                commit('userData', response.data);

                //make the user login successfully
                commit('loggedIn', true);

                //start log out timer
                dispatch('logOutTimer', response.headers.expiresin);

                setTimeout(() => {
                    router.push('/summary')
                }, 500);
            }
        })
        .catch(error => {
            console.log(error)
            //send error message to the user
            commit('message', "Enter a valid username or password");
            //login success should be false here
            commit('loggedIn', false)
        })
    // commit('isValidUser')

}

export const display_SignUp = ({ commit }) => {
    commit('displaySignUp', true)
};


export const postCustomer = ({ commit }, payload) => {
    //add new customer to list of customers

    customerMethods.postCustomerToDatabase(commit, payload)

}

export const get_loggedIn_user = ({ commit }) => {
    commit('loggedInUser')
}

export const logout = ({ commit }) => {
    
    localStorage.removeItem('token');

    localStorage.removeItem('username');

    localStorage.removeItem('password');

    commit('logout')

    router.replace('/login')
}

export const logOutTimer = ({ commit }, expiresin) => {

    let expectedExpirationTimeInMilliseconds = Date.parse(expiresin);

    //store expiration time in localStorage


    let now = Date.now();

    let expirationTime = expectedExpirationTimeInMilliseconds - now

    localStorage.setItem('expirationTime', expectedExpirationTimeInMilliseconds)

    if (now < expectedExpirationTimeInMilliseconds) {
        setTimeout(() => {
            commit('logout')
            console.log("logging out")
        }, expirationTime);
    }
}