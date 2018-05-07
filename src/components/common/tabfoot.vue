<template>
  <footer class="f-warpper">
    <div class="music-play">
      <i class="icon-play"></i>
      <i class="icon-list-music"></i>
    </div>
    <div class="music-info">
      <img src="../../assets/images/logo.png" alt="">
      <div class="music-detail">
        <p class="music-name">歌名</p>
        <p class="music-singer">演唱</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "tabfoot"
  }
</script>

<style lang="scss" scoped>
  .f-warpper{
    height: $f-heigth;
    width: 100%;
    @include fixed-point(90, bottom);
    background-color: #fff;
    >.music-play{
      float: right;
      >i{
        color: #999;
        line-height: $f-heigth;
        font-size: 2.2rem;
        padding: 0 10px;
      }
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
