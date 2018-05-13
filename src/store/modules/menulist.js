
//侧栏滑动模块
const SHOW_MENU = true
const HIDE_MENU = false

const menulist = {
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
    showMenuAction({ dispatch, commit }) {
      dispatch('showPageCoverAction');
      commit('showMenu');
    },
    hideMenuAction({ dispatch, commit }) {
      commit('hideMenu');
    }
  }
}
export default menulist
