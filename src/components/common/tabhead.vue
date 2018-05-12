<template>
  <header class="h-warpper">
    <i class="h-set icon-menu"
       @click="sttingShow"></i>
    <i class="h-sec icon-search"></i>
    <div class="h-tab">
      <router-link v-for="(meun, index) in meuns"
                   :to="meun.route"
                   :key="index"
                   :class="['icon-'+meun.icon, { active: currentTab === index }]"
                   @click.native="changTab(index)"></router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "tabhead",
    data() {
      return {
        currentTab : 1,
        meuns: [
          {icon: 'music', route: '/mymusic'},
          {icon: 'wangyi', route: '/discovering'},
          {icon: 'community', route: '/friend'}
        ]
      }
    },
    methods: {
      sttingShow() {
        this.$emit('sttingShow');
      },
      changTab(index) {
        this.currentTab = index;
      }
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
    }
    >.h-sec{
      float: right;
    }
    i,a{
      color: #eee;
      font-size: 2.5rem;
      line-height: $h-heigth;
      padding: 0 15px;
      cursor: pointer;
    }
    >.h-tab{
      text-align: center;
      >a.active{
        color: #ccafaf;
      }
    }
  }
</style>
