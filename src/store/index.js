//npm install vuex -d

import Vue from 'vue';
import Vuex from 'vuex';
import MenuList from './modules/menulist'
import MyMusicList from './modules/mymusiclist'
import Discovering from './modules/discovering'
import Listening from './modules/listening'


Vue.use(Vuex);
export default new Vuex.Store({
  state : {
    pageCoverIsShow: false
  },
  getters: {
  
  },
  mutations: {
    showPageCover: state => state.pageCoverIsShow = true,
    hidePageCover: state => state.pageCoverIsShow = false,
  },
  actions: {
    showPageCoverAction({ commit }){
      commit('showPageCover');
    },
    hidePageCoverAction({ dispatch, commit }){
      dispatch('hideMenuAction');
      dispatch('hidePlayingListAction');
      commit('hidePageCover');
    }
  },
  modules: {
    menulist: MenuList,
    myMusicList: MyMusicList,
    discovering: Discovering,
    listening: Listening
  }
});
