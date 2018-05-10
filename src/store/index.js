//npm install vuex -d

import Vue from 'vue';
import Vuex from 'vuex';
import MeunList from './modules/meunlist'
import MyMusicList from './modules/mymusiclist'
import Discovering from './modules/discovering'
import Listening from './modules/listening'


Vue.use(Vuex);
export default new Vuex.Store({
  state : {
  
  },
  getters: {
  
  },
  mutations: {
  
  },
  actions: {
  
  },
  modules: {
    meunlist: MeunList,
    myMusicList: MyMusicList,
    discovering: Discovering,
    listening: Listening
  }
});
