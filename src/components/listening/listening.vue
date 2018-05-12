<template>
  <section :class="['listening', {listeningTab: !listenIsShow}]">
           <!--:style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">-->
    <div class="blurlayer"></div>
    <div class="content">
      <div class="header">
        <i class="icon icon-left goback"
           @click="hideListenAction"></i>
        <i class="icon icon-share share"></i>
        <div class="title">
          <p class="name">我说鸡蛋你说要</p>
          <p class="singer">鸡蛋</p>
        </div>
      </div>
      <div class="cd">
        <div class="swith-line">
          <div class="triger pause"></div>
        </div>
        <div class="wrapper">
          <div class="cd-bg">
            <div class="img-bg"></div>
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
          <span class="span-left">00:00</span>
          <div class="progress">
            <span class="currentProgress"></span>
            <span class="ball"></span>
          </div>
          <span class="span-right">04:00</span>
        </div>
        <div class="control">
          <i class="icon icon-music-shunxu"></i>
          <i class="icon icon-prevdetail"></i>
          <!--icon-pause-detail-->
          <i class="icon icon-playdetail statr"></i>
          <i class="icon icon-nextdetail"></i>
          <i class="icon icon-list-music"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name: "listening",
    computed: {
      ...mapState({
        listenIsShow: state => state.listening.listenIsShow
      })
    },
    methods: {
      ...mapActions([
        'hideListenAction'
      ])
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
    >.blurlayer{
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .6) url("../../assets/images/swiper/taylor-swift.jpg") no-repeat center;
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
            background: url("../../assets/images/playing/swith.png");
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
            background: url("../../assets/images/playing/cd-mine.png") no-repeat;
            background-size: cover;
            >.img-bg{
              width: 64%;
              height: 64%;
              background: url("../../assets/images/swiper/taylor-swift.jpg") no-repeat center;
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
            margin: 0 10px;
            flex: 1;
            height: 2px;
            background: #eee;
            position: relative;
            border-radius: 1px;
            >.currentProgress{
              height: 2px;
              width: 20%;
              background-color: $mainColor;
              @include absolute-point(98);
            }
            >.ball{
              width: 16px;
              height: 16px;
              background-color: #eee;
              border-radius: 50%;
              @include absolute-point(98, -7px);
              left: 20%;
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
