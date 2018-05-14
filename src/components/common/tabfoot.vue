<template>
  <footer class="f-warpper">
    <router-link v-for="(menu, index) in menus"
                 :to="menu.route"
                 :key="index"
                 :class=" { active : currentTab === index }"
                 @click.native="changTab(index)">
      <i :class="['icon-'+menu.icon]"></i>
      <span>{{ menu.title }}</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: "tabfoot",
    data() {
      return {
        currentTab : 1,
        menus: [
          {title: '我的', icon: 'music', route: '/mymusic'},
          {title: '发现', icon: 'wangyi', route: '/discovering'},
          {title: '朋友', icon: 'community', route: '/friend'}
        ]
      }
    },
    methods: {
      changTab(index) {
        this.currentTab = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .f-warpper{
    height: $f-heigth;
    width: 100%;
    @include fixed-point(90, bottom);
    display: flex;
    border-top: 1px solid $lineColor;
    background: rgba(255,255,255,0.95);
    >a{
      display: block;
      flex: 1;
      height: $f-heigth;
      text-align: center;
      color: #666;
      >i{
        display: block;
        font-size: 2.1rem;
        margin-top: 4px;
      }
      >span{
        font-size: 1.2rem;
        display: block;
        margin-top: -2px;
      }
      &.active{
        color: $mainColor;
      }
    }
  }
</style>
