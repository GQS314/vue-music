<template>
  <section>
    <div class="discover">
      <span>{{ items.title }}</span>
      <i class="icon icon-right"></i>
    </div>
    <ul class="recommend-list">
      <li v-for="(item, index) in items.list"
          :key="index">
        <div class="itemImg"
             :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
          <span>
            <i class="icon icon-erji"></i>
            {{ item.listening }}
          </span>
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
  .discover{
    height: 40px;
    line-height: 40px;
    >span{
      display: inline-block;
      font-size: 1.6rem;
      position: relative;
      color: #333;
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
  .recommend-list{
    width: 100%;
    column-count: 3;
    column-gap: 2px;
    >li{
      margin-bottom: 2px;
      >.itemImg{
        /*height: 10rem;*/
        position: relative;
        background-size: cover;
        &::before{
          content: '';
          display: inline-block;
          padding-bottom: 100%;
          width: .1px;
          vertical-align: middle;
        }
        >span{
          @include absolute-point(10, 3px);
          display: block;
          width: 100%;
          color: #eee;
          padding-right: 5px;
          text-align: right;
          font-size: 12px;
        }
      }
      >.itemTitle{
        font-size: 1rem;
        color: #333;
        @include lineclamp(36, 2);
      }
    }
  }
</style>
