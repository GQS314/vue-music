//侧栏滑动模块
const Listen_TRUE = true
const Listen_FALSE = false

const listening = {
  state: {
    // 1.展示/隐藏听歌模块
    listenIsShow: false,
    // 2.开始/停止 播放
    isStart: false,
    // 3.展示/隐藏当前歌单
    playingListIsShow: false,
    // 4.歌单列表
    songList: [],
    // 5.当前播放歌曲
    playing: {},
    playingIndex: 0
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
    },
    // 3.展示/隐藏当前歌单
    showPlayingList(state) {
      state.playingListIsShow = Listen_TRUE;
    },
    hidePlayingList(state) {
      state.playingListIsShow = Listen_FALSE;
    },
    // 4.1更换播放歌单
    rewriteSongList(state, list){
      state.songList = list;
    },
    // 4.2在当前歌单插入一首歌曲
    insertSongList(state, playSong){
      state.songList.unshift(playSong);
    },
    // 5.更改播放歌曲
    updatePlaying(state, playSong){
      state.playing = playSong;
    },
    updatePlayingIndex(state, index){
      state.playingIndex = index;
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
    toggleListenAction({ commit, state }){
      if(state.isStart){
        commit('stopListen');
      }else{
        commit('startListen');
      }
    },
    startListenAction({ commit }) {
      commit('startListen');
    },
    stopListenAction({ commit }) {
      commit('stopListen');
    },
    showPlayingListAction({ dispatch, commit }){
      dispatch('showPageCoverAction');
      commit('showPlayingList');
    },
    hidePlayingListAction({ dispatch, commit }){
      commit('hidePlayingList');
    },
    rewriteSongListAction({ commit }, list){
      commit('rewriteSongList', list);
      commit('updatePlaying', list[0]);
    },
    insertSongListAction({ commit }, playSong){
      commit('insertSongList', playSong);
      commit('updatePlaying', playSong);
    },
    updatePlayingAction({ commit }, playSong){
      commit('updatePlaying', playSong);
    },
    updatePlayingIndexAction({ commit }, index){
      commit('updatePlayingIndex', index);
    }
  }
}
export default listening
