import {databaseAPI} from '../../axios-auth'

const state = {
    videos:[],
};

const getters = {
    get_videos: state=> state.videos
};

const mutations = {
    init_videos: (state, payload) => state.videos = [...payload] ,
};

const actions = {
    initialize_videos:({commit}, payload)=> {
        databaseAPI.get(
            '/videos'
        ).then(
            ({data})=>{
                if(data){
                    payload = [...data]
                    commit('init_videos', payload)
                }
            }
        )
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}

