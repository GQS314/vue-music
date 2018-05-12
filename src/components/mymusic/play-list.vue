<template>
  <section>
    <div class="playset"
         @click="settoggle">
      <i class="icon icon-down toggle"
         :class="setToggle"></i>
      <i class="icon icon-list-circle setting"></i>
      <span>{{ playList.title }}({{ playList.list.length }})</span>
    </div>
    <transition name="playlist">
      <ul v-show="playShow" class="playlist">
        <li v-for="(item, index) in playList.list"
            :key="index">
          <div class="bgimg"
               :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"></div>
          <div class="playInfo">
            <p class="playtitle">{{ item.title }}</p>
            <p class="playnum">
              {{ item.num }}首
              <span v-if="item.download > 0">,已下载{{ item.download }}首</span>
            </p>
          </div>
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "play-list",
    props: ['playList'],
    data() {
      return {
        playShow: true,
        setToggle: ''
      }
    },
    methods: {
      settoggle() {
        this.playShow = !this.playShow;
        if(this.setToggle==''){
          this.setToggle = 'settoggle';
        }else if(this.setToggle == 'settoggle'){
          this.setToggle = 'restore';
        }else {
          this.setToggle = 'settoggle';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .playset{
    height: 30px;
    line-height: 30px;
    background: #e1e1e1;
    >i{
      width: 30px;
      height: 30px;
      line-height: 30px;
      color: #b0b0b0;
      text-align: center;
    }
    >.toggle{
      float: left;
      margin-left: 5px;
    }
    .settoggle{
      animation: settoggle .5s forwards;
    }
    @keyframes settoggle {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(-90deg);
      }
    }
    .restore{
      animation: restore .5s forwards;
    }
    @keyframes restore {
      0%{
        transform: rotate(-90deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }
    >.setting{
      float: right;
    }
    >span{
      color: $fontColor;
    }
  }
  .playlist{
    &.playlist-enter-active, &.playlist-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    &.playlist-enter, &.playlist-leave-to{
      transform: translateX(5px);
      opacity: 0;
    }
    >li{
      height: 60px;
      @include active-bg;
      >.bgimg{
        margin: 5px;
        width: 50px;
        height: 50px;
        float: left;
        background-size: cover;
      }
      >.playInfo{
        padding-top: 8px;
        >.playtitle{
          font-size: 1.5rem;
          color: $fontColor;
          font-weight: lighter;
        }
        >.playnum{
          padding-top: 2px;
          color: #666;
          font-size: 1rem;
        }
      }
    }
  }
</style>
