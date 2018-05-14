<template>
  <div class="container">
    <tabhead></tabhead>
    <index-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </index-content>
    <tabfoot></tabfoot>
    <transition name="coverTab">
      <div v-show="pageCoverIsShow" class="page-cover"
           @click="hidePageCoverAction"
           @touchmove="dontTouchDrag($event)"></div>
    </transition>
    <transition name="setTab">
      <setting v-show="isShow"></setting>
    </transition>
    <listening></listening>
    <playing-list></playing-list>
  </div>
</template>

<script>
  import tabhead from '../common/tabhead'
  import tabfoot from '../common/tabfoot'
  import listening from '../listening/listening'
  import setting from '../setting/setting'
  import indexContent from './index-content'
  import PlayingList from './../listening/playing-list'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "index",
    computed: {
      ...mapState({
        isShow: state => state.menulist.isShow,
        pageCoverIsShow: 'pageCoverIsShow',
        listenIsShow: state => state.listening.listenIsShow
      })
    },
    methods: {
      ...mapActions([
        'hidePageCoverAction'
      ]),
      dontTouchDrag(e) {
        e.preventDefault();
      }
    },
    components: {
      tabhead,
      tabfoot,
      listening,
      setting,
      indexContent,
      PlayingList
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: $h-heigth;
    >.page-cover{
      @include cover(0.6);
      @include fixed-point(100);
      &.coverTab-enter-active {
        animation: coverTab-in .5s;
      }
      &.coverTab-leave-active {
        animation: coverTab-in .5s reverse;
      }
      @keyframes coverTab-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: .6;
        }
      }
    }
    .setTab-enter-active {
      animation: setTab-in .5s;
    }
    .setTab-leave-active {
      animation: setTab-in .5s reverse;
    }
    @keyframes setTab-in {
      0% {
        transform: translateX(-280px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .listenTab-enter-active {
      animation: listenTab-in .5s;
    }
    .listenTab-leave-active {
      animation: listenTab-in .5s ease-in reverse;
    }
    @keyframes listenTab-in {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
</style>
