import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Profile from './modules/profiles'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        profiles: Profile
    },
    plugins: [createPersistedState()]
})
