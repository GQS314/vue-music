<template>
  <footer class="f-warpper">
    <i class="icon-list-music items"></i>
    <div class="play">
      <i class="icon-play"></i>
    </div>
    <div class="music-info">
      <img src="../../assets/images/logo.png" alt="">
      <div class="music-detail" @click="showListenAction">
        <p class="music-name">歌名</p>
        <p class="music-singer">演唱</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "tabfoot",
    
    methods: {
      ...mapActions([
        'showListenAction'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .f-warpper{
    height: $f-heigth;
    width: 100%;
    @include fixed-point(90, bottom);
    padding: 2px 0;
    background-color: #fff;
    .play{
      float: right;
      width: 28px;
      height: 28px;
      display: inline-block;
      border: 2px solid #b1b1b1;
      border-radius: 50%;
      position: relative;
      margin: 7px 7px 0;
      >i{
        font-size: 1.3rem;
        font-weight: bold;
        @include absolute-point(90, 6px, 7px);
        color: #999;
      }
      .pause{
        font-size: 1.5rem;
        color: $mainColor;
        @include absolute-point(90, 4.5px, 4.5px);
      }
    }
    >.items{
      text-align: center;
      float: right;
      width: 40px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      font-size: 2.6rem;
      margin-top: 1px;
      color: #999;
    }
    >.music-info{
      >img{
        width: $f-heigth;
        height: $f-heigth;
        float: left;
        margin: 0 8px;
      }
    }
    .music-name{
      color: #333;
    }
    .music-singer{
      color: #aaa;
      font-size: 1rem;
    }
  }
</style>
