import Vue from 'vue';
import Vuex from 'vuex';

const ADD_ITEM = 'ADD_ITEM';

Vue.use(Vuex);

const state = {
  basket: [],
};

const mutations = {
  [ADD_ITEM](state, payload) {
    state.basket.push({
      title: 'foo',
      downloads: ['initial download'],
    });
  },
  ADD_DOWNLOAD(state, payload) {
    let index = state.basket.map(x => x.id).indexOf(payload.mediaId);
    if (index === -1) {
      index = state.basket.push({
        id: payload.mediaId,
        downloads: [],
      });
    }
    state.basket[index] = {
      ...state.basket[index],
      downloads: state.basket[index].downloads.push(payload.id || new Date()),
    };
  },
  CLEAR_DOWNLOADS(state, payload) {
    state.basket[0].downloads = [];
  },
};

const actions = {
  addItem(context, number) {
    context.commit(ADD_ITEM, number);
  },
  addDownload(context, number) {
    context.commit('ADD_DOWNLOAD', number);
  },
  clearDownloads(context, number) {
    context.commit('CLEAR_DOWNLOADS', number);
  },
};

const getters = {
  getDownloads(state) {
    return state.basket[0] && state.basket[0].downloads;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
