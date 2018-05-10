<template>
  <div class="container">
    <tabhead @sttingShow="showMenuAction"></tabhead>
    <!--<keep-alive>-->
      <!--<router-view></router-view>-->
    <!--</keep-alive>-->
    <index-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </index-content>
    <tabfoot></tabfoot>
    <transition name="coverTab">
      <div v-show="getIsShow" class="page-cover"
           @click="hideMenuAction"></div>
    </transition>
    <transition name="setTab">
      <setting v-show="getIsShow"></setting>
    </transition>
    <transition name="listenTab">
      <listening v-show="listenIsShow"></listening>
    </transition>
  </div>
</template>

<script>
  import tabhead from '../common/tabhead'
  import tabfoot from '../common/tabfoot'
  import listening from '../listening/listening'
  import setting from '../setting/setting'
  import indexContent from './index-content'
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: "index",
    computed: {
      ...mapState({
        listenIsShow: state => state.listening.listenIsShow
      }),
      ...mapGetters([
        'getIsShow'
      ])
    },
    methods: {
      ...mapActions([
        'showMenuAction',
        'hideMenuAction'
      ])
    },
    components: {
      tabhead,
      tabfoot,
      listening,
      setting,
      indexContent
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: $h-heigth 0 $f-heigth;
    >.page-cover{
      @include cover(0.6);
      @include fixed-point(92);
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
      animation: listenTab-in .5s reverse;
    }
    @keyframes listenTab-in {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
</style>
