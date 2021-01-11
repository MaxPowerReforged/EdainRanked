import ReplayService from '../services/replay.service';

export const state = () => ({
    replays: []
  });

  export const getters = {
  allReplays: (state) => state.replays,
}

export const mutations = {
  setReplays: (state, data) => state.replays = [...data]
}

export const actions = {
  async fetchReplays({commit}) {
    const response = await new ReplayService(this.$axios).getAll();
    commit('setReplays', response.data);
  }
}