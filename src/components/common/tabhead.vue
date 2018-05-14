<template>
  <header class="h-warpper">
    <i class="h-set icon-menu"
       @click="showMenuAction"></i>
    <div :class="['h-play', { 'h-playing': isStart }]"
         @click="showListenAction">
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
    </div>
    <div class="h-tab">
      <i class="h-sec icon-search"></i>
      <input type="search" results="10" placeholder="搜出好心情~">
    </div>
  </header>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "tabhead",
    computed: {
      ...mapState({
        isShow: state => state.menulist.isShow,
        isStart: state => state.listening.isStart
      })
    },
    methods: {
      ...mapActions([
        'showMenuAction',
        'showListenAction'
      ])
    }
  }
</script>
<!--为了使用sass，我们需要安装sass的依赖包
npm install sass-resources-loader --save-dev
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass
-->
<style lang="scss">
  .h-warpper{
    background-color: $mainColor;
    height: $h-heigth;
    width: 100%;
    @include fixed-point(90);
    >.h-set{
      float: left;
      color: #eee;
      font-size: 2.5rem;
      line-height: $h-heigth;
      padding: 0 15px;
      cursor: pointer;
    }
    >.h-play{
      cursor: pointer;
      float: right;
      width: 50px;
      height: 40px;
      padding: 10px 15px 10px;
      transform: rotate(180deg);
      >div{
        float: left;
        margin: 0 3px 0 0;
        width: 2px;
        background: #eaeaea;
      }
      >.a{
        height: 80%;
      }
      >.b{
        height: 50%;
      }
      >.c{
        height: 100%;
      }
      >.d{
        height: 60%;
      }
    }
    >.h-playing{
      >.a{@include playing(aa, 80%)}
      >.b{@include playing(bb, 50%)}
      >.c{@include playing(cc, 100%)}
      >.d{@include playing(dd, 60%)}
    }
    >.h-tab{
      color: #999;
      position: relative;
      width: 200px;
      margin: 0 auto;
      >i{
        @include absolute-point(90, 9px, 6px);
        font-size: 2rem;
      }
      >input{
        border: 0;
        border-radius: 20px;
        width: 200px;
        height: 26px;
        line-height: 20px;
        padding: 1px 10px 1px 30px;
        margin: 7px auto 0;
        outline:none;
        user-select: auto;
        -moz-user-select: auto;
        -webkit-user-select: auto
      }
    }
  }
</style>
