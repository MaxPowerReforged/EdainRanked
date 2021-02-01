import UserService from "../services/user.service";

export const state = () => ({
  userName: "",
  JwtToken: "",
  userData: {}
});

export const getters = {
  userName: state => state.userName,
  JwtToken: state => state.JtwToken,
  userData: state => state.userData
};

export const mutations = {
  setUserName: (state, userName) => (state.userName = userName),
  setUserJwtToken: (state, JwtToken) => (state.JwtToken = JwtToken),
  setUserData: (state, userData) => (state.userData = userData)
};

export const actions = {
  async createUser({ commit }, userCredentials) {
    const serverResponse = await new UserService(this.$axios).create(
      userCredentials
    );
    //const cognitoResponse = await this.$Cognito
    //commit("setUserData", response.data);
  },
  async authenticateUser({ commit }, { name, password }) {
    const response = await this.$Cognito.authenticateUser(name, password);
    commit("setUserName", name);
    commit("setUserJwtToken", response);
  }
};
