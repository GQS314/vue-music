<template>
  <header class="h-warpper">
    <i class="h-set icon-menu"
       @click="sttingShow"></i>
    <i class="h-sec icon-search"></i>
    <div class="h-tab">
      <i v-for="(tab, index) in tabs"
         :key="tab"
         :class="['icon-'+tab, { active: currentTab === index }]"
         @click="changTab(index)"></i>
    </div>
  </header>
</template>

<script>
  export default {
    name: "tabhead",
    props: ['currentTab'],
    data() {
      return {
        tabs: ['music', 'wangyi', 'community']
      }
    },
    methods: {
      sttingShow() {
        this.$emit('sttingShow');
      },
      changTab(index) {
        this.$emit('changTab',index);
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
    background-color: #c62f2f;
    height: $h-heigth;
    width: 100%;
    @include fixed-point(90);
    >.h-set{
      float: left;
    }
    >.h-sec{
      float: right;
    }
    i{
      color: #eee;
      font-size: 2.5rem;
      line-height: $h-heigth;
      padding: 0 15px;
      cursor: pointer;
    }
    >.h-tab{
      text-align: center;
      >i.active{
        color: #ccafaf;
      }
    }
  }
</style>
