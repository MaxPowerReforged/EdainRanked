import StatisticsService from '../services/statistics.service';

export const state = () => ({
    factionStatistics: []
  });

export const getters = {
  allFactionStatistics: (state) => state.factionStatistics,
}

export const mutations = {
  setFactionStatistics: (state, data) => state.factionStatistics = [...data]
}

export const actions = {
  async fetchFactionStatistics({commit}) {
    const response = await new StatisticsService(this.$axios).getFactionAll();
    commit('setFactionStatistics', response.data);
  }
}