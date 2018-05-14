<template>
  <section :class="['listening', {isShow: !listenIsShow}]"
           @touchmove="dontTouchDrag($event)">
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
          <div class="cd-bg-animation" ref="cdBgAnimation">
            <div class="cd-bg"
                 ref="singerImg">
              <div class="img-bg"
                   :style="{ backgroundImage: 'url(' + playing.imgUrl + ')' }"></div>
            </div>
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
            <span class="bufferPercent"
                  :style="{ width: bufferPercentWidth + '%' }"></span>
            <span class="currentProgress"
                  :style="{ width: ControllerWidth + '%' }"></span>
            <span class="ball"
                  @mousedown.prevent="mouseDrag($event)"
                  @touchstart.prevent="touchDrag($event)"
                  :style="{ left: ControllerWidth + '%' }"></span>
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
        bufferController: '',
        bufferPercentWidth: 0,
        bgImgRotate: '',
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
      },
      getBufferPercentWidth() {
        return this.bufferPercentWidth >= 100 ? 100 : this.bufferPercentWidth;
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
      //将歌曲长度/播放长度 转换为具体时间
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
      //处理任意循环模式下，获取下一首歌曲
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
      //获取歌曲总长度
      getLenght() {
        this.duration = this.$refs.audio.duration;
      },
      //持续获取缓存进度
      setbufferPercent(){
        let timeRanges = this.$refs.audio.buffered;
        if(timeRanges.length != 0){
          let timeBuffered = timeRanges.end(timeRanges.length - 1);
          this.bufferPercentWidth = parseFloat(timeBuffered / this.duration) * 100;
        }
      },
      //持续获取播放进度
      setTime() {
        this.currentTime = this.$refs.audio.currentTime;
        this.ControllerWidth = parseFloat(this.currentTime / this.duration) * 100;
        this.getLenght();
      },
      //开始播放
      startPlay() {
        this.$refs.singerImg.classList.add('cd-animation');
        this.$refs.audio.autoplay = 'autoplay';
        this.getLenght();
        this.startListenAction();
        const playPromise = this.$refs.audio.play();
        if (playPromise !== null){
          playPromise.catch(() => {
            this.$refs.audio.play();
          })
        }
        this.bufferController = setInterval(this.setbufferPercent, 50);
        this.Controller = setInterval(this.setTime, 50);
      },
      //暂停播放
      stopPlay() {
        let cdRotate = getComputedStyle(this.$refs.singerImg).transform;
        let imgRotate = getComputedStyle(this.$refs.cdBgAnimation).transform;
        this.$refs.cdBgAnimation.style.transform = imgRotate === 'none'
          ? cdRotate
          : cdRotate.concat(' ', imgRotate);
        this.$refs.singerImg.classList.remove('cd-animation');
        clearInterval(this.Controller);
        this.stopListenAction();
        this.$refs.audio.pause();
      },
      //切歌时清理一切
      clearAll() {
        clearInterval(this.bufferController);
        this.stopPlay();
        this.duration = 0;
        this.currentTime = 0;
        this.ControllerWidth = 0;
        this.bufferPercentWidth = 0;
      },
      //获取下一首歌，并开始播放
      switchPlaying(type) {
        this.clearAll();
        if(this.loop == 0){
          this.getPlayingIndex(type);
        }else if(this.loop == 2) {
          this.getPlayingIndex('random');
        }
        this.updatePlayingAction(this.songList[this.playingIndex]);
        this.startPlay();
      },
      //设置循环模式
      setModel() {
        let num = this.loopModel.length;
        if(this.loop == num - 1){
          this.loop = 0;
        }else {
          this.loop += 1;
        }
      },
      //开始/停止 按钮
      audioController() {
        if(this.isStart){
          this.stopPlay();
        }else {
          this.startPlay();
        }
      },
      //鼠标拖拽进度条事件
      mouseDrag(el) {
        var disX = 0,
          parent = el.currentTarget.parentNode,
          oldleft = parseFloat(el.currentTarget.style.left) / 100,
          w = parent.offsetWidth,
          ratio = 0;
        disX = el.clientX;
        document.onmousemove=(e)=>{
          clearInterval(this.Controller);
          ratio = parseFloat((e.clientX - disX) / w + oldleft);
          this.currentTime = ratio;
          this.ControllerWidth = ratio * 100;
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
      //移动端拖拽进度条事件
      touchDrag(el) {
        var disX = 0,
          parent = el.currentTarget.parentNode,
          oldleft = parseFloat(el.currentTarget.style.left) / 100,
          w = parent.offsetWidth,
          ratio = 0;
        disX = el.changedTouches[0].pageX
        document.ontouchmove=(e)=>{
          clearInterval(this.Controller);
          ratio = parseFloat((e.changedTouches[0].pageX - disX) / w + oldleft);
          this.currentTime = ratio;
          this.ControllerWidth = ratio * 100;
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
      },
      dontTouchDrag(e) {
        e.preventDefault();
      }
    },
    watch: {
      ControllerWidth: function (newValue, oldValue) {
        if(newValue >= 100){
          this.ControllerWidth = '100%';
          this.switchPlaying('next');
        }
      },
      bufferPercentWidth: function (n) {
        if(n == '100%'){
          clearInterval(this.bufferController);
        }
      },
      playingIndex: function(n,o) {
        // this.clearAll();
        // this.updatePlayingAction(this.songList[this.playingIndex]);
        // this.$refs.audio.load();
        // this.startPlay();
      }
    },
    mounted() {
      let songList = [
        {
          id: 0,
          name: 'You Belong With Me',
          singer: 'Taylor Swift',
          url: 'http://mp3.qqmusic.cc/yq/639144.mp3',
          imgUrl: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=1cb22fbd9413b07ea9b0585a6dbefa46/e4dde71190ef76c640af53b79a16fdfaaf516729.jpg',
          lrc: ''
        },
        {
          id: 1,
          name: '远走高飞 (合唱版)',
          singer: '金志文、徐佳莹',
          url: 'http://sc1.111ttt.cn/2017/1/05/09/298092036393.mp3',
          imgUrl: 'http://p1.music.126.net/elfqBKIdad0KYCCeKQpDSA==/18700493767108166.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 2,
          name: '红昭愿',
          singer: '音阙诗听',
          url: 'http://mp3.qqmusic.cc/yq/213370857.mp3',
          imgUrl: 'http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 3,
          name: '我们不一样',
          singer: '大壮',
          url: 'http://sc1.111ttt.cn/2017/1/11/11/304112002493.mp3',
          imgUrl: 'http://p1.music.126.net/e8rrwkOED4RbeaKuaVOcJA==/18997361904874206.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 4,
          name: '感谢你曾来过',
          singer: 'Ayo97/阿涵',
          url: 'http://mp3.qqmusic.cc/yq/205137019.mp3',
          imgUrl: 'http://p1.music.126.net/iL36G-e6rm2zwCUmlL4pOw==/109951162859100521.jpg?param=130y130',
          lrc: ''
        },
        {
          id: 5,
          name: '凉城',
          singer: '任然',
          url: 'http://mp3.qqmusic.cc/yq/109391881.mp3',
          imgUrl: 'http://p1.music.126.net/9RQepityGQUfi5Rbcz7xCQ==/18747772766555079.jpg?param=130y130',
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
    @include isShow(X, 100%, .5s, ease-out);
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
          padding-top: 3vh;
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
        margin-top: 12vh;
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
            background: url('./../../assets/images/playing/swith.png') no-repeat;
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
          >.cd-bg-animation{
            width: 100%;
            height: 100%;
            @include absolute-point(98);
            >.cd-bg{
              width: 100%;
              height: 100%;
              background: url('./../../assets/images/playing/cd-mine.png') no-repeat;
              background-size: cover;
              overflow: hidden;
              >.img-bg{
                width: 64%;
                height: 64%;
                background: no-repeat center;
                background-size: cover;
                border-radius: 50%;
                margin: 18% auto;
              }
              &.cd-animation{
                animation: cd-animation 20s linear infinite;
              }
              &.cd-animation-stop{
                -webkit-animation-play-state: paused;
                -moz-animation-play-state: paused;
                animation-play-state: paused;
              }
              @keyframes cd-animation {
                100%{
                  transform: rotate(1turn);
                }
              }
            }
          }
        }
      }
      >.Controller{
        @include fixed-point(98, bottom);
        width: 100%;
        >.dosomething{
          width: 70vw;
          height: 34px;
          margin: 0 auto 2vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          >i{
            width: 34px;
            height: 34px;
            line-height: 40px;
            color: #eee;
            font-size: 2.5rem;
          }
        }
        >.progressbar{
          width: 90%;
          height: 34px;
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
            background: rgba(0,0,0,.5);
            position: relative;
            border-radius: 1px;
            >.bufferPercent{
              height: 2px;
              width: 0;
              background-color: #eee;
              @include absolute-point(98);
            }
            >.currentProgress{
              height: 2px;
              width: 0;
              background-color: $mainColor;
              @include absolute-point(99);
            }
            >.ball{
              width: 16px;
              height: 16px;
              background-color: #eee;
              border-radius: 50%;
              margin-left: -8px;
              @include absolute-point(99, -7px);
              left: 0;
            }
          }
        }
        >.control{
          width: 100%;
          height: 80px;
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
</style>
