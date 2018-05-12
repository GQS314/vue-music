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
          {title: '薛之谦', type: '1', link: '', imgUrl: 'http://p1.music.126.net/SPzFztesG0KPZKnq-9V3qA==/109951163291546754.jpg'},
          {title: '花粥', type: '2', link: '', imgUrl: 'http://p1.music.126.net/-DtIvbFj7S9QEIhwvZlKkQ==/109951163291456756.jpg'},
          {title: '张雪迎', type: '2', link: '', imgUrl: 'http://p1.music.126.net/NxNMS7aEMj0t-kdVqaH0Eg==/109951163292906160.jpg'},
          {title: '风子', type: '1', link: '', imgUrl: 'http://p1.music.126.net/FsMohVoYNdRp4xcjoEFzGg==/109951163292914397.jpg'}
        ],
        secList: [
          { icon: 'fm', title: '私人FM' },
          { icon: 'date', title: '每日推荐' },
          { icon: 'rank-list', title: '排行榜' }
        ],
        recommend: [
          {
            title: '推荐歌单',
            list: [
              {
                text: '「四季情诗」穿越四季的爱恋',
                imgUrl: 'http://p1.music.126.net/dpMOpjhBe864dTXA3e4IDA==/19184278882035262.jpg?param=140y140',
                link: '',
                listening: '69万'
              },
              {
                text: 'Tropic House‖夏日清新电子',
                imgUrl: 'http://p1.music.126.net/Iep7e47HWG5l1aWYo_qACw==/18988565812110451.jpg?param=140y140',
                link: '',
                listening: '46万'
              },
              {
                text: '华语｜那些温暖男声听起来总让人心疼',
                imgUrl: 'http://p1.music.126.net/1sTMKmvEcyZTsRVs3ILrKA==/18767563976189991.jpg?param=140y140',
                link: '',
                listening: '5408万'
              },
              {
                text: '自然音 | 雨、海、江河，静谧水之旅',
                imgUrl: 'http://p1.music.126.net/gmq-h7TS2ggQxidHrb2M5A==/109951163119767260.jpg?param=140y140',
                link: '',
                listening: '10万'
              },
              {
                text: '小时候最害怕的几部电视剧，简直童年阴影！',
                imgUrl: 'http://p1.music.126.net/nXZz7uJFxBVoUEGhyU_ySg==/109951163290374724.jpg?param=140y140',
                link: '',
                listening: '14257'
              },
              {
                text: '最爱韩剧 今生第一次',
                imgUrl: 'http://p1.music.126.net/b9XTKKb6muThsihyNqKrdQ==/109951163056735284.jpg?param=140y140',
                link: '',
                listening: '12338'
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
      padding-top: 10px;
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
