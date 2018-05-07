<template>
  <div class="container">
    <tabhead :currentTab="currentTab"
             @changTab="changTab"
             @sttingShow="setTogglr"></tabhead>
    <component :is="currentTabComponent"></component>
    <tabfoot></tabfoot>
    <transition name="coverTab">
      <div v-show="settingTogglr" class="page-cover"
           @click="setTogglr"></div>
    </transition>
    <setting :show="settingTogglr"></setting>
  </div>
</template>

<script>
  import tabhead from './common/tabhead'
  import tabfoot from './common/tabfoot'
  import listening from './listening/listening'
  import setting from './setting/setting'
  import discovering from './discovering/discovering'
  import mymusic from './mymusic/mymusic'
  import friend from './friend/friend'
  export default {
    name: "index",
    data() {
      return {
        currentTab: 1,
        settingTogglr: false
      }
    },
    methods: {
      changTab(index) {
        this.currentTab = index;
      },
      setTogglr() {
        this.settingTogglr = !this.settingTogglr;
      }
    },
    computed: {
      currentTabComponent() {
        const tabs = ['mymusic','discovering','friend'];
        return tabs[this.currentTab];
      }
    },
    components: {
      tabhead,
      tabfoot,
      listening,
      setting,
      discovering,
      mymusic,
      friend
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
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
  }
</style>
