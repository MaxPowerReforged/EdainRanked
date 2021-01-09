import RankingService from '../services/ranking.service';

export const state = () => ({
    ranking: []
  });

export const getters = {
    allRanking: (state) => state.ranking, //TODO maybe not necessary, we can mapState which makes auto getter?
    top10: (state) => state.ranking.slice(0, 10),
    orderedRanking: (state) => state.ranking,
}

export const mutations = {
    setRanking: (state, data) => state.ranking = [...data]
}

export const actions = {
    async fetchRanking({commit}) {
        const response = await new RankingService(this.$axios).getAll();
        commit('setRanking', response.data);
    }
}