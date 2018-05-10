<template>
  <section>
    <meun-list :items="getMyMusic"></meun-list>
    <play-list v-for="(item, index) in playList"
               :key="index"
               :playList="item"></play-list>
  </section>
</template>

<script>
  import meunList from './meun-list'
  import playList from './play-list'
  import { mapState,mapGetters,mapActions } from 'vuex'
  export default {
    name: "mymusic",
    computed: {
      ...mapGetters([
        'getMyMusic'
      ])
    },
    methods: {
      ...mapActions([
        'myMusicAction'
      ])
    },
    mounted() {
      this.myMusicAction(this);
    },
    data() {
      return {
        meunList: [
          {title: '我的音乐', icon:'music', tip: 88},
          {title: '最近播放', icon:'zuijinplay', tip: 20},
          {title: '我的电台', icon:'diantai', tip: 1},
          {title: '我的收藏', icon:'collect', tip: 3}
        ],
        playList: [
          {
            title: '我创建的歌单',
            list: [
              {
                title: '我喜欢的音乐',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 98,
                download: 77
              },
              {
                title: '纯音乐',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 52,
                download: 1
              },
              {
                title: '经典全纪录',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 52,
                download: 0
              },{
                title: '戴上耳机，闭上眼睛',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 66,
                download: 0
              }
            ]
          },
          {
            title: '我收藏的歌单',
            list: [
              {
                title: '我喜欢的音乐',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 98,
                download: 77
              },
              {
                title: '纯音乐',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 52,
                download: 1
              },
              {
                title: '经典全纪录',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 52,
                download: 0
              },{
                title: '戴上耳机，闭上眼睛',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg',
                num: 66,
                download: 0
              }
            ]
          }
        ]
      }
    },
    components: {
      meunList,
      playList
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
