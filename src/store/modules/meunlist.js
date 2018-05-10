
//侧栏滑动模块
const SHOW_MENU = true
const HIDE_MENU = false

const meunlist = {
  state: {
    isShow: false,
  },
  getters: {
    getIsShow: state => state.isShow
  },
  mutations: {
    showMenu(state) {
      state.isShow = SHOW_MENU;
    },
    hideMenu(state) {
      state.isShow = HIDE_MENU;
    }
  }
  ,
  actions: {
    showMenuAction({ commit }) {
      commit('showMenu');
    },
    hideMenuAction({ commit }) {
      commit('hideMenu');
    }
  }
}
export default meunlist
