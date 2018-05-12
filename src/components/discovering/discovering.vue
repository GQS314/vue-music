<template>
  <section class="dis-conten">
    <nav class="nav">
      <ul>
        <li v-for="(menu, index) in menus"
            :key="index"
            :class="{ active: currentTab === index }"
            @click="changTab(index)">{{ menu.title }}</li>
      </ul>
    </nav>
    <keep-alive>
      <component :is="menus[currentTab].component"></component>
    </keep-alive>
  </section>
</template>

<script>
  import DiscoverList from './discover-list'
  import DjradioList from './djradio-list'
  export default {
    name: "discovering",
    data() {
      return {
        currentTab: 0,
        menus: [
          {title: '个性推荐', component: 'discover-list'},
          {title: '主播电台', component: 'djradio-list'}
        ]
      }
    },
    methods: {
      changTab(index) {
        this.currentTab = index;
      }
    },
    components: {
      DiscoverList,
      DjradioList
    }
  }
</script>

<style lang="scss" scoped>
  .dis-conten{
    padding-top: 35px;
    >.nav{
      width: 100%;
      position: fixed;
      top: $h-heigth;
      left: 0;
      z-index: 20;
      background: #fff;
      >ul{
        display: flex;
        align-items: stretch;
        >li{
          width: auto;
          flex: 1;
          text-align: center;
          height: 35px;
          line-height: 34px;
          border-bottom: 2px solid #fff;
        }
        >.active{
          color: $mainColor;
          border-bottom-color: $mainColor;
        }
      }
    }
  }
</style>
