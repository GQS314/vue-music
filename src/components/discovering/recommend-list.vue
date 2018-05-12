<template>
  <section class="recommend-list">
    <div class="discover">
      <span>{{ items.title }}</span>
      <i class="icon icon-right"></i>
    </div>
    <ul class="list">
      <li v-for="(item, index) in items.list"
          :key="index">
        <div class="itemImg"
             :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
          <span class="num">
            <i class="icon icon-erji"></i>
            {{ item.listening }}
          </span>
          <span class="tip">{{ item.tip }}</span>
        </div>
        <div class="itemTitle">
          <p>{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "recommend-list",
    props: ['items']
    
  }
</script>

<style lang="scss" scoped>
  .recommend-list{
    >.discover{
      height: 40px;
      line-height: 40px;
      margin: 16px 0 2px;
      >span{
        display: inline-block;
        font-size: 1.6rem;
        position: relative;
        color: $fontColor;
        padding-left: 12px;
        line-height: 18px;
        vertical-align: middle;
        &::before{
          content: '';
          display: block;
          width: 3px;
          height: 100%;
          background: $mainColor;
          @include absolute-point(10);
        }
      }
      >i{
        color: #999;
        vertical-align: middle;
      }
    }
    >.list{
      width: 100%;
      column-count: 3;
      column-gap: 2px;
      >li{
        margin-bottom: 2px;
        >.itemImg{
          /*height: 10rem;*/
          position: relative;
          background-size: cover;
          border-radius: 5px;
          &::before{
            content: '';
            display: inline-block;
            padding-bottom: 100%;
            width: .1px;
            vertical-align: middle;
          }
          >span{
            @include text-overflow;
            display: block;
            width: 100%;
            color: #eee;
            font-size: 12px;
            padding: 0 5px;
          }
          >.num{
            @include absolute-point(10, 3px);
            text-align: right;
          }
          >.tip{
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
        >.itemTitle{
          font-size: 1.2rem;
          color: $fontColor;
          @include lineclamp(36, 2);
        }
      }
    }
  }
</style>
