import Vuex from '@wepy/x';
import wepy from '@wepy/core'
wepy.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    profile: {

    },
    token: '',
    location: {
      lat: 99,
      lon: 100
    },
    session_key: '',
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    bootStore(state) {
      if (state.token != '') return

      let session_key = wx.getStorageSync('session_key')
      let token = wx.getStorageSync('token')
      let profile = wx.getStorageSync('profile')
      state.session_key = session_key
      state.token = token
      state.profile = profile
      console.log('boot store', state)
    },

    logout(state) {
      state.token = ''
      state.profile = ''
      wx.setStorageSync('token', '')
      wx.setStorageSync('profile', '')
    },
    login(state, { session_key, token, profile }) {
      console.log('store login ', session_key, token, profile)
      state.session_key = session_key
      state.token = token
      state.profile = profile
      console.log(state)
      wx.setStorageSync('session_key', session_key)
      wx.setStorageSync('token', token)
      wx.setStorageSync('profile', profile)

    }

  },
  getters: {
    location: state => {
      return state.location
    },
    userId: state => {
      return state.profile ? state.profile.id : 0
    },
    memberId: state => {
      return state.profile ? state.profile.member_id : 0
    },
    profile: state => {

    },
    isLogin: state => {
      return state.profile && state.profile.id
    },
    token: state => {
      return state.token
    },
    session_key: state => {

      return state.session_key ? state.session_key : wx.getStorageSync('session_key')
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
});
