<template>
  <section class="friend">
    <ul class="tabbar">
      <li>
        <i class="icon icon-edit-paper text"></i>
        <span>发动态</span>
      </li>
      <li>
        <i class="icon icon-rank-list"></i>
        <span>发布视频</span>
      </li>
    </ul>
    <div class="friend-list">
      <div class="discover">
        <span>精彩不容错过</span>
        <i class="icon icon-right"></i>
      </div>
      <ul>
        <li v-for="(item, index) in friendList"
            :key="index">
          <div class="bgimg"
               :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
            <div v-if="item.update" class="update"></div>
          </div>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <track-list :trackList="trackList"></track-list>
  </section>
</template>

<script>
  import TrackList from './track-list'
  export default {
    name: "friend",
    data() {
      return {
        friendList: [
          {name: '张惠妹', update: false, imgUrl: 'http://p4.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130'},
          {name: '周杰伦',update: true, imgUrl: 'http://p3.music.126.net/o-FjCrUlhyFC96xiVvJZ8g==/109951163111191410.jpg?param=130y130'},
          {name: '王菲',update: true, imgUrl: 'http://p3.music.126.net/GKhjgN1ltQYK3eYf9DdJwg==/18727981557622763.jpg?param=130y130'},
          {name: 'Fine乐团',update: true, imgUrl: 'http://p3.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=130y130'},
          {name: '邓紫棋',update: true, imgUrl: 'http://p4.music.126.net/r7uMnwjWpYMuQI_3ZTg56A==/18528969953189760.jpg?param=130y130'},
          {name: '林俊杰',update: true, imgUrl: 'http://p4.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130'},
          {name: '林俊杰',update: true, imgUrl: 'http://p4.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130'},
          {name: '林俊杰',update: true, imgUrl: 'http://p4.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130'}
        ],
        trackList: [
          {
            id: '0000',
            name: '海岛度假Santorini',
            vip: 'vip',
            type: '发布视频',
            time: '2018-05-12 09:43',
            userImgUrl: 'http://p1.music.126.net/T_Mf6rSa9kys7cxQ8tKt2A==/109951163018721121.jpg?param=45y45',
            text: 'Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏',
            Img: {
              imgUrl: '',
              tip: ''
            },
            video: {
              videoUrl: '',
              videoImg: 'http://p1.music.126.net/6W1ZhUqCv0RaRNGjSjgUHg==/109951163293795739.jpg?param=338y189',
              time: '01:11',
              tip: '—— 这里有最棒的音乐短片',
              play: 5854
            },
            likes: 324,
            msg: 80,
            share: 63
          },
          {
            id: '0000',
            name: '海岛度假Santorini',
            vip: 'vip',
            type: '发布视频',
            time: '2018-05-12 09:43',
            userImgUrl: 'http://p1.music.126.net/T_Mf6rSa9kys7cxQ8tKt2A==/109951163018721121.jpg?param=45y45',
            text: 'Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏Kisma好听单曲《We Are》音乐短片欣赏',
            Img: {
              imgUrl: '',
              tip: ''
            },
            video: {
              videoUrl: '',
              videoImg: 'http://p1.music.126.net/6W1ZhUqCv0RaRNGjSjgUHg==/109951163293795739.jpg?param=338y189',
              time: '01:11',
              tip: '—— 这里有最棒的音乐短片',
              play: 5854
            },
            likes: 324,
            msg: 80,
            share: 63
          }
        ]
      }
    },
    components: {
      TrackList
    }
  }
</script>

<style lang="scss" scoped>
  .friend{
    position: relative;
    padding-top: 40px;
    padding-bottom: $f-heigth;
    >.tabbar{
      position: fixed;
      z-index: 20;
      top: $h-heigth;
      left: 0;
      margin-top: -1px;
      background: $mainColor;
      display: flex;
      width: 100%;
      align-items: stretch;
      >li{
        flex: 1;
        height: 40px;
        text-align: center;
        display: flex;
        justify-content: center;
        color: #eee;
        >.text{
          font-size: 1.8rem;
        }
        >i{
          font-size: 2rem;
          line-height: 40px;
          margin-right: 7px;
        }
        >span{
          line-height: 40px;
        }
      }
    }
    >.friend-list{
      >.discover{
        height: 30px;
        line-height: 30px;
        margin: 15px 0 5px;
        >span{
          display: inline-block;
          font-size: 1.3rem;
          position: relative;
          color: $fontColor;
          padding-left: 12px;
          line-height: 18px;
          vertical-align: middle;
        }
        >i{
          color: #999;
          vertical-align: middle;
        }
      }
      >ul{
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        >li{
          display: block;
          min-width: 80px;
          height: 80px;
          >.bgimg{
            width: 60px;
            height: 60px;
            margin: 0 auto;
            background-position: center;
            background-size: cover;
            border-radius: 50%;
          }
          >p{
            text-align: center;
            font-size: 1.2rem;
            line-height: 20px;
          }
        }
      }
    }
  }
</style>
