<template>
  <section>
    <banner :items="bannerList"></banner>
    <ul class="recommend-type">
      <li v-for="(item, index) in secList"
          :key="index">
        <i :class="'icon-'+item.icon"></i>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <recommend-list v-for="(item,index) in recommend"
                    :key="index"
                    :items="item"></recommend-list>
  </section>
</template>

<script>
  import Banner from '../common/banner'
  import RecommendList from './recommend-list'
  export default {
    name: "discover-list",
    props: [],
    data() {
      return {
        bannerList: [
          {title: '霉霉', type: '0', link: '', imgUrl: 'http://www.daiwei.org/static/images/swiper/taylor%20swift.jpg'},
          {title: '霉霉', type: '1', link: '', imgUrl: 'http://www.daiwei.org/static/images/swiper/xusong.jpg'},
          {title: '霉霉', type: '4', link: '', imgUrl: 'http://www.daiwei.org/static/images/swiper/owl%20city.jpg'},
          {title: '霉霉', type: '2', link: '', imgUrl: 'http://www.daiwei.org/static/images/swiper/linjunjie.jpg'},
          {title: '霉霉', type: '3', link: '', imgUrl: 'http://www.daiwei.org/static/images/swiper/alan%20walker.jpg'}
        ],
        secList: [
          { icon: 'fm', title: '私人FM' },
          { icon: 'date', title: '每日听歌推荐' },
          { icon: 'rank-list', title: '热歌榜' }
        ],
        recommend: [
          {
            title: '推荐歌单',
            list: [
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              }
            ]
          },
          {
            title: '最新歌单',
            list: [
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              },
              {
                text: '「华语情歌」想得却不可得,你奈人生何',
                imgUrl: 'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E4%BB%A5%E4%B8%BA%E6%88%91%E5%8F%AF%E4%BB%A5.jpg',
                link: '',
                listening: '56万'
              }
            ]
          }
        ]
      }
    },
    components: {
      Banner,
      RecommendList
    }
  }
</script>

<style lang="scss" scoped>
  .recommend-type{
    display: flex;
    align-items: stretch;
    >li{
      padding: 10px 0;
      width: auto;
      flex: 1;
      text-align: center;
      >i{
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 3rem;
        border-radius: 50%;
        border: 1px solid $mainColor;
        color: $mainColor;
        display: inline-block;
        text-align: center;
      }
      >p{
        line-height: 30px;
      }
    }
  }
</style>
