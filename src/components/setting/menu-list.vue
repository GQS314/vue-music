<template>
  <li class="s-item"
      :class="{ lastItem: item.next === 0 }">
    <i :class="'icon-' + item.icon"></i>
    <span class="title">{{ item.title }}</span>
    <span class="tip" v-if="item.tip">{{ item.tip }}</span>
  </li>
</template>

<script>
  export default {
    name: "menu-list",
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  .s-item{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    color: #666;
    font-size: 1.5rem;
    font-weight: lighter;
    @include text-overflow;
    >.tip{
      max-width: 110px;
      font-weight: normal;
      float: right;
      font-size: 1.2rem;
      color: #888;
      @include text-overflow;
    }
  }
  .lastItem{
    border-bottom: 4px solid #eaeaea;
  }
</style>
