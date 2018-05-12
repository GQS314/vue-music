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
  
  },
  getters: {
  
  },
  mutations: {
  
  },
  actions: {
  
  },
  modules: {
    menulist: MenuList,
    myMusicList: MyMusicList,
    discovering: Discovering,
    listening: Listening
  }
});
