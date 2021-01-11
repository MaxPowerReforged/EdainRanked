import StatisticsService from '../services/statistics.service';

export const state = () => ({
    statistics: []
  });

export const getters = {
  allStatistics: (state) => state.statistics,
}

export const mutations = {
  setStatistics: (state, data) => state.statistics = [...data]
}

export const actions = {
  async fetchStatistics({commit}) {
    const response = await new StatisticsService(this.$axios).getAll();
    commit('setStatistics', response.data);
  }
}