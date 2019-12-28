
const state = {
    Carts: []
}


const getters = {
    Carts: state => state.Carts
}

const mutations = {
    add_to_cart: (state, payload) => state.Carts.push(payload),
    remove_from_cart: (state, payload) => state.Carts.splice(payload, 1),
    update_Day: (state, payload) => {

        state.Carts[payload.index].days = payload.value
    }
}

const actions = {
    //actions take in a context object containing getters, mutations and a commit method
    addToCart: ({ commit }, payload) => {
        commit('add_to_cart', payload)
    },
    removeCart: ({ commit }, payload) => commit('remove_from_cart', payload),
    updateDay: ({ commit }, payload) => commit('update_Day', payload)
}

export default {
    state,
    getters,
    mutations,
    actions
}