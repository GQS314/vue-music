<template>
  <section :class="['listening', {listeningTab: !listenIsShow}]">
           <!--:style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">-->
    <audio class="audio"
           :src="playing.url"
           controls="controls" ref="audio">您该升级浏览器了！</audio>
    <div class="blurlayer"
         :style="{ backgroundImage: 'url(' + playing.imgUrl + ')' }"></div>
    <div class="content">
      <div class="header">
        <i class="icon icon-left goback"
           @click="hideListenAction"></i>
        <i class="icon icon-share share"></i>
        <div class="title">
          <p class="name">{{ playing.name }}</p>
          <p class="singer">{{ playing.singer }}</p>
        </div>
      </div>
      <div class="cd">
        <div class="swith-line">
          <div :class="['triger', { pause: !isStart }]"></div>
        </div>
        <div class="wrapper">
          <div :class="['cd-bg', 'cd-animation', { 'cd-animation-stop': !isStart }]">
            <div class="img-bg"
                 :style="{ backgroundImage: 'url(' + playing.imgUrl + ')' }"></div>
          </div>
        </div>
      </div>
      <div class="Controller">
        <div class="dosomething">
          <i class="icon icon-like"></i>
          <i class="icon icon-download"></i>
          <i class="icon icon-msg"></i>
          <i class="icon icon-list-circle-small"></i>
        </div>
        <div class="progressbar">
          <span class="span-left">{{ songTime(currentTime) }}</span>
          <div class="progress">
            <span class="currentProgress"
                  :style="{ width: ControllerWidth }"></span>
            <span class="ball"
                  @mousedown="mouseDrag($event)"
                  @touchstart="touchDrag($event)"
                  :style="{ left: ControllerWidth }"></span>
          </div>
          <span class="span-right">{{ songTime(duration) }}</span>
        </div>
        <div class="control">
          <i :class="['icon', getModel ]" @click="setModel"></i>
          <i class="icon icon-prevdetail" @click="switchPlaying('prev')"></i>
          <!--icon-pause-detail-->
          <i :class="['icon','statr', isStart ? 'icon-pause-detail' : 'icon-playdetail']"
             @click="audioController"></i>
          <i class="icon icon-nextdetail" @click="switchPlaying('next')"></i>
          <i class="icon icon-list-music" @click="showPlayingListAction"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  import { utils } from './../../../static/js/utils'
  import PlayingList from './playing-list'
  export default {
    name: "listening",
    data() {
      return {
        el: this.$refs.ball,
        loop: 0,
        duration: '',
        currentTime: '',
        Controller: '',
        ControllerWidth: 0,
        loopModel: [
          { type: 0, icon: 'icon-music-shunxu', tip: '列表循环'},
          { type: 1, icon: 'icon-music-danqu1', tip: '单曲循环'},
          { type: 2, icon: 'icon-music-random', tip: '随机播放'}
        ],
        loopList: []
      }
    },
    computed: {
      ...mapState({
        listenIsShow: state => state.listening.listenIsShow,
        isStart: state => state.listening.isStart,
        songList: state => state.listening.songList,
        playing: state => state.listening.playing,
        playingIndex: state => state.listening.playingIndex
      }),
      getModel() {
        return this.loopModel[this.loop].icon;
      }
    },
    methods: {
      ...mapActions([
        'hideListenAction',
        'startListenAction',
        'stopListenAction',
        'rewriteSongListAction',
        'insertSongListAction',
        'updatePlayingAction',
        'updatePlayingIndexAction',
        'showPlayingListAction'
      ]),
      songTime(time){
        if(time){
          let minute = parseInt(time/60);
          minute = minute < 10 ? '0' + minute : minute;
          let second = parseInt(time % 60);
          second = second < 10 ? '0' + second : second;
          return minute + ':' + second;
        }else{
          return '00:00';
        }
      },
      getPlayingIndex(type) {
        switch (type){
          case 'next':
            if(this.playingIndex < this.songList.length - 1) {
              this.updatePlayingIndexAction(this.playingIndex + 1);
            }else {
              this.updatePlayingIndexAction(0);
            }
            break;
          case 'prev':
            if(this.playingIndex != 0) {
              this.updatePlayingIndexAction(this.playingIndex - 1);
            }else {
              this.updatePlayingIndexAction(this.songList.length - 1);
            }
            break;
          case 'random':
            if(this.loopList.length == this.songList.length){
              this.loopList = [];
            }
            let index = utils.getRandom(this.loopList,0 ,this.songList.length);
            this.updatePlayingIndexAction(index);
            this.loopList.push(index);
        }
      },
      getLenght() {
        this.duration = this.$refs.audio.duration;
      },
      setTime() {
        this.currentTime = this.$refs.audio.currentTime;
        this.ControllerWidth = parseFloat(this.currentTime / this.duration) * 100 + '%';
        this.getLenght();
      },
      startPlay() {
        this.$refs.audio.autoplay = 'autoplay';
        this.getLenght();
        this.startListenAction();
        const playPromise = this.$refs.audio.play();
        if (playPromise !== null){
          playPromise.catch(() => { this.$refs.audio.play(); })
        }
        //this.$refs.audio.play();
        this.Controller = setInterval(this.setTime, 50);
      },
      stopPlay() {
        clearInterval(this.Controller);
        this.stopListenAction();
        this.$refs.audio.pause();
      },
      clearAll() {
        this.stopPlay();
        this.duration = 0;
        this.currentTime = 0;
        this.ControllerWidth = 0;
      },
      switchPlaying(type) {
        this.clearAll();
        if(this.loop == 0){
          this.getPlayingIndex(type);
        }else if(this.loop == 2) {
          this.getPlayingIndex('random');
        }
        this.updatePlayingAction(this.songList[this.playingIndex]);
        this.$refs.audio.load();
        this.startPlay();
      },
      setModel() {
        let num = this.loopModel.length;
        if(this.loop == num - 1){
          this.loop = 0;
        }else {
          this.loop += 1;
        }
      },
      audioController() {
        if(this.isStart){
          this.stopPlay();
        }else {
          this.startPlay();
        }
      },
      mouseDrag(el) {
        var disX = 0,
          parent = el.currentTarget.parentNode,
          oldleft = parseFloat(el.currentTarget.style.left) / 100,
          w = parent.offsetWidth,
          ratio = 0;
        disX = el.clientX;
        document.onmousemove=(e)=>{
          clearInterval(this.Controller);
          ratio = (e.clientX - disX) / w + oldleft;
          this.currentTime = ratio;
          this.ControllerWidth = ratio * 100 + '%';
        }
        document.onmouseup=(e)=>{
          if(!this.duration){
            this.duration = 0;
          }else {
            this.$refs.audio.currentTime = this.duration * ratio;
            this.Controller = setInterval(this.setTime, 50);
          }
          document.onmousemove=null;
          document.onmouseup=null;
        };
      },
      touchDrag(el) {
        var disX = 0,
          parent = el.currentTarget.parentNode,
          oldleft = parseFloat(el.currentTarget.style.left) / 100,
          w = parent.offsetWidth,
          ratio = 0;
        disX = el.changedTouches[0].pageX
        document.ontouchmove=(e)=>{
          clearInterval(this.Controller);
          ratio = (e.changedTouches[0].pageX - disX) / w + oldleft;
          this.currentTime = ratio;
          this.ControllerWidth = ratio * 100 + '%';
        }
        document.ontouchend=(e)=>{
          if(!this.duration){
            this.duration = 0;
          }else {
            this.$refs.audio.currentTime = this.duration * ratio;
            this.Controller = setInterval(this.setTime, 50);
          }
          document.ontouchmove=null;
          document.ontouchend=null;
        };
      }
    },
    watch: {
      ControllerWidth: function (newValue, oldValue) {
        if(newValue == '100%'){
          this.switchPlaying('next');
        }
      },
      playing: function(n,o) {
        this.clearAll();
        this.$refs.audio.load();
        this.startPlay();
      }
    },
    mounted() {
      let songList = [
        {
          id: 0,
          name: 'You Belong With Me',
          singer: 'Taylor Swift',
          url: './../../../static/mp3/taylor%20swift%20-%20you%20belong%20with%20me.mp3',
          imgUrl: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=1cb22fbd9413b07ea9b0585a6dbefa46/e4dde71190ef76c640af53b79a16fdfaaf516729.jpg',
          lrc: ''
        },
        {
          id: 1,
          name: '红色高跟鞋',
          singer: '蔡健雅',
          url: './../../../static/mp3/蔡健雅%20-%20红色高跟鞋.mp3',
          imgUrl: 'http://p1.music.126.net/2toWuH2oD6c0dM6QLdThzg==/109951163165824418.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 2,
          name: '忽如远行客',
          singer: '云の泣',
          url: './../../../static/mp3/云の泣%20-%20忽如远行客.mp3',
          imgUrl: 'http://p1.music.126.net/tHAfnugCElS93EDp5cHLIw==/8909342719897560.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 3,
          name: '龙卷风',
          singer: 'G.E.M.邓紫棋',
          url: './../../../static/mp3/G.E.M.邓紫棋%20-%20龙卷风.mp3',
          imgUrl: 'http://p1.music.126.net/UjLNuIBU47XdHd24e3U21w==/6631154627821015.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 4,
          name: 'Purple Passion',
          singer: 'Diana Boncheva',
          url: './../../../static/mp3/Diana%20Boncheva%20-%20Purple%20Passion.mp3',
          imgUrl: 'http://p1.music.126.net/_LSagRKhZzUsjSy5fIAMsg==/923589767384661.jpg?param=130y130',
          lrc: ''
        }
      ];
      this.rewriteSongListAction(songList);
      this.getLenght();
    },
    components: {
      PlayingList
    }
  }
</script>

<style lang="scss" scoped>
  .listening{
    width: 100%;
    height: 100%;
    background-color: $fontColor;
    @include fixed-point(96);
    overflow: hidden;
    transition: all .5s ease-out;
    >.audio{
      visibility: hidden;
    }
    >.blurlayer{
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .6) no-repeat center;
      background-size: cover;
      transform: scale(1.1);
      filter: blur(10px);
      @include absolute-point(97);
    }
    >.content{
      width: 100%;
      height: 100%;
      @include absolute-point(98);
      background-color: rgba(0,0,0,.6);
      >.header{
        color: #eee;
        width: 100%;
        height: 100px;
        @include absolute-point(98);
        .goback{
          @include absolute-point(98, 16px, 12px);
          font-size: 3rem;
        }
        .share{
          position: absolute;
          right: 0px;
          font-size: 4rem;
          margin: 12px 14px 0;
        }
        .title{
          padding-top: 40px;
          text-align: center;
          line-height: 28px;
          .name{
          }
          .singer{
            font-size: 1.2rem;
          }
        }
      }
      >.cd{
        margin-top: 100px;
        overflow: hidden;
        position: relative;
        display: block;
        >.swith-line{
          width: 80%;
          height: 1px;
          background-image:
            linear-gradient(270deg,hsla(0,0%,100%,0),
              hsla(0,0%,100%,.6),hsla(0,0%,100%,0));
          margin: 0 auto;
          >.triger{
            position: absolute;
            top: -17px;
            left: 50%;
            width: 90px;
            height: 140px;
            transform: translateX(-16px) rotate(-2deg);
            background: url(./../../assets/images/playing/swith.png) no-repeat;
            background-size: cover;
            transform-origin: 13px 16px;
            transition: all .3s;
            z-index: 100;
          }
          >.pause{
            transform: translateX(-16px) rotate(-30deg);
          }
        }
        >.wrapper{
          width: 44vh;
          height: 44vh;
          position: relative;
          margin: 55px auto 0;
          position: relative;
          >.cd-bg{
            width: 100%;
            height: 100%;
            @include absolute-point(98);
            background: url(./../../assets/images/playing/cd-mine.png) no-repeat;
            background-size: cover;
            >.img-bg{
              width: 64%;
              height: 64%;
              background: url(./../../assets/images/swiper/taylor-swift.jpg) no-repeat center;
              background-size: cover;
              border-radius: 50%;
              margin: 18% auto;
            }
          }
          .cd-animation{
            animation: cd-animation 20s linear infinite;
          }
          .cd-animation-stop{
            animation-play-state:paused;
          }
          @keyframes cd-animation {
            0%{
              transform: rotate(0);
            }
            100%{
              transform: rotate(360deg);
            }
          }
        }
      }
      >.Controller{
        @include fixed-point(98, bottom);
        width: 100%;
        >.dosomething{
          width: 70vw;
          height: 40px;
          margin: 0 auto 3vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          >i{
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #eee;
            font-size: 2.5rem;
          }
        }
        >.progressbar{
          width: 90%;
          height: 40px;
          margin: 0 auto 0;
          text-align: center;
          align-items: center;
          display: flex;
          >span{
            color: #eee;
          }
          >.progress{
            margin: 0 12px;
            flex: 1;
            height: 2px;
            background: #eee;
            position: relative;
            border-radius: 1px;
            >.currentProgress{
              height: 2px;
              width: 0;
              background-color: $mainColor;
              @include absolute-point(98);
            }
            >.ball{
              width: 16px;
              height: 16px;
              background-color: #eee;
              border-radius: 50%;
              margin-left: -8px;
              @include absolute-point(98, -7px);
              left: 0;
            }
          }
        }
        >.control{
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          >i{
            flex: 1;
            color: #eee;
            font-size: 2.8rem;
          }
          >.statr{
            font-size: 6rem;
          }
        }
      }
    }
  }
  .listeningTab{
    transform: translateX(100%);
  }
</style>
