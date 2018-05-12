<template>
  <section class="djradio-list-premium">
    <div class="discover">
      <span>{{ premiumList.title }}</span>
      <i class="icon icon-right"></i>
    </div>
    <ul class="list">
      <li v-for="(item,index) in premiumList.list"
          :key="index">
        <div class="img"
             :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
          <span>{{ item.update }}</span>
        </div>
        <div class="content">
          <h5 class="title">{{ item.title }}</h5>
          <p class="text">{{ item.text }}</p>
          <p class="tip">{{ item.tip }}</p>
          <p class="money">¥ {{ item.money }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
	export default {
		name: "djradio-list-premium",
    props: ['premiumList']
	}
</script>

<style lang="scss" scoped>
  .djradio-list-premium{
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
      >li{
        width: 100%;
        height: 35vw;
        margin-bottom: 5px;
        >.img{
          width: 35vw;
          height: 35vw;
          margin-left: 5px;
          border-radius: 5px;
          position: relative;
          background-size: cover;
          background-position: center;
          float: left;
          >span{
            position: absolute;
            bottom: 3px;
            left: 5px;
            color: #eee;
            font-size: 1.2rem;
          }
        }
        >.content{
          height: 35vw;
          padding-top: 4vw;
          margin-left: 40vw;
          line-height: 7vw;
          vertical-align: middle;
          border-bottom: 1px solid $lineColor;
          >h5,>p{
            @include text-overflow;
          }
          >.title{
            font-size: 1.6rem;
          }
          >.text,>.tip{
            color: #999;
          }
          >.money{
            margin-top: 5px;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
  
</style>
