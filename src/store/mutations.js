export const init_Customers = (state, payload) => state.customers = [...payload]

export const loggedIn = (state, payload) => {

    state.loggedIn = payload
}

export const displayErrorMessage = (state, payload) => {
    state.errorMessage = payload.errorMessage

    state.loginErrorExist = payload.errorDoesExist

    //set login error to false after 3 seconds
    setTimeout(() => {
        state.loginErrorExist = false
    }, 3000);
}

export const isValidUser = state => {

    state.validUser = loggedInUser(state)

    if (state.validUser) {
        state.isValidUser = true
    }
    else {
        state.isValidUser = false
    }
}

export const addCustomer = (state, payload) => {
    state.Customers.push(payload);
}


export const message = (state, payload) => {
    state.message = payload
    setTimeout(() => {
        state.message = ""
    }, 3000)
}

export const userData = (state, payload) => {
    state.userData = { ...payload }
}

export const loggedInUser = state => {
    let user = state.customers.find(el => el.name == state.loginDetails.name && el.password == state.loginDetails.password)
    return user;
}

export const StoreToken = (state, userToken)=>{
    state.userToken = userToken
}

export const logout = state => {
    state.userToken = null;
    state.userData = {};
    state.loggedIn = false;

}