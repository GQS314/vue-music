<template>
  <ul class="meunList">
    <li v-for="(item, index) in items"
        :key="index">
      <i :class="'icon-' + item.icon" class="icon"></i>
      <div class="meunItem">
        {{ item.title }}
        <span>
          {{ item.tip }}
          <i class="icon icon-right"></i>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "meun-list",
    props: ['items']
  }
</script>

<style lang="scss" scoped>
  .meunList{
    >li{
      @include active-bg;
      >i{
        float: left;
        width: 50px;
        height: 50px;
        line-height: 50px;
        color: $mainColor;
        font-size: 2rem;
        text-align: center;
      }
      >.meunItem{
        height: 50px;
        line-height: 50px;
        font-size: 1.5rem;
        font-weight: lighter;
        margin-left: 50px;
        border-bottom: 1px solid $lineColor;
        >span{
          float: right;
          margin-right: 8px;
          color: #999;
          font-size: 1.3rem;
          >i{
          }
        }
      }
      &:last-child .meunItem{
        border-color: #fff;
      }
    }
  }
</style>
