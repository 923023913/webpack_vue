import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 0
}
const mutations = {
    _add (state) {
        state.count++
    }
}
const getters = {

}
const actions = {
    add ({ commit }) {
        commit('_add')
    }
}
const modules = {

}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules
})