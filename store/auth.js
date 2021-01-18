export const state = () => ({
    userData: []
  });

  export const getters = {
  allUserData: (state) => state.userData,
}

export const mutations = {
  setUserData: (state, data) => state.userData = [...data]
}

export const actions = {
  async fetchUserData({commit}) {
    const response = await new ReplayService(this.$axios).getAll();
    commit('setUserData', response.data);
  }
}