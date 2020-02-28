const state = {
  isOpen:false,
  options:null,
  selectedOption:null,
  searchInput:null
}

const mutations = {
  toggle:(state, payload) => {
    state.isOpen = typeof payload === 'boolean' ? payload : !state.isOpen;
    state.searchInput = null;
  },
  setOptions:(state, payload) => {
    state.options = payload;
    if(Array.isArray(payload)){
      state.selectedOption = payload[0];
    }
  },
  selectOption:(state,payload) => {
    state.selectedOption = payload || null;
  },
  setSearchInput:(state,payload) => {
    state.searchInput = payload || null;
  }
}

const getters = {
  IS_OPEN(state){
    return state.isOpen;
  },
  GET_OPTIONS(state){
    return state.options;
  },
  GET_SELECTED_OPTION(state){
    return state.options;
  },
  GET_SEARCH_INPUT(state){
    return state.seachInput;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  // actions
};