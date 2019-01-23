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
      companies: [],
      info: {
        email: null,
        name: null,
        id: null,
      },
    },
  },
  mutations: {
    AuthorizeUser(state: any, payload: any) {
      state.user.token.id = payload.token;
      state.user.info.email = payload.email;
      state.user.companies = payload.companies;

      console.log(state.user.token.id);
      console.log(state.user.info.email);
      console.log(state.user.companies);
    },
    UnauthorizeUser(state: any, payload: any) {
      state.user.token.id = payload;
      state.user.info.email = payload;
      state.user.companies = payload;
    },
  },
  actions: {

  },
  getters: {
    // AuthGuard
    getUserActive: (state: any) => (!!state.user.info.id),
    comments: (state: any) => (state.user.companies),
  },
});
