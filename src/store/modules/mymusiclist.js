
const musiclist = {
  state: {
    //我的音乐
    myMusic: {
      title: '我的音乐',
      icon:'music',
      billboard: {},
      songlist: {},
      tip: 0
    },
    //最近播放
    recentlyPlayed: {
      title: '最近播放',
      icon:'zuijinplay',
      billboard: {},
      songlist: {},
      tip: 0
    },
    //我的电台
    myRadio: {
      title: '我的电台',
      icon:'diantai',
      billboard: {},
      songlist: {},
      tip: 0
    },
    //我的收藏
    myCollection: {
      title: '我的收藏',
      icon:'collect',
      billboard: {},
      songlist: {},
      tip: 0
    },
    //我创建的歌单
    createPlaylist: {},
    //我收藏的歌单
    collectionPlaylist: {},
    numStr: 66
  },
  getters: {
    getNum: state => state.numStr,
    getMyMusic(state) {
      let data = [
        {title: state.myMusic.title, icon:state.myMusic.icon, tip:state.myMusic.tip },
        {title: state.recentlyPlayed.title, icon:state.recentlyPlayed.icon, tip:state.recentlyPlayed.tip },
        {title: state.myRadio.title, icon:state.myRadio.icon, tip:state.myRadio.tip },
        {title: state.myCollection.title, icon:state.myCollection.icon, tip:'专辑/歌手/视频/专栏' },
      ];
      return data;
    }
  },
  mutations: {
    setMyMucis(state,data) {
      state.myMusic.billboard = data.data.billboard;
      state.myMusic.songlist = data.data.song_list;
      state.myMusic.tip = data.data.song_list.length;
    },
    setRecentlyPlayed(state,data) {
      state.recentlyPlayed = data;
    },
    setMyRadio(state,data) {
      state.myRadio = data;
    },
    setMyCollection(state,data) {
      state.myCollection = data;
    },
    setCreatePlaylist(state,data) {
      state.createPlaylist = data;
    },
    setCollectionPlaylist(state,data) {
      state.collectionPlaylist = data;
    },
  },
  actions: {
    myMusicAction({ commit } ,context) {
      const parameter = {
        method: 'baidu.ting.billboard.billList',
        type: 1,
        size: 10,
        offset: 0
      };
      context.$api.getNewMusicList(context, parameter)
        .then(response => {
          commit('setMyMucis', {data:response.body});
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
}
export default musiclist
