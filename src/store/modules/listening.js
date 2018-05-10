//侧栏滑动模块
const Listen_TRUE = true
const Listen_FALSE = false

const listening = {
  state: {
    // 1.展示/隐藏听歌模块
    listenIsShow: false,
    // 2.开始/停止 播放
    isStart: false
  },
  getters: {
  },
  mutations: {
    // 1.展示/隐藏听歌模块
    showListen(state) {
      state.listenIsShow = Listen_TRUE;
    },
    hideListen(state) {
      state.listenIsShow = Listen_FALSE;
    },
    // 2.开始/停止 播放
    startListen(state) {
      state.isStart = Listen_TRUE;
    },
    stopListen(state) {
      state.isStart = Listen_FALSE;
    }
  }
  ,
  actions: {
    showListenAction({ commit }) {
      commit('showListen');
    },
    hideListenAction({ commit }) {
      commit('hideListen');
    },
    startListenAction({ commit }) {
      commit('startListen');
    },
    stopListenAction({ commit }) {
      commit('stopListen');
    }
  }
}
export default listening
