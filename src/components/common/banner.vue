<template>
  <section class="swiper-container autoHeigth">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item, index) in items"
           :key="index"
           :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"
           :title="item.title">
        <span class="type"
              :style="{ backgroundColor: getColor(item.type).color }">
          {{ getColor(item.type).title }}
        </span>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "banner",
    props: ['items'],
    data() {
      return {
        typeColor: [
          {type: 0, title: '首发', color: '#cd2f2c'},
          {type: 1, title: '热门', color: '#bf08a2'},
          {type: 2, title: '华语', color: '#c8a600'},
          {type: 3, title: '欧美', color: '#72cb00'},
          {type: 4, title: '电音', color: '#06c9a6'}
        ]
      }
    },
    methods: {
      getColor(index) {
        return this.typeColor[index];
      }
    },
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        mousewheel: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop : true,
        on: {
          click() {
            console.log(this);
          }
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    >.swiper-wrapper {
      width: 100%;
      >.swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        position: relative;
        &::before{
          content: '';
          display: inline-block;
          padding-bottom: 45%;
          vertical-align: middle;
        }
        >img {
          width: 100%;
          height: 100%;
        }
        >.type{
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 10;
          color: #eee;
          border-radius: 8px 0 0 0;
          height: 22px;
          line-height: 22px;
          padding: 0 12px;
        }
      }
    }
    .swiper-pagination-bullet-active{
      background:$mainColor!important;
    }
  }
</style>
