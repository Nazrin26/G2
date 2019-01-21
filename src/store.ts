import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      activeRole: null,
      token: {
        id: null,
      },
      roles: [],
      info: {
        email: null,
        name: null,
        id: null,
      },
    },
  },
  mutations: {
    AuthorizeUser(state: any, payload: any) {
      state.user.token.id = payload;
      localStorage.setItem('token', payload);
      console.log(state.user.token.id);
    },
    UnauthorizeUser(state, payload) {
      state.user.token.id = payload;
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
  },
  actions: {

  },
  getters: {
    // AuthGuard
    getUserActive: (state: any) => (!!state.user.info.id),
  },
});
